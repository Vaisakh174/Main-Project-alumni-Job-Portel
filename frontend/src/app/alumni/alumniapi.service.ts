import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumniapiService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000";
  // url=""

  //for new alumni
  postalumni(data: any) {
    return this.http.post<any>(`${this.url}/api/alumni/new`, data);
  }


  loginAlumni(user: any) {
    return this.http.post<any>(`${this.url}/api/alumni/login`, user);
  }


  loggedin() {
    return !!localStorage.getItem('alumni_token')
  }

  // getToken() {
  //   return localStorage.getItem('alumni_token');
  // }

  isAlumniLoggedin(){
    return !!localStorage.getItem('alumni_token')
  }
  
  getAlumniToken(){
    return localStorage.getItem('alumni_token');
  }
  

 // otp generation
 generateOtp(data: any) {
  return this.http.post<any>(`${this.url}/api/alumni/otp`,data);
}

// otp verify
verifyOtp(data: any) {
  return this.http.post<any>(`${this.url}/api/alumni/verify`,data);
}



}
