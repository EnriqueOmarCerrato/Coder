import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacageService {

  constructor(private _http: HttpClient) { }

  //respuesta accion behaursubjet
  private parametro$ = new BehaviorSubject<any[]>([]);
  public responseparametro$: Observable<any[]> = this.parametro$.asObservable();

  form: FormGroup = new FormGroup({
    Cod_parametro: new FormControl(null),
    Cod_usuario: new FormControl(null),
    Parametro: new FormControl('', Validators.required),
    Valor: new FormControl('', Validators.required),
  });

  //seteamos el form crear
  inicializarForm() {
    this.form.setValue({
      Cod_parametro: null,
      Parametro: null,
      Valor:null
    });
  }

  //inicializarForm editar
  popform(item: any) {
    this.form.setValue(item);
  }

  mostrar() {
    const request$ = this.obtener().pipe(tap((resp: any) => { this.parametro$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtener(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/parametros`).pipe(map((resp: any) => resp));
  }


  crear(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/parametros`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  actualizar(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/parametros`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  eliminar(params: any): Observable<any> {
    console.log(params)
    return this._http.post(`http://localhost/ApoautisApis/v1/parametros`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


}
