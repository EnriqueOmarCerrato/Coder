import { Component, OnInit } from '@angular/core';
import { PacageService } from '../pacage.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-objetos',
  templateUrl: './modal-objetos.component.html',
  styleUrls: ['./modal-objetos.component.css']
})
export class ModalObjetosComponent {

  constructor(public _servi: PacageService,
    public _dialoref: MatDialogRef<ModalObjetosComponent>,
    private toas:ToastrService) { }

  guardar() {


    if (!this._servi.form.get('Cod_objeto')?.value) {
      let params = {
        tipo: "post",
        Cod_objeto: this._servi.form.value.Cod_objeto,
        Nombre_objeto: this._servi.form.value.Nombre_objeto,
        Descripcion_objeto: this._servi.form.value.Descripcion_objeto,
        Tipo_objeto :this._servi.form.value.Tipo_objeto
      }
      this._servi.crear(params).subscribe(resp => {
        this._servi.mostrar();
        this.cerrarmodal();
        this.toas.success('Creado correctamente');
      });
    } else {
      let params = {
        tipo: "update",
        Cod_objeto: this._servi.form.value.Cod_objeto,
        Nombre_objeto: this._servi.form.value.Nombre_objeto,
        Descripcion_objeto: this._servi.form.value.Descripcion_objeto,
        Tipo_objeto :this._servi.form.value.Tipo_objeto
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
