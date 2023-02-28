import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupapiService {

  apiUrl: any = 'http://localhost:3000/api'
  //  apiUrl="/api"


  constructor(private http: HttpClient) { }

  addemployer(data: any) {
    return this.http.post<any>(`${this.apiUrl}/employer/employersignup`, data)
  }

  login(data: any) {
    return this.http.post<any>(`${this.apiUrl}/employer/emplogin`, data)
  }

  // otp generation
  generateOtp(data: any) {
    return this.http.post<any>(`${this.apiUrl}/employer/otp`, data);
  }

  // otp verify
  verifyOtp(data: any) {
    return this.http.post<any>(`${this.apiUrl}/employer/verify`, data);
  }

  //for auth guard
  isEmployerLoggedin() {
    return !!localStorage.getItem('employer_token')
  }

  //for token interceptor
  getEmployerToken() {
    return localStorage.getItem('employer_token');
  }

  // addjob(data:any){
  //   return this.http.post(`${this.apiUrl}/employer/jobpost`,data)
  // }

  // getjob(){
  //   return this.http.get(`${this.apiUrl}/employer/joblist`)
  // }
  // getsingledata(id:any){
  //   return this.http.get(`${this.apiUrl}/employer/getOneJob/${id}`)
  // }
  // updatejob(data:any,id:any){
  //   return this.http.put(`${this.apiUrl}/employer/editJob`,{data,id})
  // }




  //approved
  getallapprd() {
    return this.http.get(`${this.apiUrl}/approve/getAllApproved`);
  }


  //for file download
  downloadPdf(filename: any) {
    return this.http.get(`${this.apiUrl}/upload/${filename}`, { responseType: 'blob' });
  }



  //for job posts

  getall() {
    return this.http.get(`${this.apiUrl}/jobpost/getall`);
  }


  addjob(data: any) {
    return this.http.post(`${this.apiUrl}/jobpost/post`, data);
  }


  updates(data: any, _id: any) {
    return this.http.put(`${this.apiUrl}/jobpost/update`, { data, _id });

  }

  getbyid(_id: any) {
    return this.http.get(`${this.apiUrl}/jobpost/getsingle/${_id}`);
  }

}
