import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PacageService {

  constructor(private _http: HttpClient) { }

  //respuesta accion behaursubjet
  private nivel$ = new BehaviorSubject<any[]>([]);
  public responseNivel$: Observable<any[]> = this.nivel$.asObservable();

  form: FormGroup = new FormGroup({
    Cod_nivel_academico: new FormControl(null),
    Nivel_academico: new FormControl('', Validators.required),
  });


  //seteamos el form crear
  inicializarForm() {
    this.form.setValue({
      Cod_nivel_academico: null,
      Nivel_academico: null
    });
  }

  //inicializarForm editar
  popform(item: any) {
    this.form.setValue(item);
  }

  mostrar() {
    const request$ = this.obtener().pipe(tap((resp: any) => { this.nivel$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtener(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/nivel_academico`).pipe(map((resp: any) => resp));
  }


  crear(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/nivel_academico`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  actualizar(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/nivel_academico`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  eliminar(params: any): Observable<any> {
    console.log(params)
    return this._http.post(`http://localhost/ApoautisApis/v1/nivel_academico`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }
}
