import { Component, OnInit } from '@angular/core';
import { PacageService } from '../pacage.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-atencion',
  templateUrl: './modal-atencion.component.html',
  styleUrls: ['./modal-atencion.component.css']
})
export class ModalAtencionComponent {

  constructor(public _servi: PacageService,
    public _dialoref: MatDialogRef<ModalAtencionComponent>,
    private toas:ToastrService) { }

  guardar() {

    if (!this._servi.form.get('Cod_modalidad_atencion')?.value) {
      let params = {
        tipo: "post",
        Cod_modalidad_atencion: this._servi.form.value.Cod_modalidad_atencion,
        Modalidad_atencion: this._servi.form.value.Modalidad_atencion
      }
      this._servi.crear(params).subscribe(resp => {
        this._servi.mostrar();
        this.cerrarmodal();
        this.toas.success('Creado correctamente');
      });
    } else {
      let params = {
        tipo: "update",
        Cod_modalidad_atencion: this._servi.form.value.Cod_modalidad_atencion,
        Modalidad_atencion: this._servi.form.value.Modalidad_atencion
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
