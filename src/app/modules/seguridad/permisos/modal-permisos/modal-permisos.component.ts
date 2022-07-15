import { Component, OnInit } from '@angular/core';
import { PacageService } from '../pacage.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-modal-permisos',
  templateUrl: './modal-permisos.component.html',
  styleUrls: ['./modal-permisos.component.css']
})
export class ModalPermisosComponent {

  form:FormGroup;
  constructor(public _servi: PacageService,
    public _dialoref: MatDialogRef<ModalPermisosComponent>,
    private toas:ToastrService) { 

    this.form = new FormGroup({
      Cod_permiso: new FormControl(null),
      Cod_rol: new FormControl('', Validators.required),
      Cod_objeto: new FormControl('',Validators.required),
      Permiso_insertar:new FormControl('',Validators.required),
      Permiso_eliminar:new FormControl('',Validators.required),
      Permiso_actualizar:new FormControl('',Validators.required),
      Permiso_consultar:new FormControl('',Validators.required)
      });
      
      this._servi.mostrarrol();
      this._servi.mostrarobjeto();
    }

  guardar() {
      let params = {
        tipo: "post",
        Cod_permiso:this.form.value.Cod_permiso,
        Cod_rol:this.form.value.Cod_rol,
        Cod_objeto:this.form.value.Cod_objeto,
        Permiso_insertar:this.form.value.Permiso_insertar,
        Permiso_eliminar:this.form.value.Permiso_eliminar,
        Permiso_actualizar:this.form.value.Permiso_actualizar,
        Permiso_consultar:this.form.value.Permiso_consultar
      }
      this._servi.crear(params).subscribe(resp => {
        this._servi.mostrar();
        this.cerrarmodal();
        this.toas.success('Creado correctamente');
      });
    
  }


  //limpia modal
  clear() {
    this.form.reset();
    //this._servi.inicializarForm();
  }

  //cerrarmodal
  cerrarmodal() {
    this._dialoref.close();
  }


}
