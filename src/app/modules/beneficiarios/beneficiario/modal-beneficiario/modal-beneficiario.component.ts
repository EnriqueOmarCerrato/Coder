import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PacageService } from '../pacage.service';

@Component({
  selector: 'app-modal-beneficiario',
  templateUrl: './modal-beneficiario.component.html',
  styleUrls: ['./modal-beneficiario.component.css']
})
export class ModalBeneficiarioComponent implements OnInit {

  isLinear: boolean = false;
  datospersonales: FormGroup;
  secondFormGroup: FormGroup;
  familiares: FormGroup;
  general: FormGroup;
  inclusion: FormGroup;
  salud: FormGroup;
  fileURL:File;
  fileURLFoto:File;
  constructor(private _formBuilder: FormBuilder,
    public _dialoref: MatDialogRef<ModalBeneficiarioComponent>,
    public _servi: PacageService,
    private toas: ToastrService) {
    this._servi.mostrarsedes();
    this._servi.mostrartipopersona();
    this._servi.mostrargenero();
    this._servi.mostrarnacionalidad();
    this._servi.mostrarestadocivil();
    this._servi.mostrardepartamento();
    this._servi.mostrarstatus();
    this._servi.mostrarnivel();
    this._servi.mostrarparentezco();
    this._servi.mostrartipoinstitucion();
    this._servi.mostrarinclusion();
  }

  ngOnInit() {

  }


