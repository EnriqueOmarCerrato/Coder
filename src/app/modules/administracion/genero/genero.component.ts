import { Component, OnDestroy, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { PacageService } from './pacage.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalGeneroComponent } from './modal-genero/modal-genero.component';
import * as printJS from 'print-js';
import {ConsultasService} from './../../../services/consultas.service'
import { NavService } from 'src/app/services/nav.service';
import {SidebarComponent} from 'src/app/shared/components/sidebar/sidebar.component'

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.scss']
})
export class GeneroComponent implements OnInit,OnDestroy {
  loading=true;
  loadingConfig=true;
  mostrarModal=false;
  data:any;
  temp:any;
  mostrarInsert=true;
  codObjeto=8;
  user="USER";
  permisoinsertar:boolean;
  permisoeliminar:boolean;
  permisoactualizar:boolean;
  pageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent!: PageEvent;
  d: number = 0; //desde donde
  h: number = 5; //hasta donde
  buscar: any = '';
  campo: any = ['Genero'];

  constructor(private http:HttpClient,private toastr: ToastrService,
             public service:PacageService,
             private _dialog: MatDialog,
             private bitacora:ConsultasService,
             private SidebarComponent:SidebarComponent) {
              let params = {
                rol: 1,
                objeto: 10
              }

              this.SidebarComponent.menuspermiso(10).subscribe(resp=>{
                 this.permisoinsertar = resp[0].Permiso_insertar == '1' ?  true : false;
                 this.permisoeliminar = resp[0].Permiso_eliminar == '1' ?  true : false;
                 this.permisoactualizar = resp[0].Permiso_actualizar == '1' ?  true : false;

              });
              }

  ngOnInit(): void {
    let params = {
        tipo:"post",
        Cod_usuario: 1,
        Cod_objeto:10,
        Accion:'Entro',
        Descripcion:'Genero'
    }
    this.bitacora.crear(params).subscribe(resp=>{
      console.log(resp)
    })
    this.service.mostrar();
  }

  ngOnDestroy(): void {
    let params = {
      tipo:"post",
      Cod_usuario: 1,
      Cod_objeto:10,
      Accion:'Salio',
      Descripcion:'Genero'
  }
  this.bitacora.crear(params).subscribe(resp=>{
    console.log(resp)
  })
  }


  cambioPagina(e: PageEvent) {
    this.d = e.pageIndex * e.pageSize;
    this.h = this.d + e.pageSize;
  }

  editar(item: any) {
    if(this.permisoactualizar){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '15%';
      this._dialog.open(ModalGeneroComponent, dialogConfig);
      this.service.popform(item);
    }
  }

  crear() {
    if(this.permisoinsertar){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '15%';
      this._dialog.open(ModalGeneroComponent, dialogConfig);
      this.service.inicializarForm();
    }

  }

  eliminar(id: any) {


      let params = {
        tipo:"delete",
        Cod_genero: id,
      }
      if(this.permisoeliminar){
        this.service.eliminar(params).subscribe((resp: any) => {
          this.service.mostrar();
          this.toastr.error('Eliminado correctamente');
        });
      }

  }

  impo() {

    let url = 'assets/logooo.jpeg';
    let rawHTML = `
   <div id="otra">

   <div class="parraf">
   <img src="${url}">
   <h5>ASOCIACIÓN HONDUREÑA DE APOYO AL AUTISTA</h5>
   <h5>REPORTE</h5>
   <h5>Listado de Generos</h5>
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
