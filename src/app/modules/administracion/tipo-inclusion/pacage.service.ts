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
  private inclusion$ = new BehaviorSubject<any[]>([]);
  public responseinclusion$: Observable<any[]> = this.inclusion$.asObservable();

  form: FormGroup = new FormGroup({
    Cod_tipo_inclusion: new FormControl(null),
    Tipo_inclusion: new FormControl('', Validators.required),
  });


  //seteamos el form crear
  inicializarForm() {
    this.form.setValue({
      Cod_tipo_inclusion: null,
      Tipo_inclusion: null
    });
  }

  //inicializarForm editar
  popform(item: any) {
    this.form.setValue(item);
  }

  mostrar() {
    const request$ = this.obtener().pipe(tap((resp: any) => { this.inclusion$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtener(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/tipo_inclusion`).pipe(map((resp: any) => resp));
  }


  crear(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/tipo_inclusion`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  actualizar(params: any): Observable<any> {
    console.log(params)
    return this._http.post(`http://localhost/ApoautisApis/v1/tipo_inclusion`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  eliminar(params: any): Observable<any> {
    console.log(params)
    return this._http.post(`http://localhost/ApoautisApis/v1/tipo_inclusion`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }

}
