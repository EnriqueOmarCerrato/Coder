import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { PacageService } from './pacage.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import {ModalEstadosComponent} from './modal-estados/modal-estados.component';
import * as  printJS from  'print-js';
import { NavService } from 'src/app/services/nav.service';
import {SidebarComponent} from 'src/app/shared/components/sidebar/sidebar.component'

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {


  pageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent!: PageEvent;
  d: number = 0; //desde donde
  h: number = 5; //hasta donde
  buscar: any = '';
  campo: any = ['Estatus'];
  permisoinsertar:boolean;
  permisoeliminar:boolean;
  permisoactualizar:boolean;

  constructor(private http:HttpClient,private toastr: ToastrService,
             public service:PacageService,
             private _dialog: MatDialog,
             private navpermiso:NavService,
             private SidebarComponent:SidebarComponent) {

              let params = {
                rol: 1,
                objeto: 23
              }

              this.SidebarComponent.menuspermiso(23).subscribe(resp=>{
                 this.permisoinsertar = resp[0].Permiso_insertar == '1' ?  true : false;
                 this.permisoeliminar = resp[0].Permiso_eliminar == '1' ?  true : false;
                 this.permisoactualizar = resp[0].Permiso_actualizar == '1' ?  true : false;

              });
              }

  ngOnInit(): void {
    this.service.mostrar();
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
      this._dialog.open(ModalEstadosComponent, dialogConfig);
      this.service.popform(item);
    }
  }

  crear() {
    if(this.permisoinsertar){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '15%';
      this._dialog.open(ModalEstadosComponent, dialogConfig);
      this.service.inicializarForm();
    }

  }

  eliminar(id: any) {

      let params = {
        tipo:"delete",
        Cod_estatus: id,
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
   <h5><b>ASOCIACIÓN HONDUREÑA DE APOYO AL AUTISTA</b></h5>
   <h5>REPORTE</h5>
   <h5>Listado Estados</h5>
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
