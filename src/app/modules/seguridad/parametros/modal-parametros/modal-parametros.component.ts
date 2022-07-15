import { Component, OnInit } from '@angular/core';
import { PacageService } from '../pacage.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-parametros',
  templateUrl: './modal-parametros.component.html',
  styleUrls: ['./modal-parametros.component.css']
})
export class ModalParametrosComponent {

  constructor(public _servi: PacageService,
    public _dialoref: MatDialogRef<ModalParametrosComponent>,
    private toas:ToastrService) { }

  guardar() {


    if (!this._servi.form.get('Cod_parametro')?.value) {
      let params = {
        tipo: "post",
        Cod_parametro: this._servi.form.value.Cod_parametro,
        Parametro: this._servi.form.value.Parametro,
        Valor: this._servi.form.value.Valor
      }
      this._servi.crear(params).subscribe(resp => {
        this._servi.mostrar();
        this.cerrarmodal();
        this.toas.success('Creado correctamente');
      });
    } else {
      let params = {
        tipo: "update",
        Cod_parametro: this._servi.form.value.Cod_parametro,
        Parametro: this._servi.form.value.Parametro,
        Valor: this._servi.form.value.Valor
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
