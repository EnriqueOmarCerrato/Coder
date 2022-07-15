import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}
  verificarUser(user: any): Observable<any> {
    return this.http.get("http://localhost/ApoautisApis/v1/login/"+user);
  }
}
