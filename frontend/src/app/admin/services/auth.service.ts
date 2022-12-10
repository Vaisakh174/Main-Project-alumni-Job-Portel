import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000";
  // url="" ;  //for hosting


  loginuser(user: any) {
    return this.http.post<any>(`${this.url}/api/login`, user);
  }


  loggedin() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
