import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor(private _http: HttpClient) { }

  //respuesta accion behaursubjet
  private usuario$ = new BehaviorSubject<any[]>([]);
  public responseusuario$: Observable<any[]> = this.usuario$.asObservable();
   //respuesta accion behaursubjet
 private roles$ = new BehaviorSubject<any[]>([]);
 public responseroles$: Observable<any[]> = this.roles$.asObservable();
   //respuesta accion behaursubjet
   private sede$ = new BehaviorSubject<any[]>([]);
   public responseSede$: Observable<any[]> = this.sede$.asObservable();

  form: FormGroup = new FormGroup({
    id_usuario: new FormControl(null),
    Cod_rol: new FormControl('', Validators.required),
    Cod_colaborador: new FormControl('', Validators.required),
    Cod_sede: new FormControl('', Validators.required),
    nombre_usuario: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required),
    estado_usuario: new FormControl(null),
    estado_login:new FormControl(null),
    ultimo_login:new FormControl(null),
    fecha_cambio_pass:new FormControl(null),
    fk_persona: new FormControl('', Validators.required),
    correo_electronico: new FormControl('', [Validators.required, Validators.email]),
    intentos: new FormControl(null),
    token: new FormControl(null),
  });

  get primEmail(){
    return this.form.get('correo_electronico')
  }

//   INSERT INTO apoautis.tbl_usuarios
// (Cod_rol, Cod_colaborador, Cod_sede, nombre_usuario, pass, estado_usuario, estado_login, ultimo_login, fecha_cambio_pass, fk_persona, correo_electronico, intentos, token)
// VALUES(4, 1, 1, '', '1', 'I', 'PV', NULL, '', 0, NULL, 0, NULL);

  //seteamos el form crear
  inicializarForm() {
    this.form.setValue({
      id_usuario:null,
      Cod_rol: null,
      Cod_colaborador: null,
      Cod_sede: null,
      nombre_usuario:null,
      pass: null,
      estado_usuario: null,
      estado_login:null,
      ultimo_login:null,
      fecha_cambio_pass:null,
      fk_persona: null,
      correo_electronico: null,
      intentos: null,
      token: null,
    });
  }

  //inicializarForm editar
  popform(item: any) {
    this.form.setValue(item);
  }

  mostrarsedes() {
    const request$ = this.obtenersedes().pipe(tap((resp: any) => { this.sede$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtenersedes(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/sedes`).pipe(map((resp: any) => resp));
  }

  mostrarroles() {
    const request$ = this.obtenerroles().pipe(tap((resp: any) => { this.roles$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtenerroles(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/roles`).pipe(map((resp: any) => resp));
  }

  mostrar() {
    const request$ = this.obtener().pipe(tap((resp: any) => { this.usuario$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtener(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/usuario`).pipe(map((resp: any) => resp));
  }


  crear(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/usuario`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  actualizar(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/usuario`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  eliminar(params: any): Observable<any> {
    console.log(params)
    return this._http.post(`http://localhost/ApoautisApis/v1/usuario`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


}
