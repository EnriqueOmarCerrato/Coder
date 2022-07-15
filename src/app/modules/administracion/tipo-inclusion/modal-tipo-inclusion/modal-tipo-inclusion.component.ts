import { Component, OnInit } from '@angular/core';
import { PacageService } from '../pacage.service';
import {  MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-tipo-inclusion',
  templateUrl: './modal-tipo-inclusion.component.html',
  styleUrls: ['./modal-tipo-inclusion.component.css']
})
export class ModalTipoInclusionComponent  {

  constructor(public _servi : PacageService,
    public _dialoref:MatDialogRef<ModalTipoInclusionComponent>,
    private toas:ToastrService) {}

guardar(){


if(!this._servi.form.get('Cod_tipo_inclusion')?.value){
  let params = {
    tipo:"post",
    Cod_tipo_inclusion: this._servi.form.value.Cod_tipo_inclusion,
    Tipo_inclusion:this._servi.form.value.Tipo_inclusion
  } 
this._servi.crear(params).subscribe(resp=>{
this._servi.mostrar();
this.cerrarmodal();
this.toas.success('Creado correctamente');
});
}else{
  let params = {
    tipo:"update",
    Cod_tipo_inclusion: this._servi.form.value.Cod_tipo_inclusion,
    Tipo_inclusion:this._servi.form.value.Tipo_inclusion
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
