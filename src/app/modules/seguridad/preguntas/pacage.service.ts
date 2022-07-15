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
 private estado$ = new BehaviorSubject<any[]>([]);
 public responseestado$: Observable<any[]> = this.estado$.asObservable();


 constructor(private _http: HttpClient) { }

 form: FormGroup = new FormGroup({
   id_pregunta: new FormControl(null),
   pregunta: new FormControl('', Validators.required),
   estatus: new FormControl('',Validators.required)
 });

 //seteamos el form crear
 inicializarForm() {
   this.form.setValue({
     id_pregunta: null,
     pregunta: null,
     estatus:null
   });
 }

 //inicializarForm editar
 popform(item: any) {
   this.form.setValue(item);
 }

 mostrar() {
   const request$ = this.obtener().pipe(tap((resp: any) => { this.estado$.next(resp); console.log(resp) }));
   return request$.subscribe();
 }

 obtener(): Observable<any> {
   return this._http.get(`http://localhost/ApoautisApis/v1/preguntas`).pipe(map((resp: any) => resp));
 }


 crear(params: any): Observable<any> {
   return this._http.post(`http://localhost/ApoautisApis/v1/preguntas`, JSON.stringify(params)).pipe(map((resp: any) => resp));
 }


 actualizar(params: any): Observable<any> {
   return this._http.post(`http://localhost/ApoautisApis/v1/preguntas`, JSON.stringify(params)).pipe(map((resp: any) => resp));
 }


 eliminar(params: any): Observable<any> {
   console.log(params)
   return this._http.post(`http://localhost/ApoautisApis/v1/preguntas`, JSON.stringify(params)).pipe(map((resp: any) => resp));
 }


}
