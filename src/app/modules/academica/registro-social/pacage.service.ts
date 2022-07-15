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
   private servicio$ = new BehaviorSubject<any[]>([]);
   public responseservicio$: Observable<any[]> = this.servicio$.asObservable();
  
   //respuesta accion behaursubjet
   private colaborador$ = new BehaviorSubject<any[]>([]);
   public responsecolaborador$: Observable<any[]> = this.colaborador$.asObservable();
  
     //respuesta accion behaursubjet
     private serviciosocial$ = new BehaviorSubject<any[]>([]);
     public responseserviciosocial$: Observable<any[]> = this.serviciosocial$.asObservable();

       //respuesta accion behaursubjet
  private personas$ = new BehaviorSubject<any[]>([]);
  public responsepersonas$: Observable<any[]> = this.personas$.asObservable();

  
  obtenerpersona(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/pers`).pipe(map((resp: any) => resp));
  }

  mostrarpersona() {
    const request$ = this.obtenerpersona().pipe(tap((resp: any) => { this.personas$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }
  
   constructor(private _http: HttpClient) { }
  
   form: FormGroup = new FormGroup({
    Cod_registro_servicio_social: new FormControl(null),
    Cod_colaborador: new FormControl('',Validators.required),
    Cod_servicio_social: new FormControl('', Validators.required),
    Cod_persona: new FormControl('', Validators.required),
    Fecha_realizacion: new FormControl('', Validators.required),
    Usuario_registro: new FormControl('', Validators.required)
   });
  
  
   
   //seteamos el form crear
   inicializarForm() {
     this.form.setValue({
      Cod_registro_servicio_social: null,
      Cod_colaborador: null,
      Cod_servicio_social:null,
      Cod_persona:null,
      Fecha_realizacion:null,
      Usuario_registro:null
     });
   }
  
   //inicializarForm editar
   popform(item: any) {
     let params = {
      Cod_registro_servicio_social: item.Cod_registro_servicio_social,
      Cod_colaborador: item.Cod_colaborador,
      Cod_servicio_social:item.Cod_servicio_social,
      Cod_persona:item.Cod_persona,
      Fecha_realizacion:item.Fecha_realizacion,
      Usuario_registro:item.Usuario_registro
     }

     console.log(params)
     this.form.setValue(params);
   }
  
   
  
   mostrarservicio() {
    const request$ = this.obtenerservicio().pipe(tap((resp: any) => { this.servicio$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }
  
  obtenerservicio(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/servicio_social`).pipe(map((resp: any) => resp));
  }
  
  mostrarcolaborador() {
    const request$ = this.obtenercolaborador().pipe(tap((resp: any) => { this.colaborador$.next(resp); console.log(resp) }));
    return request$.subscribe();
  }
  
  obtenercolaborador(): Observable<any> {
    return this._http.get(`http://localhost/ApoautisApis/v1/colaborador`).pipe(map((resp: any) => resp));
  }
  
   mostrar() {
     const request$ = this.obtener().pipe(tap((resp: any) => { this.serviciosocial$.next(resp); console.log(resp) }));
     return request$.subscribe();
   }
  
   obtener(): Observable<any> {
     return this._http.get(`http://localhost/ApoautisApis/v1/registro_social`).pipe(map((resp: any) => resp));
   }
  
  
   crear(params: any): Observable<any> {
     return this._http.post(`http://localhost/ApoautisApis/v1/registro_social`, JSON.stringify(params)).pipe(map((resp: any) => resp));
   }
  
  
   actualizar(params: any): Observable<any> {
     return this._http.post(`http://localhost/ApoautisApis/v1/registro_social`, JSON.stringify(params)).pipe(map((resp: any) => resp));
   }
  
  
   eliminar(params: any): Observable<any> {
     console.log(params)
     return this._http.post(`http://localhost/ApoautisApis/v1/registro_social`, JSON.stringify(params)).pipe(map((resp: any) => resp));
   }
  
   
obtenerfiltro(params): Observable<any> {
  return this._http.post(`http://localhost/ApoautisApis/v1/filtro`, JSON.stringify(params)).pipe(map((resp: any) => resp));
}

obtenerfiltroc(params): Observable<any> {
  return this._http.post(`http://localhost/ApoautisApis/v1/filtrocolaborador`, JSON.stringify(params)).pipe(map((resp: any) => resp));
}
  
}
