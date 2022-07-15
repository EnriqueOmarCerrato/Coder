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
 private permisos$ = new BehaviorSubject<any[]>([]);
 public responsepermiso$: Observable<any[]> = this.permisos$.asObservable();

  //respuesta accion behaursubjet
  private roles$ = new BehaviorSubject<any[]>([]);
  public responseroles$: Observable<any[]> = this.roles$.asObservable();

   //respuesta accion behaursubjet
 private objeto$ = new BehaviorSubject<any[]>([]);
 public responseobjeto$: Observable<any[]> = this.objeto$.asObservable();


 constructor(private _http: HttpClient) { }

 mostrarrol() {
  const request$ = this.obtenerrol().pipe(tap((resp: any) => { this.roles$.next(resp); }));
  return request$.subscribe();
}

obtenerrol(): Observable<any> {
  return this._http.get(`http://localhost/ApoautisApis/v1/roles`).pipe(map((resp: any) => resp));
}

mostrarobjeto() {
  const request$ = this.obtenerobjeto().pipe(tap((resp: any) => { this.objeto$.next(resp);}));
  return request$.subscribe();
}

obtenerobjeto(): Observable<any> {
  return this._http.get(`http://localhost/ApoautisApis/v1/objetos`).pipe(map((resp: any) => resp));
}

 mostrar() {
   const request$ = this.obtener().pipe(tap((resp: any) => { this.permisos$.next(resp);}));
   return request$.subscribe();
 }

 obtener(): Observable<any> {
   return this._http.get(`http://localhost/ApoautisApis/v1/permisos`).pipe(map((resp: any) => resp));
 }


 crear(params: any): Observable<any> {
   return this._http.post(`http://localhost/ApoautisApis/v1/permisos`, JSON.stringify(params)).pipe(map((resp: any) => resp));
 }


 actualizar(params: any): Observable<any> {
   return this._http.post(`http://localhost/ApoautisApis/v1/permisos`, JSON.stringify(params)).pipe(map((resp: any) => resp));
 }


 eliminar(params: any): Observable<any> {
   console.log(params)
   return this._http.post(`http://localhost/ApoautisApis/v1/permisos`, JSON.stringify(params)).pipe(map((resp: any) => resp));
 }


}
