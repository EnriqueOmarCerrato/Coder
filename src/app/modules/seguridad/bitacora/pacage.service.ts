import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import {map,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PacageService {

constructor(private _http:HttpClient) { }
//respuesta accion behaursubjet
private bitacora$ = new BehaviorSubject<any[]>([]);
public responsebitacora$: Observable<any[]> = this.bitacora$.asObservable();

mostrar() {
  const request$ = this.obtener().pipe(tap((resp: any) => { this.bitacora$.next(resp);}));
  return request$.subscribe();
}

obtener(): Observable<any> {
  return this._http.get(`http://localhost/ApoautisApis/v1/bitacora`).pipe(map((resp: any) => resp));
}
}
