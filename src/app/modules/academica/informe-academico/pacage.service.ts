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
 private informe$ = new BehaviorSubject<any[]>([]);
 public responseinforme$: Observable<any[]> = this.informe$.asObservable();

 //respuesta accion behaursubjet
 private matricula$ = new BehaviorSubject<any[]>([]);
 public responsematricula$: Observable<any[]> = this.matricula$.asObservable();

   //respuesta accion behaursubjet
   private terapeuta$ = new BehaviorSubject<any[]>([]);
   public responseterapeuta$: Observable<any[]> = this.terapeuta$.asObservable();

     //respuesta accion behaursubjet
  private personas$ = new BehaviorSubject<any[]>([]);
  public responsepersonas$: Observable<any[]> = this.personas$.asObservable();

       //respuesta accion behaursubjet
       private filtro$ = new BehaviorSubject<any[]>([]);
       public responsefiltro$: Observable<any[]> = this.filtro$.asObservable();

  public academico:any;
  public planificacione:any;

  public persona:any;

 constructor(private _http: HttpClient) { }

 form: FormGroup = new FormGroup({
  Cod_informe_academico: new FormControl(null),
  Cod_matricula: new FormControl('',Validators.required),
  Cod_persona: new FormControl('', Validators.required)
 });



 //seteamos el form crear
 inicializarForm() {
   this.form.setValue({
    Cod_informe_academico: null,
    Cod_matricula: null,
    Cod_persona:null
   });
   this.academico = null;
   this.planificacione = null;
 }

 //inicializarForm editar
 popform(item: any) {
   let params = {
    Cod_informe_academico: item.Cod_informe_academico,
    Cod_matricula: item.Cod_matricula,
    Cod_persona:item.Cod_persona
   }
   this.academico = item.Doc_informe_academico;
   this.planificacione = item.Doc_planificacion_terapia
   this.form.setValue(params);
 }



 mostrarasignacion() {
  const request$ = this.obtener().pipe(tap((resp: any) => { this.terapeuta$.next(resp); console.log(resp) }));
  return request$.subscribe();
}

obtenerasignacion(): Observable<any> {
  return this._http.get(`http://localhost/ApoautisApis/v1/asignacion_terapeutica`).pipe(map((resp: any) => resp));
}

mostrarmatricula() {
  const request$ = this.obtenermatricula().pipe(tap((resp: any) => { this.matricula$.next(resp); console.log(resp) }));
  return request$.subscribe();
}

obtenermatricula(): Observable<any> {
  return this._http.get(`http://localhost/ApoautisApis/v1/matric`).pipe(map((resp: any) => resp));
}

mostrarpersona() {
  const request$ = this.obtenerpersona().pipe(tap((resp: any) => { this.personas$.next(resp); console.log(resp) }));
  return request$.subscribe();
}

obtenerpersona(): Observable<any> {
  return this._http.get(`http://localhost/ApoautisApis/v1/persona`).pipe(map((resp: any) => resp));
}

 mostrar() {
   const request$ = this.obtener().pipe(tap((resp: any) => { this.informe$.next(resp); console.log(resp) }));
   return request$.subscribe();
 }

 obtener(): Observable<any> {
   return this._http.get(`http://localhost/ApoautisApis/v1/informe_academico`).pipe(map((resp: any) => resp));
 }


 crear(params: any): Observable<any> {
   return this._http.post(`http://localhost/ApoautisApis/v1/informe_academico`, JSON.stringify(params)).pipe(map((resp: any) => resp));
 }


 actualizar(params: any): Observable<any> {
   return this._http.post(`http://localhost/ApoautisApis/v1/informe_academico`, JSON.stringify(params)).pipe(map((resp: any) => resp));
 }


 eliminar(params: any): Observable<any> {
   console.log(params)
   return this._http.post(`http://localhost/ApoautisApis/v1/informe_academico`, JSON.stringify(params)).pipe(map((resp: any) => resp));
 }


obtenerfiltro(params): Observable<any> {
  return this._http.post(`http://localhost/ApoautisApis/v1/filtro`, JSON.stringify(params)).pipe(map((resp: any) => resp));
}


obtenermatriculaid(params): Observable<any> {
  return this._http.post(`http://localhost/ApoautisApis/v1/matriculaid`, JSON.stringify(params)).pipe(map((resp: any) => resp));
}


}