  guardar() {
    if (!this._servi.datospersonales.get('Cod_persona')?.value) {
      let params = {
        tipo: "post",
        Cod_sede: this._servi.datospersonales.value.Cod_sede,
        Cod_tipo_persona: this._servi.datospersonales.value.Cod_tipo_persona,
        Cod_genero: this._servi.datospersonales.value.Cod_genero,
        Cod_nacionalidad: this._servi.datospersonales.value.Cod_nacionalidad,
        Cod_estado_civil: this._servi.datospersonales.value.Cod_estado_civil,
        Cod_departamento: this._servi.datospersonales.value.Cod_departamento,
        Cod_estatus: this._servi.datospersonales.value.Cod_estatus,
        Nombre: this._servi.datospersonales.value.Nombre,
        Apellido: this._servi.datospersonales.value.Apellido,
        No_identidad: this._servi.datospersonales.value.No_identidad,
        Documento_id: this.fileURL,
        Lugar_nacimiento: this._servi.datospersonales.value.Lugar_nacimiento,
        Fecha_nacimiento: this._servi.datospersonales.value.Fecha_nacimiento,
        Residencia_actual: this._servi.datospersonales.value.Residencia_actual,
        Telefono_fijo: this._servi.datospersonales.value.Telefono_fijo,
        Correo_electronico: this._servi.datospersonales.value.Correo_electronico,
        Telefono_celular: this._servi.datospersonales.value.Telefono_celular,

        Fotografia:this._servi.datospersonales.value.Fotografia,

        Usuario_registro: 'admin',
        Cod_ficha_general: this._servi.general.value.Cod_ficha_general,
        Carnet_discapacidad: this._servi.general.value.Carnet_discapacidad,
        Acceso_computadora: this._servi.general.value.Acceso_computadora,
        Acceso_internet: this._servi.general.value.Acceso_internet,
        Bono_discapacidad: this._servi.general.value.Bono_discapacidad,
        Instituto_procedencia: this._servi.general.value.Instituto_procedencia,
        Permanencia_institucion: this._servi.general.value.Permanencia_institucion,
        Nivel_academico: this._servi.general.value.Nivel_academico,
        Telefono_instituto: this._servi.general.value.Telefono_instituto,
        Correo_instituto: this._servi.general.value.Correo_instituto,
        Cod_ficha_inclusion: this._servi.inclusion.value.Cod_ficha_inclusion,
        Cod_tipo_inclusion: this._servi.inclusion.value.Cod_tipo_inclusion,
        Cod_tipo_institucion: this._servi.inclusion.value.Cod_tipo_institucion,
        Nombre_institucion_empresa: this._servi.inclusion.value.Nombre_institucion_empresa,
        Direccion_institucion: this._servi.inclusion.value.Direccion_institucion,
        Telefono_institucion: this._servi.inclusion.value.Telefono_institucion,
        Correo_electronico_institucion: this._servi.inclusion.value.Correo_electronico_institucion,
        Fecha_ingreso: this._servi.inclusion.value.Fecha_ingreso,
        Grado_academico: this._servi.inclusion.value.Grado_academico,
        Seguimiento_inclusivo: this._servi.inclusion.value.Seguimiento_inclusivo,
        Tiempo_seguimiento_inclusivo: this._servi.inclusion.value.Tiempo_seguimiento_inclusivo,
        Cargo_desempeñar: this._servi.inclusion.value.Cargo_desempeñar,
        Fecha_matricula: this._servi.inclusion.value.Fecha_matricula,

        Cod_estado_nutricional: this._servi.salud.value.Cod_estado_nutricional,
        Agudeza_visual: this._servi.salud.value.Agudeza_visual,
        Agudeza_auditiva: this._servi.salud.value.Agudeza_auditiva,
        Condicion_oral_deficiente: this._servi.salud.value.Condicion_oral_deficiente,
        Esquema_vacunacion: this._servi.salud.value.Esquema_vacunacion,
        Anemia: this._servi.salud.value.Anemia,
        Alergia: this._servi.salud.value.Alergia,
        Descripcion_alergias: this._servi.salud.value.Descripcion_alergias,
        Enfermedad_cronica: this._servi.salud.value.Enfermedad_cronica,
        Descripcion_enf_cronica: this._servi.salud.value.Descripcion_enf_cronica,
        Seguimiento_medico: this._servi.salud.value.Seguimiento_medico,
        Medicacion: this._servi.salud.value.Medicacion,
        Nombre_medicamento: this._servi.salud.value.Nombre_medicamento,
        Dosis: this._servi.salud.value.Dosis,
        Tiempo_ingesta_medicacion: this._servi.salud.value.Tiempo_ingesta_medicacion,
        Seguimiento_terapia_alternativa: this._servi.salud.value.Seguimiento_terapia_alternativa,
        Tipo_terapia_alternativa: this._servi.salud.value.Tipo_terapia_alternativa,
        Cod_parentesco: this._servi.familiares.value.Cod_parentesco,
        Cod_nivel_academico: this._servi.familiares.value.Cod_nivel_academico,

        Nombre_familiar: this._servi.familiares.value.Nombre_familiar,
        Identidad: this._servi.familiares.value.Identidad,
        Telefono: this._servi.familiares.value.Telefono,
        Correo: this._servi.familiares.value.Correo,

        Ocupacion_actual: this._servi.familiares.value.Ocupacion_actual,
        Labora_actualmente: this._servi.familiares.value.Labora_actualmente,
        Enfermedades_cronicas: this._servi.familiares.value.Enfermedades_cronicas,
        Descripcion_enfermedades_cronicas: this._servi.familiares.value.Descripcion_enfermedades_cronicas,
        Ingreso_promedio_personal: this._servi.familiares.value.Ingreso_promedio_personal,
        Miembros_familia: this._servi.familiares.value.Miembros_familia,
        Ingreso_promedio_familiar: this._servi.familiares.value.Ingreso_promedio_familiar,
        Monto_ingreso: this._servi.familiares.value.Monto_ingreso,
        Ingreso_semanal: this._servi.familiares.value.Ingreso_semanal,
        Ingreso_mensual: this._servi.familiares.value.Ingreso_mensual
      }
      let formData: FormData = new FormData();
      formData.append('file', this.fileURL[0]);
      formData.append('fileFoto', this.fileURLFoto[0]);
      for ( var key in params) {
        formData.append(key, params[key]);
    }
      this._servi.crear(formData).subscribe(resp => {
        this._servi.mostrar();
        this.cerrarmodal();
        this.toas.success('Creado correctamente');
      });
    } else {
      let params = {
        tipo: "update",
        Cod_persona: this._servi.datospersonales.value.Cod_persona,
        Cod_sede: this._servi.datospersonales.value.Cod_sede,
        Cod_tipo_persona: this._servi.datospersonales.value.Cod_tipo_persona,
        Cod_genero: this._servi.datospersonales.value.Cod_genero,
        Cod_nacionalidad: this._servi.datospersonales.value.Cod_nacionalidad,
        Cod_estado_civil: this._servi.datospersonales.value.Cod_estado_civil,
        Cod_departamento: this._servi.datospersonales.value.Cod_departamento,
        Cod_estatus: this._servi.datospersonales.value.Cod_estatus,
        Nombre: this._servi.datospersonales.value.Nombre,
        Apellido: this._servi.datospersonales.value.Apellido,
        No_identidad: this._servi.datospersonales.value.No_identidad,
        Documento_id: this.fileURL,
        Lugar_nacimiento: this._servi.datospersonales.value.Lugar_nacimiento,
        Fecha_nacimiento: this._servi.datospersonales.value.Fecha_nacimiento,
        Residencia_actual: this._servi.datospersonales.value.Residencia_actual,
        Telefono_fijo: this._servi.datospersonales.value.Telefono_fijo,
        Correo_electronico: this._servi.datospersonales.value.Correo_electronico,
        Telefono_celular: this._servi.datospersonales.value.Telefono_celular,

        Fotografia:this._servi.datospersonales.value.Fotografia,

        Usuario_registro: localStorage.getItem("login"),
        Cod_ficha_general: this._servi.general.value.Cod_ficha_general,
        Carnet_discapacidad: this._servi.general.value.Carnet_discapacidad,
        Acceso_computadora: this._servi.general.value.Acceso_computadora,
        Acceso_internet: this._servi.general.value.Acceso_internet,
        Bono_discapacidad: this._servi.general.value.Bono_discapacidad,
        Instituto_procedencia: this._servi.general.value.Instituto_procedencia,
        Permanencia_institucion: this._servi.general.value.Permanencia_institucion,
        Nivel_academico: this._servi.general.value.Nivel_academico,
        Telefono_instituto: this._servi.general.value.Telefono_instituto,
        Correo_instituto: this._servi.general.value.Correo_instituto,

        Cod_ficha_inclusion: this._servi.inclusion.value.Cod_ficha_inclusion,
        Cod_tipo_inclusion: this._servi.inclusion.value.Cod_tipo_inclusion,
        Cod_tipo_institucion: this._servi.inclusion.value.Cod_tipo_institucion,
        Nombre_institucion_empresa: this._servi.inclusion.value.Nombre_institucion_empresa,
        Direccion_institucion: this._servi.inclusion.value.Direccion_institucion,
        Telefono_institucion: this._servi.inclusion.value.Telefono_institucion,
        Correo_electronico_institucion: this._servi.inclusion.value.Correo_electronico_institucion,
        Fecha_ingreso: this._servi.inclusion.value.Fecha_ingreso,
        Grado_academico: this._servi.inclusion.value.Grado_academico,
        Seguimiento_inclusivo: this._servi.inclusion.value.Seguimiento_inclusivo,
        Tiempo_seguimiento_inclusivo: this._servi.inclusion.value.Tiempo_seguimiento_inclusivo,
        Cargo_desempeñar: this._servi.inclusion.value.Cargo_desempeñar,
        Fecha_matricula: this._servi.inclusion.value.Fecha_matricula,
        Cod_estado_nutricional: this._servi.salud.value.Cod_estado_nutricional,
        Agudeza_visual: this._servi.salud.value.Agudeza_visual,
        Agudeza_auditiva: this._servi.salud.value.Agudeza_auditiva,
        Condicion_oral_deficiente: this._servi.salud.value.Condicion_oral_deficiente,
        Esquema_vacunacion: this._servi.salud.value.Esquema_vacunacion,
        Anemia: this._servi.salud.value.Anemia,
        Alergia: this._servi.salud.value.Alergia,
        Descripcion_alergias: this._servi.salud.value.Descripcion_alergias,
        Enfermedad_cronica: this._servi.salud.value.Enfermedad_cronica,
        Descripcion_enf_cronica: this._servi.salud.value.Descripcion_enf_cronica,
        Seguimiento_medico: this._servi.salud.value.Seguimiento_medico,
        Medicacion: this._servi.salud.value.Medicacion,
        Nombre_medicamento: this._servi.salud.value.Nombre_medicamento,
        Dosis: this._servi.salud.value.Dosis,
        Tiempo_ingesta_medicacion: this._servi.salud.value.Tiempo_ingesta_medicacion,
        Seguimiento_terapia_alternativa: this._servi.salud.value.Seguimiento_terapia_alternativa,
        Tipo_terapia_alternativa: this._servi.salud.value.Tipo_terapia_alternativa,
        Cod_parentesco: this._servi.familiares.value.Cod_parentesco,
        Nombre_familiar: this._servi.familiares.value.Nombre_familiar,
        Identidad: this._servi.familiares.value.Identidad,
        Telefono: this._servi.familiares.value.Telefono,
        Correo: this._servi.familiares.value.Correo,
        Cod_nivel_academico: this._servi.familiares.value.Cod_nivel_academico,
        Ocupacion_actual: this._servi.familiares.value.Ocupacion_actual,
        Labora_actualmente: this._servi.familiares.value.Labora_actualmente,
        Enfermedades_cronicas: this._servi.familiares.value.Enfermedades_cronicas,
        Descripcion_enfermedades_cronicas: this._servi.familiares.value.Descripcion_enfermedades_cronicas,
        Ingreso_promedio_personal: this._servi.familiares.value.Ingreso_promedio_personal,
        Miembros_familia: this._servi.familiares.value.Miembros_familia,
        Ingreso_promedio_familiar: this._servi.familiares.value.Ingreso_promedio_familiar,
        Monto_ingreso: this._servi.familiares.value.Monto_ingreso,
        Ingreso_semanal: this._servi.familiares.value.Ingreso_semanal,
        Ingreso_mensual: this._servi.familiares.value.Ingreso_mensual
      }
      let formData: FormData = new FormData();
      formData.append('file', this.fileURL[0]);
      formData.append('fileFoto', this.fileURLFoto[0]);
      for ( var key in params) {
        formData.append(key, params[key]);
    }
      this._servi.actualizar(formData).subscribe(resp => {
        this._servi.mostrar();
        this.cerrarmodal();
        this.toas.success('Editado correctamente');
      });
    }

  }
  onUpload(input:File) {
    this.fileURL =(input);
  }

  onUploadFoto(input:File) {
    this.fileURLFoto =(input);
  }

  //limpia modal
  clear() {
    // this._servi.form.reset();
    this._servi.inicializarForm();
  }

  cargar(e) {
    console.log(e)
  }


  cerrarmodal() {
    this._dialoref.close();
  }
}
