import { Component, OnInit } from '@angular/core';
import { PacageService } from '../pacage.service';
import {  MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-modal-departamento',
  templateUrl: './modal-departamento.component.html',
  styleUrls: ['./modal-departamento.component.css']
})
export class ModalDepartamentoComponent  {
  toas: any;
  constructor(public _servi : PacageService,
    public _dialoref:MatDialogRef<ModalDepartamentoComponent>) {}

guardar(){


if(!this._servi.form.get('Cod_departamento_laboral')?.value){
  let params = {
    tipo:"post",
    Cod_departamento_laboral: this._servi.form.value.Cod_departamento_laboral,
    Departamento_laboral: this._servi.form.value.Departamento_laboral
  } 
this._servi.crear(params).subscribe(resp=>{
this._servi.mostrar();
this.cerrarmodal();
});
}else{
  console.log('first')
  let params = {
    tipo:"update",
    Cod_departamento_laboral: this._servi.form.value.Cod_departamento_laboral,
    Departamento_laboral: this._servi.form.value.Departamento_laboral
  }
this._servi.actualizar(params).subscribe(resp=>{
this._servi.mostrar();
this.cerrarmodal();
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
