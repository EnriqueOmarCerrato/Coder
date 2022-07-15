import { Component, OnInit } from '@angular/core';
import { PacageService } from './pacage.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {ModalParametrosComponent} from './modal-parametros/modal-parametros.component'
import * as  printJS from  'print-js';
import { NavService } from 'src/app/services/nav.service';
import {SidebarComponent} from 'src/app/shared/components/sidebar/sidebar.component'

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {

  pageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent!: PageEvent;
  d: number = 0; //desde donde
  h: number = 5; //hasta donde
  buscar: any = '';
  campo: any = ['Parametro'];
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
                objeto: 22
              }

              this.SidebarComponent.menuspermiso(22).subscribe(resp=>{
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
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '20%';
      this._dialog.open(ModalParametrosComponent, dialogConfig);
      this.service.popform(item);
  }

  crear() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '20%';
      this._dialog.open(ModalParametrosComponent, dialogConfig);
      this.service.inicializarForm();

  }

  eliminar(id: any) {
      let params = {
        tipo:"delete",
        Cod_parametro: id,
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
   <h5>Listado de Paramtros</h5>
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
