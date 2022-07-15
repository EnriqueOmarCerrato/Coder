import { Component, OnInit } from '@angular/core';
import { PacageService } from '../pacage.service';
import {  MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-tipo-evacuacion',
  templateUrl: './modal-tipo-evacuacion.component.html',
  styleUrls: ['./modal-tipo-evacuacion.component.css']
})
export class ModalTipoEvacuacionComponent  {

  constructor(public _servi : PacageService,
    public _dialoref:MatDialogRef<ModalTipoEvacuacionComponent>,
    private toas:ToastrService) {}

guardar(){


if(!this._servi.form.get('Cod_tipo_evaluacion')?.value){
  let params = {
    tipo:"post",
    Cod_tipo_evaluacion: this._servi.form.value.Cod_tipo_evaluacion,
    Tipo_evaluacion: this._servi.form.value.Tipo_evaluacion
  } 
this._servi.crear(params).subscribe(resp=>{
this._servi.mostrar();
this.cerrarmodal();
this.toas.success('Creado correctamente');
});
}else{
  let params = {
    tipo:"update",
    Cod_tipo_evaluacion: this._servi.form.value.Cod_tipo_evaluacion,
    Tipo_evaluacion: this._servi.form.value.Tipo_evaluacion
  }
this._servi.actualizar(params).subscribe(resp=>{
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
