import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PacageService } from '../pacage.service';

@Component({
  selector: 'app-modal-colaborador',
  templateUrl: './modal-colaborador.component.html',
  styleUrls: ['./modal-colaborador.component.css']
})
export class ModalColaboradorComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  fileURL:any;

  constructor(public _servi : PacageService,
    public _dialoref:MatDialogRef<ModalColaboradorComponent>,
    private toas: ToastrService) {
      
    }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this._servi.mostrapersona();
      this._servi.mostrarsede();
      this._servi.mostrardepartamento();
      this._servi.mostrartipopersona()
      this._servi.mostrargenero()
      this._servi.mostrarnacionalidad()
      this._servi.mostrarestadocivil()
      this._servi.mostrardepartamento0()
      this._servi.mostrarstatus()
    }

guardar(){


if(!this._servi.form.get('Cod_colaborador')?.value){
  let params = {
    tipo:"post",
    Cod_departamento_laboral: this._servi.form.value.Cod_departamento_laboral,
    Cargo_principal:this._servi.form.value.Cargo_principal,
    Descripcion_funciones: this._servi.form.value.Descripcion_funciones,
    Fecha_contratacion: this._servi.form.value.Fecha_contratacion,
    Usuario_registro: localStorage.getItem("login"),
    Cod_sede: this._servi.form.value.Cod_sede,
    Cod_tipo_persona: 1,
    Cod_genero: this._servi.datospersonales.value.Cod_genero,
    Cod_nacionalidad: this._servi.datospersonales.value.Cod_nacionalidad,
    Cod_estado_civil: this._servi.datospersonales.value.Cod_estado_civil,
    Cod_departamento: this._servi.datospersonales.value.Cod_departamento,
    Cod_estatus: this._servi.datospersonales.value.Cod_estatus,
    Nombre: this._servi.datospersonales.value.Nombre,
    Apellido: this._servi.datospersonales.value.Apellido,
    No_identidad: this._servi.datospersonales.value.No_identidad,
    Documento_id: this._servi.Documento_id,
    Lugar_nacimiento: this._servi.datospersonales.value.Lugar_nacimiento,
    Fecha_nacimiento: this._servi.datospersonales.value.Fecha_nacimiento,
    Residencia_actual: this._servi.datospersonales.value.Residencia_actual,
    Telefono_fijo: this._servi.datospersonales.value.Telefono_fijo,
    Correo_electronico: this._servi.datospersonales.value.Correo_electronico,
    Telefono_celular: this._servi.datospersonales.value.Telefono_celular
  
  } 


this._servi.crear(params).subscribe(resp=>{
  console.log(resp)
this._servi.mostrar();
  this.cerrarmodal();
  this.toas.success('Creado correctamente');
});
}else{
  console.log('first')
  let params = {
    tipo:"update",
    Cod_persona: this._servi.form.value.Cod_persona,
    Cod_departamento_laboral: this._servi.form.value.Cod_departamento_laboral,
    Cargo_principal:this._servi.form.value.Cargo_principal,
    Descripcion_funciones: this._servi.form.value.Descripcion_funciones,
    Fecha_contratacion: this._servi.form.value.Fecha_contratacion,
    Usuario_registro: localStorage.getItem("login"),
    Cod_sede: this._servi.form.value.Cod_sede,
    Cod_tipo_persona: 1,
    Cod_genero: this._servi.datospersonales.value.Cod_genero,
    Cod_nacionalidad: this._servi.datospersonales.value.Cod_nacionalidad,
    Cod_estado_civil: this._servi.datospersonales.value.Cod_estado_civil,
    Cod_departamento: this._servi.datospersonales.value.Cod_departamento,
    Cod_estatus: this._servi.datospersonales.value.Cod_estatus,
    Nombre: this._servi.datospersonales.value.Nombre,
    Apellido: this._servi.datospersonales.value.Apellido,
    No_identidad: this._servi.datospersonales.value.No_identidad,
    Documento_id: this._servi.Documento_id,
    Lugar_nacimiento: this._servi.datospersonales.value.Lugar_nacimiento,
    Fecha_nacimiento: this._servi.datospersonales.value.Fecha_nacimiento,
    Residencia_actual: this._servi.datospersonales.value.Residencia_actual,
    Telefono_fijo: this._servi.datospersonales.value.Telefono_fijo,
    Correo_electronico: this._servi.datospersonales.value.Correo_electronico,
    Telefono_celular: this._servi.datospersonales.value.Telefono_celular
  }
  console.log(params)
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

onUpload(input:any) {  
  let originalFile = input.target.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(originalFile);
  reader.onload = () => {
    let json = JSON.stringify({ dataURL: reader.result });
    this._servi.Documento_id = JSON.parse(json).dataURL;
  };
}

//cerrarmodal
cerrarmodal() {
this._dialoref.close();
}



}
