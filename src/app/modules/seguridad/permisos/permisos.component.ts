import { Component, OnInit } from '@angular/core';
import { PacageService } from './pacage.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import {ModalPermisosComponent} from './modal-permisos/modal-permisos.component'
import * as  printJS from  'print-js';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NavService } from 'src/app/services/nav.service';
import {SidebarComponent} from 'src/app/shared/components/sidebar/sidebar.component'

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent implements OnInit {
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
                objeto: 21
              }

              this.SidebarComponent.menuspermiso(21).subscribe(resp=>{
                 this.permisoinsertar = resp[0].Permiso_insertar == '1' ?  true : false;
                 this.permisoeliminar = resp[0].Permiso_eliminar == '1' ?  true : false;
                 this.permisoactualizar = resp[0].Permiso_actualizar == '1' ?  true : false;
                 console.log(this.permisoinsertar )
              });
             }

  ngOnInit(): void {
    this.service.mostrar();
  }


  cambioPagina(e: PageEvent) {
    this.d = e.pageIndex * e.pageSize;
    this.h = this.d + e.pageSize;
  }


  crear() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '15%';
      this._dialog.open(ModalPermisosComponent, dialogConfig);
   // this.service.inicializarForm();
  }

  eliminar(id: any) {

      let params = {
        tipo:"delete",
        Cod_permiso: id,
      }
      this.service.eliminar(params).subscribe((resp: any) => {
        this.service.mostrar();
        this.toastr.error('Eliminado correctamente');
      });

  }
  editarrol(i:any,accion:string){
      let params: any;
      switch (accion) {
        case 'insertar':
          params = {
            tipo:"update",
            Cod_permiso:i.Cod_permiso,
            Cod_rol:i.Cod_rol,
            Cod_objeto:i.Cod_objeto,
            Permiso_insertar:i.Permiso_insertar == 1 ? 0 : 1,
            Permiso_eliminar:i.Permiso_eliminar,
            Permiso_actualizar:i.Permiso_actualizar,
            Permiso_consultar:i.Permiso_consultar
          }

          this.service.actualizar(params).subscribe(resp=>{
            this.toastr.info('Actualizado correctamente');
           this.service.mostrar();
          })
          break;
          case 'mostrar':
            params = {
            tipo:"update",
            Cod_permiso:i.Cod_permiso,
            Cod_rol:i.Cod_rol,
            Cod_objeto:i.Cod_objeto,
            Permiso_insertar:i.Permiso_insertar,
            Permiso_eliminar:i.Permiso_eliminar,
            Permiso_actualizar:i.Permiso_actualizar,
            Permiso_consultar:i.Permiso_consultar == 1 ? 0 : 1
          }

            this.service.actualizar(params).subscribe(resp=>{
              this.toastr.success('Actualizado correctamente');
             this.service.mostrar();
            })
          break;
          case 'editar':
            params = {
              tipo:"update",
              Cod_permiso:i.Cod_permiso,
              Cod_rol:i.Cod_rol,
              Cod_objeto:i.Cod_objeto,
              Permiso_insertar:i.Permiso_insertar,
              Permiso_eliminar:i.Permiso_eliminar,
              Permiso_actualizar:i.Permiso_actualizar == 1 ? 0 : 1,
              Permiso_consultar:i.Permiso_consultar
            }
            this.service.actualizar(params).subscribe(resp=>{
              this.toastr.info('Actualizado correctamente');
             this.service.mostrar();
            })
          break;
          case 'eliminar':
            params = {
              tipo:"update",
              Cod_permiso:i.Cod_permiso,
              Cod_rol:i.Cod_rol,
              Cod_objeto:i.Cod_objeto,
              Permiso_insertar:i.Permiso_insertar,
              Permiso_eliminar:i.Permiso_eliminar == 1 ? 0 : 1,
              Permiso_actualizar:i.Permiso_actualizar,
              Permiso_consultar:i.Permiso_consultar
            }
            this.service.actualizar(params).subscribe(resp=>{
              this.toastr.info('Actualizado correctamente');
             this.service.mostrar();
            })
          break;
        default:
          break;
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
   <h5>Listado de  Permisos</h5>
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
