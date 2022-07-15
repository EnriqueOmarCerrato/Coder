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
  private solicitud$ = new BehaviorSubject<any[]>([]);
  public responsesolicitud$: Observable<any[]> = this.solicitud$.asObservable();

  //respuesta accion behaursubjet
  private persona$ = new BehaviorSubject<any[]>([]);
  public responsepersona$: Observable<any[]> = this.persona$.asObservable();

  //respuesta accion behaursubjet
  private departamento$ = new BehaviorSubject<any[]>([]);
  public responsedepartamento$: Observable<any[]> = this.departamento$.asObservable();

  //respuesta accion behaursubjet
  private evaluacion$ = new BehaviorSubject<any[]>([]);
  public responseevaluacion$: Observable<any[]> = this.evaluacion$.asObservable();

  //respuesta accion behaursubjet
  private sede$ = new BehaviorSubject<any[]>([]);
  public responseSede$: Observable<any[]> = this.sede$.asObservable();


  //respuesta accion behaursubjet
  private parentesco$ = new BehaviorSubject<any[]>([]);
  public responseparentesco$: Observable<any[]> = this.parentesco$.asObservable();

  //respuesta accion behaursubjet
  private status$ = new BehaviorSubject<any[]>([]);
  public responsestatus$: Observable<any[]> = this.status$.asObservable();


  form: FormGroup = new FormGroup({
    Cod_solicitud_evaluacion: new FormControl(null),
    Cod_departamento: new FormControl('', Validators.required),
    Cod_sede: new FormControl('', Validators.required),
    Cod_tipo_evaluacion: new FormControl('', Validators.required),
    Cod_parentesco: new FormControl('', Validators.required),
    Cod_estatus: new FormControl('', Validators.required),
    Nombre_beneficiario: new FormControl('', Validators.required),
    Edad_beneficiario: new FormControl('', Validators.required),
    Direccion_actual: new FormControl('', Validators.required),
    Nombre_responsable: new FormControl('', Validators.required),
    Telefono_fijo: new FormControl('', Validators.required),
    Telefono_celular: new FormControl('', Validators.required),
    Correo_electronico: new FormControl('', Validators.required),
    Fecha_solicitud: new FormControl('', Validators.required),
    Usuario_registro: new FormControl(null)
  });

  // //seteamos el form crear
  inicializarForm() {
    this.form.setValue({
      Cod_solicitud_evaluacion: null,
      Cod_departamento: null,
      Cod_sede: null,
      Cod_tipo_evaluacion: null,
      Cod_parentesco: null,
      Cod_estatus: null,
      Nombre_beneficiario: null,
      Edad_beneficiario: null,
      Direccion_actual: null,
      Nombre_responsable: null,
      Telefono_fijo: null,
      Telefono_celular: null,
      Correo_electronico: null,
      Fecha_solicitud: null,
      Usuario_registro: null
    });
  }

  //inicializarForm editar
  popform(item: any) {
    let params = {
      Cod_solicitud_evaluacion: item.Cod_solicitud_evaluacion,
      Cod_departamento: item.Cod_departamento,
      Cod_sede: item.Cod_sede,
      Cod_tipo_evaluacion: item.Cod_tipo_evaluacion,
      Cod_parentesco: item.Cod_parentesco,
      Cod_estatus: item.Cod_estatus,
      Nombre_beneficiario: item.Nombre_beneficiario,
      Edad_beneficiario: item.Edad_beneficiario,
      Direccion_actual: item.Direccion_actual,
      Nombre_responsable: item.Nombre_responsable,
      Telefono_fijo: item.Telefono_fijo,
      Telefono_celular: item.Telefono_celular,
      Correo_electronico: item.Correo_electronico,
      Fecha_solicitud: item.Fecha_solicitud,
      Usuario_registro: item.Usuario_registro
    }
    this.form.setValue(params);
  }

  obtenerstatus(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/status`).pipe(map((resp: any) => resp));
  }

  mostrarstatus() {
    const request$ = this.obtenerstatus().pipe(tap((resp: any) => { this.status$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  mostrartipoevaluacion() {
    const request$ = this.obtenertipoevaluacion().pipe(tap((resp: any) => { this.evaluacion$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtenertipoevaluacion(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/tipo_evaluacion`).pipe(map((resp: any) => resp));
  }

  mostrapersona() {
    const request$ = this.obtenerpersona().pipe(tap((resp: any) => { this.persona$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }


  obtenerpersona(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/persona`).pipe(map((resp: any) => resp));
  }

  mostrardepartamento() {
    const request$ = this.obtenerdepartamento().pipe(tap((resp: any) => { this.departamento$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtenerdepartamento(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/departamento`).pipe(map((resp: any) => resp));
  }

  mostrarsedes() {
    const request$ = this.obtenersedes().pipe(tap((resp: any) => { this.sede$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtenersedes(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/sedes`).pipe(map((resp: any) => resp));
  }

  mostrarparentesco() {
    const request$ = this.obtenerparentesco().pipe(tap((resp: any) => { this.parentesco$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtenerparentesco(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/parentesco`).pipe(map((resp: any) => resp));
  }



  mostrar() {
    const request$ = this.obtener().pipe(tap((resp: any) => { this.solicitud$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtener(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/solicitud_evaluacion`).pipe(map((resp: any) => resp));
  }


  crear(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/solicitud_evaluacion`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  actualizar(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/solicitud_evaluacion`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  eliminar(params: any): Observable<any> {
    console.log(params)
    return this._http.post(`http://localhost/ApoautisApis/v1/solicitud_evaluacion`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }

}
