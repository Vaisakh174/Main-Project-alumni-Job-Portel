import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginuser(user: any) {
    return this.http.post<any>("http://localhost:3000/api/admin/login", user); //for local
    // return this.http.post<any>("/api/admin/login", user);   //for heroku
  }


loggedin(){
  return !!localStorage.getItem('token')
}

getToken(){
  return  localStorage.getItem('token');
}

}
