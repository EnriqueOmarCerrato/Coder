import { Component, OnInit, Injectable  } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MantenimientoService} from '../mantenimiento.service'
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent {
  constructor(public _servi: MantenimientoService,private http:HttpClient,

    public _dialoref: MatDialogRef<ModalUserComponent>,
    private toas:ToastrService) {
      this._servi.mostrarroles();
      this._servi.mostrarsedes();
     }

  guardar() {
    if (!this._servi.form.get('id_usuario')?.value) {
      let params = {
        tipo: "post",
        id_usuario:this._servi.form.value.id_usuario,
        Cod_rol: this._servi.form.value.Cod_rol,
        Cod_sede: this._servi.form.value.Cod_sede,
        nombre_usuario:this._servi.form.value.nombre_usuario,
        pass: this._servi.form.value.pass,
        estado_usuario: this._servi.form.value.estado_usuario,
        correo_electronico: this._servi.form.value.correo_electronico,
      }
        this._servi.crear(params).subscribe(resp => {
        console.log('mas: '+ resp['error']);
        this._servi.mostrar();
        if(resp['error']==true){
          this.toas.info('Ya existe el usuario con este nombre');
        }else{
          if(resp['mensaje']=='Datos incompletos'){
            this.toas.info('Datos incompletos');
          }else{
            this.cerrarmodal();
            this.toas.success('Creado correctamente');
          }
        }
      });
    } else {
      let params = {
        tipo: "update",
        id_usuario:this._servi.form.value.id_usuario,
        Cod_rol: this._servi.form.value.Cod_rol,
        Cod_sede: this._servi.form.value.Cod_sede,
        nombre_usuario:this._servi.form.value.nombre_usuario,
        pass: this._servi.form.value.pass,
        estado_usuario: this._servi.form.value.estado_usuario,
        correo_electronico: this._servi.form.value.correo_electronico
      }
      this._servi.actualizar(params).subscribe(resp => {
        this._servi.mostrar();
        if(resp['error']==true){
          this.toas.info('Ya existe el usuario con este nombre');
        }else{
          if(resp['mensaje']=='Datos incompletos'){
            this.toas.info('Datos incompletos');
          }else{
            this.cerrarmodal();
            this.toas.success('Editado correctamente');
          }
        }
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

  onKeyUpEvent(event: any, type){
    if(type=='user'){
      event.target.value = event.target.value.toUpperCase().split(" ").join("");
      event.target.value  = event.target.value.replace(/[`0-9~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    }else{
      event.target.value = event.target.value.split(" ").join("");
    }
  }

  mostrarPass(input:HTMLInputElement){
    if(input.type == "password"){
      input.type = "text";
    }else{
      input.type = "password";
    }
  }


  esEmailValido(email: string):boolean {
    let mailValido = false;
      var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (email.match(EMAIL_REGEX)){
        mailValido = true;
      }
    return mailValido;
  }




}
