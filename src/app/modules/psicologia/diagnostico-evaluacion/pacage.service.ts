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
  private diagnostico$ = new BehaviorSubject<any[]>([]);
  public responsediagnostico$: Observable<any[]> = this.diagnostico$.asObservable();

  //respuesta accion behaursubjet
  private persona$ = new BehaviorSubject<any[]>([]);
  public responsepersona$: Observable<any[]> = this.persona$.asObservable();

  form: FormGroup = new FormGroup({
    Cod_diagnostico: new FormControl(null),
    Cod_persona: new FormControl('', Validators.required),
    Diagnostico_general: new FormControl('', Validators.required),
    Doc_informe_diagnostico: new FormControl(null),
    Usuario_registro: new FormControl(null)
  });

  // //seteamos el form crear
  inicializarForm() {
    this.form.setValue({
      Cod_diagnostico: null,
      Cod_persona: null,
      Diagnostico_general: null,
      Doc_informe_diagnostico: null,
      Usuario_registro: null
    });
  }

  //inicializarForm editar
  popform(item: any) {
    let params = {
      Cod_diagnostico: item.Cod_diagnostico,
      Cod_persona: item.Cod_persona,
      Diagnostico_general: item.Diagnostico_general,
      Doc_informe_diagnostico: item.Doc_informe_diagnostico,
      Usuario_registro: item.Usuario_registro
    }
    this.form.setValue(params);
  }

  mostrapersona() {
    const request$ = this.obtenerpersona().pipe(tap((resp: any) => { this.persona$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtenerfiltro(params): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/filtro`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }
  
  obtenerpersona(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/persona`).pipe(map((resp: any) => resp));
  }

  mostrar() {
    const request$ = this.obtener().pipe(tap((resp: any) => { this.diagnostico$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtener(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/diagnostico_evaluacion`).pipe(map((resp: any) => resp));
  }


  crear(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/diagnostico_evaluacion`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  actualizar(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/diagnostico_evaluacion`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  eliminar(params: any): Observable<any> {
    console.log(params)
    return this._http.post(`http://localhost/ApoautisApis/v1/diagnostico_evaluacion`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }

}
