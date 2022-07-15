import { Component, OnInit } from '@angular/core';
import { PacageService } from '../pacage.service';
import {  MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-nacionalidad',
  templateUrl: './modal-nacionalidad.component.html',
  styleUrls: ['./modal-nacionalidad.component.css']
})
export class ModalNacionalidadComponent {

  constructor(public _servi : PacageService,
    public _dialoref:MatDialogRef<ModalNacionalidadComponent>,
    private toas:ToastrService) {}

guardar(){


if(!this._servi.form.get('Cod_nacionalidad')?.value){
  let params = {
    tipo:"post",
    Cod_nacionalidad: this._servi.form.value.Cod_nacionalidad,
    Nacionalidad: this._servi.form.value.Nacionalidad
} 
this._servi.crear(params).subscribe(resp=>{
  console.log(resp)
this._servi.mostrar();
this.cerrarmodal();
this.toas.success('Creado correctamente');
});
}else{
  let params = {
    tipo:"update",
    Cod_nacionalidad: this._servi.form.value.Cod_nacionalidad,
    Nacionalidad: this._servi.form.value.Nacionalidad
  }
this._servi.actualizar(params).subscribe(resp=>{
  console.log(resp)
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
