import { Component, OnInit } from '@angular/core';
import { PacageService } from '../pacage.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-preguntas',
  templateUrl: './modal-preguntas.component.html',
  styleUrls: ['./modal-preguntas.component.css']
})
export class ModalPreguntasComponent  {

  constructor(public _servi: PacageService,
    public _dialoref: MatDialogRef<ModalPreguntasComponent>,
    private toas:ToastrService) { }

  guardar() {


    if (!this._servi.form.get('id_pregunta')?.value) {
      let params = {
        tipo: "post",
        id_pregunta: this._servi.form.value.id_pregunta,
        pregunta: this._servi.form.value.pregunta,
        estatus:this._servi.form.value.estatus
      }
      this._servi.crear(params).subscribe(resp => {
        this._servi.mostrar();
        this.cerrarmodal();
        this.toas.success('Creado correctamente');
      });
    } else {
      let params = {
        tipo: "update",
        id_pregunta: this._servi.form.value.id_pregunta,
        pregunta: this._servi.form.value.pregunta,
        estatus:this._servi.form.value.estatus
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
