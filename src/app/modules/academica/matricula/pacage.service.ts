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
 private matricula$ = new BehaviorSubject<any[]>([]);
 public responsematricula$: Observable<any[]> = this.matricula$.asObservable();

   //respuesta accion behaursubjet
   private terapeuta$ = new BehaviorSubject<any[]>([]);
   public responseterapeuta$: Observable<any[]> = this.terapeuta$.asObservable();

     //respuesta accion behaursubjet
  private colaborador$ = new BehaviorSubject<any[]>([]);
  public responsecolaborador$: Observable<any[]> = this.colaborador$.asObservable();

    //respuesta accion behaursubjet
    private tipo_especialidad$ = new BehaviorSubject<any[]>([]);
    public responsetipo_especialidad$: Observable<any[]> = this.tipo_especialidad$.asObservable();
  
 //respuesta accion behaursubjet
 private ficha_inclusion$ = new BehaviorSubject<any[]>([]);
 public responseficha_inclusion$: Observable<any[]> = this.ficha_inclusion$.asObservable();

   
 //respuesta accion behaursubjet
 private persona$ = new BehaviorSubject<any[]>([]);
 public responsepersona$: Observable<any[]> = this.persona$.asObservable();
 constructor(private _http: HttpClient) { }

 form: FormGroup = new FormGroup({
  Cod_matricula: new FormControl(null),
  Cod_asignacion: new FormControl('',Validators.required),
  Cod_persona: new FormControl('', Validators.required),
  Cod_ficha_inclusion: new FormControl('', Validators.required),
  horas_asignadas_beneficiario: new FormControl('', Validators.required),
  Observacion_terapia: new FormControl('', Validators.required),
  Usuario_registro: new FormControl('', Validators.required)
 });


 terapeuta: FormGroup = new FormGroup({
  Cod_asignacion: new FormControl(null),
  Cod_colaborador: new FormControl('',Validators.required),
  Cod_tipo_especialidad: new FormControl('', Validators.required),
  horas_asignadas: new FormControl('', Validators.required),
  Usuario_registro: new FormControl(null)
});

 //hola mundo
 ///fkjhkj
 //seteamos el form crear
 inicializarForm() {
   this.form.setValue({
    Cod_matricula: null,
    Cod_asignacion: null,
    Cod_persona: null,
    Cod_ficha_inclusion: null,
    horas_asignadas_beneficiario: null,
    Observacion_terapia: null,
    Usuario_registro: null
   });

  this.terapeuta.setValue({
    Cod_asignacion: null,
    Cod_colaborador: null,
    Cod_tipo_especialidad: null,
    horas_asignadas: null,
    Usuario_registro: null
  });
 }

 //inicializarForm editar
 popform(item: any) {
   console.log(item)
  let form ={
    Cod_matricula: item.Cod_matricula,
    Cod_asignacion: item.Cod_asignacion,
    Cod_persona: item.Cod_persona,
    Cod_ficha_inclusion: item.Cod_ficha_inclusion,
    horas_asignadas_beneficiario: item.Horas_asignadas_beneficiario,
    Observacion_terapia: item.Observacion_terapia,
    Usuario_registro: item.Usuario_registro
   };

  let terapeuta = {
    Cod_asignacion: item.Cod_asignacion,
    Cod_colaborador: item.Cod_colaborador,
    Cod_tipo_especialidad: item.Cod_tipo_especialidad,
    horas_asignadas: item.horas_asignadas,
    Usuario_registro: item.Usuario_registro
  };

   this.form.setValue(form);
   this.terapeuta.setValue(terapeuta)
 }

 obtenerfiltroc(params): Observable<any> {
  return this._http.post(`http://localhost/ApoautisApis/v1/filtrocolaborador`, JSON.stringify(params)).pipe(map((resp: any) => resp));
}

 mostrarasignacion() {
  const request$ = this.obtener().pipe(tap((resp: any) => { this.terapeuta$.next(resp); console.log(resp) }));
  return request$.subscribe();
}

obtenerfiltro(params): Observable<any> {
  return this._http.post(`http://localhost/ApoautisApis/v1/filtro`, JSON.stringify(params)).pipe(map((resp: any) => resp));
}

obtenerasignacion(): Observable<any> {
  return this._http.get(`http://localhost/ApoautisApis/v1/asignacion_terapeutica`).pipe(map((resp: any) => resp));
}

obtenercolaborador(): Observable<any> {
  return this._http.get(`http://localhost/ApoautisApis/v1/colaborador`).pipe(map((resp: any) => resp));
}

mostrarcolaborador() {
  const request$ = this.obtenercolaborador().pipe(tap((resp: any) => { this.colaborador$.next(resp); console.log(resp) }));
  return request$.subscribe();
}


mostrarespecialidad() {
  const request$ = this.obtenerespecialidad().pipe(tap((resp: any) => { this.tipo_especialidad$.next(resp); console.log(resp) }));
  return request$.subscribe();
}

obtenerespecialidad(): Observable<any> {
  return this._http.get(`http://localhost/ApoautisApis/v1/tipo_especialidad`).pipe(map((resp: any) => resp));
}


mostrarfichainclusion() {
  const request$ = this.obtenerfichainclusion().pipe(tap((resp: any) => { this.ficha_inclusion$.next(resp); console.log(resp) }));
  return request$.subscribe();
}

obtenerfichainclusion(): Observable<any> {
  return this._http.get(`http://localhost/ApoautisApis/v1/ficha_inclusion`).pipe(map((resp: any) => resp));
}

mostrarpersona() {
  const request$ = this.obtenerpersona().pipe(tap((resp: any) => { this.persona$.next(resp); console.log(resp) }));
  return request$.subscribe();
}

obtenerpersona(): Observable<any> {
  return this._http.get(`http://localhost/ApoautisApis/v1/persona`).pipe(map((resp: any) => resp));
}


 mostrar() {
   const request$ = this.obtener().pipe(tap((resp: any) => { this.matricula$.next(resp); console.log(resp) }));
   return request$.subscribe();
 }

 obtener(): Observable<any> {
   return this._http.get(`http://localhost/ApoautisApis/v1/matricula`).pipe(map((resp: any) => resp));
 }


 crear(params: any): Observable<any> {
   return this._http.post(`http://localhost/ApoautisApis/v1/matricula`, JSON.stringify(params)).pipe(map((resp: any) => resp));
 }


 actualizar(params: any): Observable<any> {
   return this._http.post(`http://localhost/ApoautisApis/v1/matricula`, JSON.stringify(params)).pipe(map((resp: any) => resp));
 }


 eliminar(params: any): Observable<any> {
   console.log(params)
   return this._http.post(`http://localhost/ApoautisApis/v1/matricula`, JSON.stringify(params)).pipe(map((resp: any) => resp));
 }


}
