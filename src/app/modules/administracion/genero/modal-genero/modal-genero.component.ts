import { Component, OnInit } from '@angular/core';
import { PacageService } from '../pacage.service';
import {  MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-genero',
  templateUrl: './modal-genero.component.html',
  styleUrls: ['./modal-genero.component.css']
})
export class ModalGeneroComponent  {

  constructor(public _servi : PacageService,
    public _dialoref:MatDialogRef<ModalGeneroComponent>,
    private toas:ToastrService) {}

guardar(){


if(!this._servi.form.get('Cod_genero')?.value){
  let params = {
    tipo:"post",
    Cod_genero: this._servi.form.value.Cod_genero,
    Genero: this._servi.form.value.Genero
  } 
this._servi.crear(params).subscribe(resp=>{
this._servi.mostrar();
this.cerrarmodal();
this.toas.success('Creado correctamente');
});
}else{
  let params = {
    tipo:"update",
    Cod_genero: this._servi.form.value.Cod_genero,
    Genero: this._servi.form.value.Genero
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


sololetras(e){
 return ((e.charCode >= 65 && e.charCode <= 90) || (e.charCode >= 97 && e.charCode <= 122))
}

//cerrarmodal
cerrarmodal() {
this._dialoref.close();
}

}
