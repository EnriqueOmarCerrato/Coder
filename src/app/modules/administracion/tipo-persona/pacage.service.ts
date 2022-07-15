import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacageService {

  constructor(private _http: HttpClient) { }

  //respuesta accion behaursubjet
  private tipo_persona$ = new BehaviorSubject<any[]>([]);
  public responsetipo_persona$: Observable<any[]> = this.tipo_persona$.asObservable();

  form: FormGroup = new FormGroup({
    Cod_tipo_persona: new FormControl(null),
    Tipo_persona: new FormControl('', Validators.required),
  });


  //seteamos el form crear
  inicializarForm() {
    this.form.setValue({
      Cod_tipo_persona: null,
      Tipo_persona: null
    });
  }

  //inicializarForm editar
  popform(item: any) {
    this.form.setValue(item);
  }

  mostrar() {
    const request$ = this.obtener().pipe(tap((resp: any) => { this.tipo_persona$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtener(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/tipo_persona`).pipe(map((resp: any) => resp));
  }


  crear(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/tipo_persona`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  actualizar(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/tipo_persona`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  eliminar(params: any): Observable<any> {
    console.log(params)
    return this._http.post(`http://localhost/ApoautisApis/v1/tipo_persona`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }

}
