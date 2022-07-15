import { Component, OnInit } from '@angular/core';
import { PacageService } from '../pacage.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-servicio',
  templateUrl: './modal-servicio.component.html',
  styleUrls: ['./modal-servicio.component.css']
})
export class ModalServicioComponent {


  constructor(public _servi: PacageService,
    public _dialoref: MatDialogRef<ModalServicioComponent>,
    private toas:ToastrService) { }

  guardar() {

    if (!this._servi.form.get('Cod_modalidad_servicio')?.value) {
      let params = {
        tipo: "post",
        Cod_modalidad_servicio: this._servi.form.value.Cod_modalidad_servicio,
        Modalidad_servicio: this._servi.form.value.Modalidad_servicio
      }
      this._servi.crear(params).subscribe(resp => {
        this._servi.mostrar();
        this.cerrarmodal();
        this.toas.success('Creado correctamente');
      });
    } else {
      let params = {
        tipo: "update",
        Cod_modalidad_servicio: this._servi.form.value.Cod_modalidad_servicio,
        Modalidad_servicio: this._servi.form.value.Modalidad_servicio
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
