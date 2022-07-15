import { Component, OnInit } from '@angular/core';
import { PacageService } from '../pacage.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-roles',
  templateUrl: './modal-roles.component.html',
  styleUrls: ['./modal-roles.component.css']
})
export class ModalRolesComponent  {

  constructor(public _servi: PacageService,
    public _dialoref: MatDialogRef<ModalRolesComponent>,
    private toas:ToastrService) {
      this._servi.mostrarstatus();
     }

  guardar() {


    if (!this._servi.form.get('Cod_rol')?.value) {
      let params = {
        tipo: "post",
        Cod_rol: this._servi.form.value.Cod_rol,
        Rol: this._servi.form.value.Rol,
        Cod_status: this._servi.form.value.Cod_estatus,
        Descripcion :this._servi.form.value.Descripcion,
        Usuario_registro:'Admin'
      }
      this._servi.crear(params).subscribe(resp => {
        this._servi.mostrar();
        this.cerrarmodal();
        this.toas.success('Creado correctamente');
      });
    } else {
      let params = {
        tipo: "update",
        Cod_rol: this._servi.form.value.Cod_rol,
        Rol: this._servi.form.value.Rol,
        Cod_status: this._servi.form.value.Cod_estatus,
        Descripcion :this._servi.form.value.Descripcion,
        Usuario_registro:'Admin'
      }
      this._servi.actualizar(params).subscribe(resp => {
        this._servi.mostrar();
        this.cerrarmodal();
        this.toas.success('Editao correctamente');
      });
    }
  }


  //limpia modal
  clear() {
    this._servi.form.reset();
    this._servi.inicializarForm();
  }

  //cerrarmodal
  cerrarmodal() {
    this._dialoref.close();
  }

}
