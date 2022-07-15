import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacageService {

  //respuesta accion behaursubjet
  private personas$ = new BehaviorSubject<any[]>([]);
  public responsepersonas$: Observable<any[]> = this.personas$.asObservable();

  //respuesta accion behaursubjet
  private sede$ = new BehaviorSubject<any[]>([]);
  public responseSede$: Observable<any[]> = this.sede$.asObservable();

  //respuesta accion behaursubjet
  private tipo_persona$ = new BehaviorSubject<any[]>([]);
  public responsetipo_persona$: Observable<any[]> = this.tipo_persona$.asObservable();


  //respuesta accion behaursubjet
  private genero$ = new BehaviorSubject<any[]>([]);
  public responsegenero$: Observable<any[]> = this.genero$.asObservable();

  //respuesta accion behaursubjet
  private nacionalidad$ = new BehaviorSubject<any[]>([]);
  public responseNacionalidad$: Observable<any[]> = this.nacionalidad$.asObservable();

  //respuesta accion behaursubjet
  private estadocivil$ = new BehaviorSubject<any[]>([]);
  public responseestadocivil$: Observable<any[]> = this.estadocivil$.asObservable();

   //respuesta accion behaursubjet
   private departamento$ = new BehaviorSubject<any[]>([]);
   public responsedepartamento$: Observable<any[]> = this.departamento$.asObservable();

    //respuesta accion behaursubjet
    private status$ = new BehaviorSubject<any[]>([]);
    public responsestatus$: Observable<any[]> = this.status$.asObservable();

  //respuesta accion behaursubjet
  private nivel$ = new BehaviorSubject<any[]>([]);
  public responseNivel$: Observable<any[]> = this.nivel$.asObservable();


  //respuesta accion behaursubjet
  private parentesco$ = new BehaviorSubject<any[]>([]);
  public responseparentesco$: Observable<any[]> = this.parentesco$.asObservable();

    //respuesta accion behaursubjet
    private tipoinstitucion$ = new BehaviorSubject<any[]>([]);
    public responsetipoinstitucion$: Observable<any[]> = this.tipoinstitucion$.asObservable();

     //respuesta accion behaursubjet
     private estadonutricional$ = new BehaviorSubject<any[]>([]);
     public responseestadonutricional$: Observable<any[]> = this.estadonutricional$.asObservable();

     //respuesta accion behaursubjet
  private inclusion$ = new BehaviorSubject<any[]>([]);
  public responseinclusion$: Observable<any[]> = this.inclusion$.asObservable();
  constructor(private _http: HttpClient) { }

  datospersonales:FormGroup = new FormGroup({
    Cod_persona:new FormControl(null),
    Cod_sede: new FormControl('', Validators.required),
    Cod_tipo_persona: new FormControl('', Validators.required),
    Cod_genero: new FormControl('', Validators.required),
    Cod_nacionalidad: new FormControl('', Validators.required),
    Cod_estado_civil: new FormControl('', Validators.required),
    Cod_departamento: new FormControl('', Validators.required),
    Cod_estatus: new FormControl('', Validators.required),
    Nombre: new FormControl('', Validators.required),
    Apellido: new FormControl('', Validators.required),
    No_identidad: new FormControl('', Validators.required),
    Lugar_nacimiento: new FormControl('', Validators.required),
    Fecha_nacimiento: new FormControl('', Validators.required),
    Residencia_actual: new FormControl('', Validators.required),
    Telefono_fijo: new FormControl('', Validators.required),
    Correo_electronico: new FormControl('', Validators.required),
    Telefono_celular: new FormControl('', Validators.required),
    Fotografia: new FormControl('', Validators.required)
  });

  general:FormGroup = new FormGroup({
    Cod_ficha_general: new FormControl(null),
    Carnet_discapacidad: new FormControl('', Validators.required),
    Documento_carnet_discapacidad: new FormControl('', Validators.required),
    Acceso_computadora: new FormControl('', Validators.required),
    Acceso_internet: new FormControl('', Validators.required),
    Bono_discapacidad: new FormControl('', Validators.required),
    Instituto_procedencia: new FormControl('', Validators.required),
    Permanencia_institucion: new FormControl('', Validators.required),
    Nivel_academico: new FormControl('', Validators.required),
    Telefono_instituto: new FormControl('', Validators.required),
    Correo_instituto: new FormControl('', Validators.required)
  });


  inclusion:FormGroup = new FormGroup({
    Cod_ficha_inclusion: new FormControl(null),
    Cod_tipo_inclusion: new FormControl('', Validators.required),
    Cod_tipo_institucion: new FormControl('', Validators.required),
    Nombre_institucion_empresa: new FormControl('', Validators.required),
    Direccion_institucion: new FormControl('', Validators.required),
    Telefono_institucion: new FormControl('', Validators.required),
    Correo_electronico_institucion: new FormControl('', Validators.required),
    Fecha_ingreso: new FormControl('', Validators.required),
    Grado_academico: new FormControl('', Validators.required),
    Seguimiento_inclusivo: new FormControl('', Validators.required),
    Tiempo_seguimiento_inclusivo: new FormControl('', Validators.required),
    Cargo_desempeñar: new FormControl('', Validators.required),
    Fecha_matricula: new FormControl('', Validators.required)
  })

  salud:FormGroup = new FormGroup({
    Cod_ficha_salud: new FormControl(null),
    Cod_estado_nutricional: new FormControl('', Validators.required),
    Agudeza_visual: new FormControl('', Validators.required),
    Agudeza_auditiva: new FormControl('', Validators.required),
    Condicion_oral_deficiente: new FormControl('', Validators.required),
    Esquema_vacunacion: new FormControl('', Validators.required),
    Anemia: new FormControl('', Validators.required),
    Alergia: new FormControl('', Validators.required),
    Descripcion_alergias: new FormControl('', Validators.required),
    Enfermedad_cronica: new FormControl('', Validators.required),
    Descripcion_enf_cronica: new FormControl('', Validators.required),
    Seguimiento_medico: new FormControl('', Validators.required),
    Medicacion: new FormControl('', Validators.required),
    Nombre_medicamento: new FormControl('', Validators.required),
    Dosis: new FormControl('', Validators.required),
    Tiempo_ingesta_medicacion: new FormControl('', Validators.required),
    Seguimiento_terapia_alternativa: new FormControl('', Validators.required),
    Tipo_terapia_alternativa: new FormControl('', Validators.required)
  })


  familiares:FormGroup = new FormGroup({
    Cod_familiar:new FormControl(null),
    Nombre_familiar:new FormControl('', Validators.required),
    Identidad:new FormControl('', Validators.required),
    Telefono:new FormControl('', Validators.required),
    Correo:new FormControl('', Validators.required),
    Cod_parentesco:new FormControl('', Validators.required),
    Cod_nivel_academico:new FormControl('', Validators.required),
    Ocupacion_actual:new FormControl('', Validators.required),
    Labora_actualmente:new FormControl('', Validators.required),
    Enfermedades_cronicas:new FormControl('', Validators.required),
    Descripcion_enfermedades_cronicas:new FormControl('', Validators.required),
    Ingreso_promedio_personal:new FormControl('', Validators.required),
    Miembros_familia:new FormControl('', Validators.required),
    Ingreso_promedio_familiar:new FormControl('', Validators.required),
    Monto_ingreso:new FormControl('', Validators.required),
    Ingreso_semanal:new FormControl('', Validators.required),
    Ingreso_mensual:new FormControl('', Validators.required)
  })

  //seteamos el form crear
  inicializarForm() {
  this.datospersonales.setValue({
    Cod_persona:null,
    Cod_sede: null,
    Cod_tipo_persona: null,
    Cod_genero: null,
    Cod_nacionalidad: null,
    Cod_estado_civil: null,
    Cod_departamento: null,
    Cod_estatus: null,
    Nombre: null,
    Apellido: null,
    No_identidad: null,
    Lugar_nacimiento: null,
    Fecha_nacimiento: null,
    Residencia_actual: null,
    Telefono_fijo: null,
    Correo_electronico: null,
    Telefono_celular: null,
    Fotografia: null,
  });

  this.general.setValue({
    Cod_ficha_general: null,
    Carnet_discapacidad: null,
    Documento_carnet_discapacidad: null,
    Acceso_computadora: null,
    Acceso_internet: null,
    Bono_discapacidad: null,
    Instituto_procedencia: null,
    Permanencia_institucion: null,
    Nivel_academico: null,
    Telefono_instituto: null,
    Correo_instituto: null
  });


  this.inclusion.setValue({
    Cod_ficha_inclusion: null,
    Cod_tipo_inclusion:null,
    Cod_tipo_institucion: null,
    Nombre_institucion_empresa:null,
    Direccion_institucion: null,
    Telefono_institucion: null,
    Correo_electronico_institucion:null,
    Fecha_ingreso: null,
    Grado_academico: null,
    Seguimiento_inclusivo: null,
    Tiempo_seguimiento_inclusivo: null,
    Cargo_desempeñar: null,
    Fecha_matricula: null
  })

  this.salud.setValue({
    Cod_ficha_salud: null,
    Cod_estado_nutricional: null,
    Agudeza_visual: null,
    Agudeza_auditiva: null,
    Condicion_oral_deficiente: null,
    Esquema_vacunacion: null,
    Anemia: null,
    Alergia: null,
    Descripcion_alergias: null,
    Enfermedad_cronica: null,
    Descripcion_enf_cronica: null,
    Seguimiento_medico: null,
    Medicacion: null,
    Nombre_medicamento: null,
    Dosis: null,
    Tiempo_ingesta_medicacion: null,
    Seguimiento_terapia_alternativa: null,
    Tipo_terapia_alternativa: null
  })


  this.familiares.setValue({
    Cod_familiar:null,
    Nombre_familiar:null,
    Identidad:null,
    Telefono:null,
    Correo:null,
    Cod_parentesco:null,
    Cod_nivel_academico:null,
    Ocupacion_actual:null,
    Labora_actualmente:null,
    Enfermedades_cronicas:null,
    Descripcion_enfermedades_cronicas:null,
    Ingreso_promedio_personal:null,
    Miembros_familia:null,
    Ingreso_promedio_familiar:null,
    Monto_ingreso:null,
    Ingreso_semanal:null,
    Ingreso_mensual:null
  })
  }

  //inicializarForm editar
  popform(item: any) {
    let datospersonales = {
      Cod_persona:item.Cod_persona,
      Cod_sede: item.Cod_sede,
      Cod_tipo_persona:item.Cod_tipo_persona,
      Cod_genero: item.Cod_genero,
      Cod_nacionalidad: item.Cod_nacionalidad,
      Cod_estado_civil: item.Cod_estado_civil,
      Cod_departamento: item.Cod_departamento,
      Cod_estatus: item.Cod_estatus,
      Nombre: item.Nombre,
      Apellido: item.Apellido,
      No_identidad: item.No_identidad,
      Lugar_nacimiento: item.Lugar_nacimiento,
      Fecha_nacimiento: item.Fecha_nacimiento,
      Residencia_actual: item.Residencia_actual,
      Telefono_fijo: item.Telefono_fijo,
      Correo_electronico: item.Correo_electronico,
      Telefono_celular: item.Telefono_celular,
      Fotografia: item.Fotografia
    }

    let general = {
      Cod_ficha_general: item.Cod_ficha_general,
      Carnet_discapacidad: item.Carnet_discapacidad,
       Documento_carnet_discapacidad: item.Documento_carnet_discapacidad,
       Acceso_computadora: item.Acceso_computadora,
       Acceso_internet: item.Acceso_internet,
       Bono_discapacidad: item.Bono_discapacidad,
       Instituto_procedencia: item.Instituto_procedencia,
       Permanencia_institucion: item.Permanencia_institucion,
       Nivel_academico: item.Nivel_academico,
       Telefono_instituto: item.Telefono_instituto,
       Correo_instituto: item.Correo_instituto
    }

  let inclusion= {
    Cod_ficha_inclusion: item.Cod_ficha_inclusion,
    Cod_tipo_inclusion: item.Cod_tipo_inclusion,
    Cod_tipo_institucion: item.Cod_tipo_institucion,
    Nombre_institucion_empresa: item.Nombre_institucion_empresa,
    Direccion_institucion: item.Direccion_institucion,
    Telefono_institucion: item.Telefono_institucion,
    Correo_electronico_institucion: item.Correo_electronico_institucion,
    Fecha_ingreso: item.Fecha_ingreso,
    Grado_academico: item.Grado_academico,
    Seguimiento_inclusivo: item.Seguimiento_inclusivo,
    Tiempo_seguimiento_inclusivo: item.Tiempo_seguimiento_inclusivo,
    Cargo_desempeñar: item.Cargo_desempeñar,
    Fecha_matricula: item.Fecha_matricula
  }

  let salud = {
    Cod_ficha_salud: item.Cod_ficha_salud,
    Cod_estado_nutricional: item.Cod_estado_nutricional,
    Agudeza_visual: item.Agudeza_visual,
    Agudeza_auditiva: item.Agudeza_auditiva,
    Condicion_oral_deficiente:item.Condicion_oral_deficiente,
    Esquema_vacunacion: item.Esquema_vacunacion,
    Anemia: item.Anemia,
    Alergia: item.Alergia,
    Descripcion_alergias: item.Descripcion_alergias,
    Enfermedad_cronica: item.Enfermedad_cronica,
    Descripcion_enf_cronica: item.Descripcion_enf_cronica,
    Seguimiento_medico: item.Seguimiento_medico,
    Medicacion: item.Medicacion,
    Nombre_medicamento: item.Nombre_medicamento,
    Dosis: item.Dosis,
    Tiempo_ingesta_medicacion: item.Tiempo_ingesta_medicacion,
    Seguimiento_terapia_alternativa: item.Seguimiento_terapia_alternativa,
    Tipo_terapia_alternativa: item.Tipo_terapia_alternativa
  }


  let familiares = {
    Cod_familiar:item.Cod_familiar,
    Nombre_familiar:item.Nombre_familiar,
    Identidad:item.Identidad,
    Telefono:item.Telefono,
    Correo:item.Correo,
    Cod_parentesco:item.Cod_parentesco,
    Cod_nivel_academico:item.Cod_nivel_academico,
    Ocupacion_actual:item.Ocupacion_actual,
    Labora_actualmente:item.Labora_actualmente,
    Enfermedades_cronicas:item.Enfermedades_cronicas,
    Descripcion_enfermedades_cronicas:item.Descripcion_enfermedades_cronicas,
    Ingreso_promedio_personal:item.Ingreso_promedio_personal,
    Miembros_familia:item.Miembros_familia,
    Ingreso_promedio_familiar:item.Ingreso_promedio_familiar,
    Monto_ingreso:item.Monto_ingreso,
    Ingreso_semanal:item.Ingreso_semanal,
    Ingreso_mensual:item.Ingreso_mensual
  }
    this.datospersonales.setValue(datospersonales);
    this.general.setValue(general);
    this.inclusion.setValue(inclusion);
    this.salud.setValue(salud);
    this.familiares.setValue(familiares);
  }

  mostrarnutricional() {
    const request$ = this.obtenernutricional().pipe(tap((resp: any) => { this.estadonutricional$.next(resp); }));
    return request$.subscribe();
  }

  obtenernutricional(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/estado_nutricional`).pipe(map((resp: any) => resp));
  }

  mostrarinclusion() {
    const request$ = this.obtenerinclusion().pipe(tap((resp: any) => { this.inclusion$.next(resp); }));
    return request$.subscribe();
  }

  obtenerinclusion(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/tipo_inclusion`).pipe(map((resp: any) => resp));
  }

  mostrarstatus() {
    const request$ = this.obtenerstatus().pipe(tap((resp: any) => { this.status$.next(resp); }));
    return request$.subscribe();
  }

  obtenertipoinstitucion(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/tipoinstitucion`).pipe(map((resp: any) => resp));
  }

  mostrartipoinstitucion() {
    const request$ = this.obtenertipoinstitucion().pipe(tap((resp: any) => { this.tipoinstitucion$.next(resp);}));
    return request$.subscribe();
  }

  obtenerstatus(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/status`).pipe(map((resp: any) => resp));
  }

  mostrardepartamento() {
    const request$ = this.obtenerdepartamento().pipe(tap((resp: any) => { this.departamento$.next(resp); }));
    return request$.subscribe();
  }

  obtenerdepartamento(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/departamento`).pipe(map((resp: any) => resp));
  }

  mostrarestadocivil() {
    const request$ = this.obtenerestadocivil().pipe(tap((resp: any) => { this.estadocivil$.next(resp); }));
    return request$.subscribe();
  }

  obtenerestadocivil(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/estado_civil`).pipe(map((resp: any) => resp));
  }

  mostrarnacionalidad() {
    const request$ = this.obtenernacionalidad().pipe(tap((resp: any) => { this.nacionalidad$.next(resp);}));
    return request$.subscribe();
  }

  obtenernacionalidad(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/nacionalidad`).pipe(map((resp: any) => resp));
  }
  mostrargenero() {
    const request$ = this.obtenergenero().pipe(tap((resp: any) => { this.genero$.next(resp); }));
    return request$.subscribe();
  }

  obtenergenero(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/genero`).pipe(map((resp: any) => resp));
  }
  mostrartipopersona() {
    const request$ = this.obtenertipopersona().pipe(tap((resp: any) => { this.tipo_persona$.next(resp);}));
    return request$.subscribe();
  }

  obtenertipopersona(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/tipo_persona`).pipe(map((resp: any) => resp));
  }

  mostrarsedes() {
    const request$ = this.obtenersedes().pipe(tap((resp: any) => { this.sede$.next(resp); }));
    return request$.subscribe();
  }

  obtenersedes(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/sedes`).pipe(map((resp: any) => resp));
  }

  mostrarnivel() {
    const request$ = this.obtenernivel().pipe(tap((resp: any) => { this.nivel$.next(resp); }));
    return request$.subscribe();
  }

  obtenernivel(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/nivel_academico`).pipe(map((resp: any) => resp));
  }

  mostrarparentezco() {
    const request$ = this.obtenerparentezo().pipe(tap((resp: any) => { this.parentesco$.next(resp); }));
    return request$.subscribe();
  }

  obtenerparentezo(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/parentesco`).pipe(map((resp: any) => resp));
  }

  mostrar() {
    const request$ = this.obtener().pipe(tap((resp: any) => { this.personas$.next(resp); }));
    return request$.subscribe();
  }

  obtener(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/persona`).pipe(map((resp: any) => resp));
  }


  crear(archivo:any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/persona`, archivo).pipe(map((resp: any) => resp));
  }


  actualizar(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/persona`, params).pipe(map((resp: any) => resp));
  }


  eliminar(params: any): Observable<any> {
    console.log(params)
    return this._http.post(`http://localhost/ApoautisApis/v1/persona`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }

}
