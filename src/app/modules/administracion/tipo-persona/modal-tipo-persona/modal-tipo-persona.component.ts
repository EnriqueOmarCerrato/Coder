import { Component, OnInit } from '@angular/core';
import { PacageService } from '../pacage.service';
import {  MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-tipo-persona',
  templateUrl: './modal-tipo-persona.component.html',
  styleUrls: ['./modal-tipo-persona.component.css']
})
export class ModalTipoPersonaComponent  {

  constructor(public _servi : PacageService,
    public _dialoref:MatDialogRef<ModalTipoPersonaComponent>,
    private toas:ToastrService) {}

guardar(){


if(!this._servi.form.get('Cod_tipo_persona')?.value){
  let params = {
    tipo:"post",
    Cod_tipo_persona: this._servi.form.value.Cod_tipo_persona,
    Tipo_persona: this._servi.form.value.Tipo_persona
  } 
this._servi.crear(params).subscribe(resp=>{
this._servi.mostrar();
this.cerrarmodal();
this.toas.success('Creado correctamente');
});
}else{
  

  let params = {
    tipo:"update",
    Cod_tipo_persona: this._servi.form.value.Cod_tipo_persona,
    Tipo_persona: this._servi.form.value.Tipo_persona
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
