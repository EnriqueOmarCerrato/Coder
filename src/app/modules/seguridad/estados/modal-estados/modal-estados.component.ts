import { Component, OnInit } from '@angular/core';
import { PacageService } from '../pacage.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-modal-estados',
  templateUrl: './modal-estados.component.html',
  styleUrls: ['./modal-estados.component.css']
})
export class ModalEstadosComponent {

  constructor(public _servi: PacageService,
    public _dialoref: MatDialogRef<ModalEstadosComponent>,
    private toas:ToastrService) { }

  guardar() {


    if (!this._servi.form.get('Cod_estatus')?.value) {
      let params = {
        tipo: "post",
        Cod_estatus: this._servi.form.value.Cod_estatus,
        Estatus: this._servi.form.value.Estatus
      }
      this._servi.crear(params).subscribe(resp => {
        this._servi.mostrar();
        this.cerrarmodal();
        this.toas.success('Creado correctamente');
      });
    } else {
      let params = {
        tipo: "update",
        Cod_estatus: this._servi.form.value.Cod_estatus,
        Estatus: this._servi.form.value.Estatus
      }
      this._servi.actualizar(params).subscribe(resp => {
        this._servi.mostrar();
        this.cerrarmodal();
        this.toas.success('Editado correctamente');
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
