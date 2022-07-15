import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PacageService {

 //respuesta accion behaursubjet
 private objeto$ = new BehaviorSubject<any[]>([]);
 public responseobjeto$: Observable<any[]> = this.objeto$.asObservable();

 constructor(private _http: HttpClient) { }

 form: FormGroup = new FormGroup({
   Cod_objeto: new FormControl(null),
   Nombre_objeto: new FormControl('',Validators.required),
   Descripcion_objeto: new FormControl('', Validators.required),
   Tipo_objeto: new FormControl('', Validators.required),
 });

 //hola mundo
 ///fkjhkj
 //seteamos el form crear
 inicializarForm() {
   this.form.setValue({
     Cod_objeto: null,
     Nombre_objeto: null,
     Descripcion_objeto:null,
     Tipo_objeto:null
   });
 }

 //inicializarForm editar
 popform(item: any) {
   this.form.setValue(item);
 }

 mostrar() {
   const request$ = this.obtener().pipe(tap((resp: any) => { this.objeto$.next(resp); console.log(resp) }));
   return request$.subscribe();
 }

 obtener(): Observable<any> {
   return this._http.get(`http://localhost/ApoautisApis/v1/objetos`).pipe(map((resp: any) => resp));
 }


 crear(params: any): Observable<any> {
   return this._http.post(`http://localhost/ApoautisApis/v1/objetos`, JSON.stringify(params)).pipe(map((resp: any) => resp));
 }


 actualizar(params: any): Observable<any> {
   return this._http.post(`http://localhost/ApoautisApis/v1/objetos`, JSON.stringify(params)).pipe(map((resp: any) => resp));
 }


 eliminar(params: any): Observable<any> {
   console.log(params)
   return this._http.post(`http://localhost/ApoautisApis/v1/objetos`, JSON.stringify(params)).pipe(map((resp: any) => resp));
 }


}
