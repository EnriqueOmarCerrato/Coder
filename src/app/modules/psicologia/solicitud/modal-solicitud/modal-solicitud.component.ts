import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PacageService } from '../pacage.service';
@Component({
  selector: 'app-modal-solicitud',
  templateUrl: './modal-solicitud.component.html',
  styleUrls: ['./modal-solicitud.component.css']
})
export class ModalSolicitudComponent implements OnInit {
  constructor(public _servi : PacageService,
    public _dialoref:MatDialogRef<ModalSolicitudComponent>) {
      
    }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this._servi.mostrapersona();
      this._servi.mostrardepartamento();
      this._servi.mostrarsedes();
      this._servi.mostrartipoevaluacion();
      this._servi.mostrarparentesco();
      this._servi.mostrarstatus();

    
    }

guardar(){

if(!this._servi.form.get('Cod_solicitud_evaluacion')?.value){
  let params = {
    tipo:"post",
    Cod_departamento: this._servi.form.value.Cod_departamento,
    Cod_sede: this._servi.form.value.Cod_sede,
    Cod_tipo_evaluacion:this._servi.form.value.Cod_tipo_evaluacion,
    Cod_parentesco: this._servi.form.value.Cod_parentesco,
    Cod_estatus: this._servi.form.value.Cod_estatus,
    Nombre_beneficiario: this._servi.form.value.Nombre_beneficiario,
    Edad_beneficiario: this._servi.form.value.Edad_beneficiario,
    Direccion_actual: this._servi.form.value.Direccion_actual,
    Nombre_responsable: this._servi.form.value.Nombre_responsable,
    Telefono_fijo:this._servi.form.value.Telefono_fijo,
    Telefono_celular:this._servi.form.value.Telefono_celular,
    Correo_electronico: this._servi.form.value.Correo_electronico,
    Fecha_solicitud: this._servi.form.value.Fecha_solicitud,
    Usuario_registro: localStorage.getItem("login")
  } 

  console.log(params)
this._servi.crear(params).subscribe(resp=>{
  console.log(resp)
this._servi.mostrar();
this.cerrarmodal();
});
}else{

  let params = {
    tipo:"update",
    Cod_solicitud_evaluacion: this._servi.form.value.Cod_solicitud_evaluacion,
    Cod_departamento: this._servi.form.value.Cod_departamento,
    Cod_sede: this._servi.form.value.Cod_sede,
    Cod_tipo_evaluacion:this._servi.form.value.Cod_tipo_evaluacion,
    Cod_parentesco: this._servi.form.value.Cod_parentesco,
    Cod_estatus: this._servi.form.value.Cod_estatus,
    Nombre_beneficiario: this._servi.form.value.Nombre_beneficiario,
    Edad_beneficiario: this._servi.form.value.Edad_beneficiario,
    Direccion_actual: this._servi.form.value.Direccion_actual,
    Nombre_responsable: this._servi.form.value.Nombre_responsable,
    Telefono_fijo:this._servi.form.value.Telefono_fijo,
    Telefono_celular:this._servi.form.value.Telefono_celular,
    Correo_electronico: this._servi.form.value.Correo_electronico,
    Fecha_solicitud: this._servi.form.value.Fecha_solicitud,
    Usuario_registro: localStorage.getItem("admin")
    
  }
this._servi.actualizar(params).subscribe(resp=>{
this._servi.mostrar();
//this.cerrarmodal();
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
