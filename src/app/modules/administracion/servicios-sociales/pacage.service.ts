import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacageService {

  constructor(private _http: HttpClient) { }

  //respuesta accion behaursubjet
  private servicio$ = new BehaviorSubject<any[]>([]);
  public responseservicio$: Observable<any[]> = this.servicio$.asObservable();

  form: FormGroup = new FormGroup({
    Cod_servicio_social: new FormControl(null),
    Cod_estatus: new FormControl('', Validators.required),
    Nombre_servicio_social: new FormControl('', Validators.required),
    Descripcion_servicio_social: new FormControl('', Validators.required),
    Usuario_registro: new FormControl('', Validators.required),
     Fecha_registro: new FormControl('', Validators.required),
   Usuario_modificacion: new FormControl('', Validators.required),
    Fecha_modificacion: new FormControl('', Validators.required),
  });

  //seteamos el form crear
  inicializarForm() {
    this.form.setValue({
      Cod_servicio_social: null,
      Cod_estatus: null,
      Nombre_servicio_social: null,
      Descripcion_servicio_social: null,
      Usuario_registro: null,
      Fecha_registro: null,
      Usuario_modificacion: null,
      Fecha_modificacion: null,
    });
  }

  //inicializarForm editar
  popform(item: any) {
    this.form.setValue(item);
  }

  mostrar() {
    const request$ = this.obtener().pipe(tap((resp: any) => { this.servicio$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtener(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/servicio_social`).pipe(map((resp: any) => resp));
  }


  crear(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/servicio_social`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  actualizar(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/servicio_social`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  eliminar(params: any): Observable<any> {
    console.log(params)
    return this._http.post(`http://localhost/ApoautisApis/v1/servicio_social`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


}
