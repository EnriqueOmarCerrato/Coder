import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NavService } from 'src/app/services/nav.service';

@Injectable({
  providedIn: 'root'
})
export class PacageService {

  public permisoinserta:any;

 //respuesta accion behaursubjet
 private roles$ = new BehaviorSubject<any[]>([]);
 public responseroles$: Observable<any[]> = this.roles$.asObservable();

  //respuesta accion behaursubjet
  private estado$ = new BehaviorSubject<any[]>([]);
  public responseestado$: Observable<any[]> = this.estado$.asObservable();

 constructor(private _http: HttpClient,public navpermiso:NavService) {



  }

 form: FormGroup = new FormGroup({
  Cod_rol: new FormControl(null),
  Rol: new FormControl('',Validators.required),
  Cod_estatus: new FormControl('', Validators.required),
  Descripcion: new FormControl('', Validators.required)
 });

 //seteamos el form crear
 inicializarForm() {
   this.form.setValue({
     Cod_rol: null,
     Rol: null,
     Cod_estatus:'',
     Descripcion:null
   });
 }

 //inicializarForm editar
 popform(item: any) {
   this.form.setValue(item);
 }
 mostrarstatus() {
  const request$ = this.obtenerstatus().pipe(tap((resp: any) => { this.estado$.next(resp); console.log(resp) }));
  return request$.subscribe();
}

obtenerstatus(): Observable<any> {
  return this._http.get(`http://localhost/ApoautisApis/v1/status`).pipe(map((resp: any) => resp));
}

 mostrar() {
   const request$ = this.obtener().pipe(tap((resp: any) => { this.roles$.next(resp); console.log(resp) }));
   return request$.subscribe();
 }

 obtener(): Observable<any> {
   return this._http.get(`http://localhost/ApoautisApis/v1/roles`).pipe(map((resp: any) => resp));
 }


 crear(params: any): Observable<any> {
   return this._http.post(`http://localhost/ApoautisApis/v1/roles`, JSON.stringify(params)).pipe(map((resp: any) => resp));
 }


 actualizar(params: any): Observable<any> {
   return this._http.post(`http://localhost/ApoautisApis/v1/roles`, JSON.stringify(params)).pipe(map((resp: any) => resp));
 }


 eliminar(params: any): Observable<any> {
   console.log(params)
   return this._http.post(`http://localhost/ApoautisApis/v1/roles`, JSON.stringify(params)).pipe(map((resp: any) => resp));
 }


}
