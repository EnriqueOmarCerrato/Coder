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
  private sede$ = new BehaviorSubject<any[]>([]);
  public responseSede$: Observable<any[]> = this.sede$.asObservable();

  form: FormGroup = new FormGroup({
    Cod_sede: new FormControl(null),
    Administrador_general:new FormControl('', Validators.required),
    Correo_electronico_sede: new FormControl('', Validators.required),
    Nombre_sede: new FormControl('', Validators.required),
    Telefono_sede: new FormControl('', Validators.required),
    Direccion_sede: new FormControl('', Validators.required),
  });


  // <!-- Administrador_general: "LIC. DORIS ARCHAGA"
  // Cod_departamento: "8"
  // Cod_estatus: "1"
  // Cod_sede: "1"
  // Correo_electronico_sede: "apoautis1997@yahoo.com"
  // Direccion_sede: "COLONIA ALAMEDA, 11VA Y 12VA CALLE, CONTIGUO A CENTRO COMERC"
  // Fecha_modificacion: null
  // Fecha_registro: "0000-00-00 00:00:00"
  // Nombre_sede: "APOAUTISTEGUCIGALPA"
  // Redes_sociales: null
  // Telefono_sede: "2289-9312"
  // Usuario_modificacion: null
  // Usuario_registro: "ADMIN" -->


  //seteamos el form crear
  inicializarForm() {
    this.form.setValue({
      Cod_sede: null,
      Administrador_general:null,
      Correo_electronico_sede: null,
      Nombre_sede: null,
      Telefono_sede: null,
      Direccion_sede:null
    });
  }

  //inicializarForm editar
  popform(item: any) {
    this.form.setValue(item);
  }

  mostrar() {
    const request$ = this.obtener().pipe(tap((resp: any) => { this.sede$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }

  obtener(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/sedes`).pipe(map((resp: any) => resp));
  }


  crear(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/sedes`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  actualizar(params: any): Observable<any> {
    return this._http.post(`http://localhost/ApoautisApis/v1/sedes`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }


  eliminar(params: any): Observable<any> {
    console.log(params)
    return this._http.post(`http://localhost/ApoautisApis/v1/sedes`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }

}
