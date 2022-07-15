import { Component, OnDestroy, OnInit } from '@angular/core';
import { PacageService } from './pacage.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {ModalObjetosComponent} from './modal-objetos/modal-objetos.component';
import * as  printJS from  'print-js';
import { ConsultasService } from 'src/app/services/consultas.service';
import { NavService } from 'src/app/services/nav.service';
import {SidebarComponent} from 'src/app/shared/components/sidebar/sidebar.component'

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})
export class ObjetosComponent implements OnInit,OnDestroy {

  pageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent!: PageEvent;
  d: number = 0; //desde donde
  h: number = 5; //hasta donde
  buscar: any = '';
  campo: any = ['Nombre_objeto'];
  permisoinsertar:boolean;
  permisoeliminar:boolean;
  permisoactualizar:boolean;


  constructor(private http:HttpClient,private toastr: ToastrService,
             public service:PacageService,
             private _dialog: MatDialog,
             private bitacora:ConsultasService,
             private navpermiso:NavService,
             private SidebarComponent:SidebarComponent) {
              let params = {
                rol: 1,
                objeto: 19
              }

              this.SidebarComponent.menuspermiso(19).subscribe(resp=>{
                 this.permisoinsertar = resp[0].Permiso_insertar == '1' ?  true : false;
                 this.permisoeliminar = resp[0].Permiso_eliminar == '1' ?  true : false;
                 this.permisoactualizar = resp[0].Permiso_actualizar == '1' ?  true : false;
                 console.log(this.permisoinsertar )
              });
             }

  ngOnInit(): void {
    let params = {
      tipo:"post",
      Cod_usuario: 85,
      Cod_objeto:19,
      Accion:'Entro',
      Descripcion:'Objeto'
  }
  this.bitacora.crear(params).subscribe(resp=>{
  })
     this.service.mostrar();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    let params = {
      tipo:"post",
      Cod_usuario: 85,
      Cod_objeto:19,
      Accion:'Salio',
      Descripcion:'Objetos'
  }
  this.bitacora.crear(params).subscribe(resp=>{
  })
  }


  cambioPagina(e: PageEvent) {
    this.d = e.pageIndex * e.pageSize;
    this.h = this.d + e.pageSize;
  }

  editar(item: any) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '15%';
      this._dialog.open(ModalObjetosComponent, dialogConfig);
      this.service.popform(item);

  }

  crear() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '15%';
      this._dialog.open(ModalObjetosComponent, dialogConfig);
      this.service.inicializarForm();


  }

  eliminar(id: any) {
      let params = {
        tipo:"delete",
        Cod_objeto: id,
      }
        this.service.eliminar(params).subscribe((resp: any) => {
          this.service.mostrar();
          this.toastr.error('Eliminado correctamente');
        });


  }

  impo() {

    let url = 'assets/logooo.jpeg';
    let rawHTML = `
   <div id="otra">
   <div class="parraf">
   <img src="${url}">
   <h5><b>ASOCIACIÓN HONDUREÑA DE APOYO AL AUTISTA</b></h5>
   <h5>REPORTE</h5>
   <h5>Listado  de Objetos</h5>
   </div>
   </div><br>`;
    printJS({
      printable: 'reporte',
      type: 'html',
      header: rawHTML,
      css: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
      style: '@page {   margin-left: 10%; } #otra {display: block  } #otra img { max-width: 140px;} .parraf { width: 100%; padding: 0px; text-align: center;  max-height: 80px, margin-left: 90%; }',
      scanStyles: false,
      documentTitle: 'Servicios',
      font_size: '10pt',
      ignoreElements: ['d']
    })

  }

}
