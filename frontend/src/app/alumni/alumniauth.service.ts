import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumniauthService {

 
  constructor(private http: HttpClient) { }

  url = "http://localhost:3000";
  // url="" ;  //for hosting


  loginuser(user: any) {
    return this.http.post<any>(`${this.url}/api/alumni/login`, user);
  }


  loggedin() {
    return !!localStorage.getItem('alumnitoken')
  }

  getToken() {
    return localStorage.getItem('alumnitoken');
  }


}
