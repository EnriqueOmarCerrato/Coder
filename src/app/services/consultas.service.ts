import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http:HttpClient) { }

  getTable(){
    return this.http.get('http://localhost/ApoautisApis/v1/getTabla/1').toPromise();
  }

  crear(params: any): Observable<any> {
    return this.http.post(`http://localhost/ApoautisApis/v1/bitacora`, JSON.stringify(params)).pipe(map((resp: any) => resp));
  }
}
