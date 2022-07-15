import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacageService {

  constructor(private _http: HttpClient) { }

  //respuesta accion behaursubjet
  private colaborador$ = new BehaviorSubject<any[]>([]);
  public responsecolaborador$: Observable<any[]> = this.colaborador$.asObservable();


  //respuesta accion behaursubjet
  private persona$ = new BehaviorSubject<any[]>([]);
  public responsepersona$: Observable<any[]> = this.persona$.asObservable();

  //respuesta accion behaursubjet
  private sede$ = new BehaviorSubject<any[]>([]);
  public responsesede$: Observable<any[]> = this.sede$.asObservable();

  //respuesta accion behaursubjet
  private departamento$ = new BehaviorSubject<any[]>([]);
  public responsedepartamento$: Observable<any[]> = this.departamento$.asObservable();

  
    //respuesta accion behaursubjet
    private departamentoo$ = new BehaviorSubject<any[]>([]);
    public responsedepartamentoo$: Observable<any[]> = this.departamentoo$.asObservable();

  //respuesta accion behaursubjet
  private personas$ = new BehaviorSubject<any[]>([]);
  public responsepersonas$: Observable<any[]> = this.personas$.asObservable();

  
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
    private status$ = new BehaviorSubject<any[]>([]);
    public responsestatus$: Observable<any[]> = this.status$.asObservable();
    
  //respuesta accion behaursubjet
  private nivel$ = new BehaviorSubject<any[]>([]);
  public responseNivel$: Observable<any[]> = this.nivel$.asObservable();

   //respuesta accion behaursubjet
   private parentesco$ = new BehaviorSubject<any[]>([]);
   public responseparentesco$: Observable<any[]> = this.parentesco$.asObservable();


   Documento_id:any;
   
  form: FormGroup = new FormGroup({
    Cod_colaborador: new FormControl(null),
    Cod_persona: new FormControl('', Validators.required),
    Cod_sede: new FormControl('', Validators.required),
    Cod_departamento_laboral: new FormControl('', Validators.required),
    Cargo_principal: new FormControl('', Validators.required),
    Descripcion_funciones: new FormControl('', Validators.required),
    Fecha_contratacion: new FormControl('', Validators.required),
    Fecha_despido: new FormControl(null),
    Usuario_registro: new FormControl(null),
    Fecha_registro: new FormControl(null),
    Usuario_modificacion: new FormControl(null),
    Fecha_modificacion: new FormControl(null),
  });

  
  datospersonales:FormGroup = new FormGroup({
    Cod_persona:new FormControl(null),
    Cod_sede: new FormControl('', Validators.required),
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
    Fotografia: new FormControl('', Validators.required),
  });

  // $codigo_persona = $data->Cod_persona;
  // $cod_sede = $data->Cod_sede;
  // $cod_departamento = $data->Cod_departamento_laboral;
  // $Cargo_principal = $data->Cargo_principal;
  // $Descripcion_funciones = $data->Descripcion_funciones;
  // $Fecha_contratacion = $data->Fecha_contratacion;
  // $Usuario_registro = $data->Usuario_registro;

  //seteamos el form crear
  inicializarForm() {
    
    this.Documento_id = null;
  this.datospersonales.setValue({
    Cod_persona:null,
    Cod_sede: null,
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
  
    this.form.setValue({
      Cod_colaborador: null,
      Cod_persona: null,
      Cod_sede: null,
      Cod_departamento_laboral: null,
      Cargo_principal: null,
      Descripcion_funciones: null,
      Fecha_contratacion: null,
      Fecha_despido: null,
      Usuario_registro: null,
      Fecha_registro: null,
      Usuario_modificacion: null,
      Fecha_modificacion: null,
    });
  }

  //inicializarForm editar
  popform(item: any) {
    console.log(item)
    this.Documento_id =item.Documento_id;
    let datospersonales = {
      Cod_persona:item.Cod_persona,
      Cod_sede: item.Cod_sede,
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

    let transform = {
      Cod_colaborador: item.Cod_colaborador,
      Cod_persona: item.Cod_persona,
      Cod_sede: item.Cod_sede,
      Cod_departamento_laboral: item.Cod_departamento_laboral,
      Cargo_principal: item.Cargo_principal,
      Descripcion_funciones: item.Descripcion_funciones,
      Fecha_contratacion: item.Fecha_contratacion,
      Fecha_despido: item.Fecha_despido,
      Usuario_registro: item.Usuario_registro,
      Fecha_registro: item.Fecha_registro,
      Usuario_modificacion: item.Usuario_modificacion,
      Fecha_modificacion: item.Fecha_modificacion,
    }
    
    this.datospersonales.setValue(datospersonales);
    this.form.setValue(transform);
  }

  mostrarstatus() {
    const request$ = this.obtenerstatus().pipe(tap((resp: any) => { this.status$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtenerstatus(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/status`).pipe(map((resp: any) => resp));
  }

  mostrarestadocivil() {
    const request$ = this.obtenerestadocivil().pipe(tap((resp: any) => { this.estadocivil$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtenerestadocivil(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/estado_civil`).pipe(map((resp: any) => resp));
  }

  mostrarnacionalidad() {
    const request$ = this.obtenernacionalidad().pipe(tap((resp: any) => { this.nacionalidad$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtenernacionalidad(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/nacionalidad`).pipe(map((resp: any) => resp));
  }

  mostrartipopersona() {
    const request$ = this.obtenertipopersona().pipe(tap((resp: any) => { this.tipo_persona$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtenertipopersona(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/tipo_persona`).pipe(map((resp: any) => resp));
  }
  mostrargenero() {
    const request$ = this.obtenergenero().pipe(tap((resp: any) => { this.genero$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtenergenero(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/genero`).pipe(map((resp: any) => resp));
  }

  mostrapersona() {
    const request$ = this.obtenerpersona().pipe(tap((resp: any) => { this.persona$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }


  obtenerpersona(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/persona`).pipe(map((resp: any) => resp));
  }

  mostrarsede() {
    const request$ = this.obtenersede().pipe(tap((resp: any) => { this.sede$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  mostrarsedes() {
    const request$ = this.obtenersedes().pipe(tap((resp: any) => { this.sede$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtenersedes(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/sedes`).pipe(map((resp: any) => resp));
  }

  mostrarnivel() {
    const request$ = this.obtenernivel().pipe(tap((resp: any) => { this.nivel$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtenernivel(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/nivel_academico`).pipe(map((resp: any) => resp));
  }

  mostrarparentezco() {
    const request$ = this.obtenerparentezo().pipe(tap((resp: any) => { this.parentesco$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtenerparentezo(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/parentesco`).pipe(map((resp: any) => resp));
  }

  obtenersede(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/sedes`).pipe(map((resp: any) => resp));
  }

  mostrardepartamento() {
    const request$ = this.obtenerdepartameto().pipe(tap((resp: any) => { this.departamento$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtenerdepartameto(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/departamento_laboral`).pipe(map((resp: any) => resp));
  }


  mostrar() {
    const request$ = this.obtener().pipe(tap((resp: any) => { this.colaborador$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  mostrardepartamento0() {
    const request$ = this.obtenerdepartamento().pipe(tap((resp: any) => { this.departamentoo$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtenerdepartamento(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/departamento`).pipe(map((resp: any) => resp));
  }

  obtener(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/colaborador`).pipe(map((resp: any) => resp));
  }


  crear(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/colaborador`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  actualizar(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/colaborador`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  eliminar(params: any): Observable<any> {
    console.log(params)
    return this._http.post(`http://localhost/ApoautisApis/v1/colaborador`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


}
