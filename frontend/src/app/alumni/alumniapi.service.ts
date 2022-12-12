import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumniapiService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:3000";
  // url=""
//for new alumni
postalumni(data: any) {
  return this.http.post(`${this.url}/api/alumni/new`, data);
}


// loginAlumni(data: any) {
//   return this.http.post(`${this.url}/api/alumni/login`, data);
// }





}
