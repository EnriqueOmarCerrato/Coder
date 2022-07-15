import { Component, OnInit } from '@angular/core';
import { PacageService } from '../pacage.service';
import {  MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-parentesco',
  templateUrl: './modal-parentesco.component.html',
  styleUrls: ['./modal-parentesco.component.css']
})
export class ModalParentescoComponent  {

  constructor(public _servi : PacageService,
    public _dialoref:MatDialogRef<ModalParentescoComponent>,
    private toas:ToastrService) {}

guardar(){


if(!this._servi.form.get('Cod_parentesco')?.value){
  let params = {
    tipo:"post",
    Cod_parentesco: this._servi.form.value.Cod_parentesco,
    Parentesco: this._servi.form.value.Parentesco
  } 
this._servi.crear(params).subscribe(resp=>{
this._servi.mostrar();
this.cerrarmodal();
this.toas.success('Creado correctamente');
});
}else{
  let params = {
    tipo:"update",
    Cod_parentesco: this._servi.form.value.Cod_parentesco,
    Parentesco: this._servi.form.value.Parentesco
  }
this._servi.actualizar(params).subscribe(resp=>{
this._servi.mostrar();
this.cerrarmodal();
this.toas.success('Creado correctamente');
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
