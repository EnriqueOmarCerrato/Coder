import { Component, OnInit } from '@angular/core';
import { PacageService } from '../pacage.service';
import {  MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-sede',
  templateUrl: './modal-sede.component.html',
  styleUrls: ['./modal-sede.component.css']
})
export class ModalSedeComponent  {



  constructor(public _servi : PacageService,
    public _dialoref:MatDialogRef<ModalSedeComponent>,
    private toas:ToastrService) {}

guardar(){


if(!this._servi.form.get('Cod_sede')?.value){
  let params = {
    tipo:"post",
    Cod_sede: this._servi.form.value.Cod_sede,
    Administrador_general:this._servi.form.value.Administrador_general,
    Correo_electronico_sede: this._servi.form.value.Correo_electronico_sede,
    Nombre_sede: this._servi.form.value.Nombre_sede,
    Telefono_sede: this._servi.form.value.Telefono_sede,
    Direccion_sede:this._servi.form.value.Direccion_sede
  } 
this._servi.crear(params).subscribe(resp=>{
this._servi.mostrar();
this.cerrarmodal();
this.toas.success('Creado correctamente');
});
}else{
  let params = {
    tipo:"update",
    Cod_sede: this._servi.form.value.Cod_sede,
    Administrador_general:this._servi.form.value.Administrador_general,
    Correo_electronico_sede: this._servi.form.value.Correo_electronico_sede,
    Nombre_sede: this._servi.form.value.Nombre_sede,
    Telefono_sede: this._servi.form.value.Telefono_sede,
    Direccion_sede:this._servi.form.value.Direccion_sede
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
