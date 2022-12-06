import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupapiService {
 apiUrl:any='http://localhost:3000/api'
  constructor(private http:HttpClient) { }

  addemployer(data:any){
    return this.http.post(`${this.apiUrl}/employer/employersignup`,data)
  }
  
  addjob(data:any){
    return this.http.post(`${this.apiUrl}/employer/jobpost`,data)
  }

  getjob(){
    return this.http.get(`${this.apiUrl}/employer/joblist`)
  }
}
