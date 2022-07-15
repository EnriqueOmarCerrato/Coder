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
  private tipo_especialidad$ = new BehaviorSubject<any[]>([]);
  public responsetipo_especialidad$: Observable<any[]> = this.tipo_especialidad$.asObservable();

  form: FormGroup = new FormGroup({
    Cod_tipo_especialidad: new FormControl(null),
    Tipo_especialidad:new FormControl('', Validators.required),
    Descripcion_especialidad: new FormControl('', Validators.required),
    Fecha_modificacion: new FormControl(null),
    Fecha_registro: new FormControl(null),
    Usuario_modificacion: new FormControl(null),
    Usuario_registro: new FormControl(null)
  });

  //seteamos el form crear
  inicializarForm() {
    this.form.setValue({
      Cod_tipo_especialidad: null,
      Tipo_especialidad:null,
      Descripcion_especialidad: null,
      Fecha_modificacion: null,
      Fecha_registro: null,
      Usuario_modificacion: null,
      Usuario_registro: null
    });
  }

  //inicializarForm editar
  popform(item: any) {
    this.form.setValue(item);
  }

  mostrar() {
    const request$ = this.obtener().pipe(tap((resp: any) => { this.tipo_especialidad$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtener(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/tipo_especialidad`).pipe(map((resp: any) => resp));
  }


  crear(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/tipo_especialidad`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  actualizar(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/tipo_especialidad`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  eliminar(params: any): Observable<any> {
    console.log(params)
    return this._http.post(`http://localhost/ApoautisApis/v1/tipo_especialidad`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }

}
