import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getall() {

    return this.http.get("http://localhost:3000/api/admin/getall"); //for local
    // return this.http.get('/api/admin/getall');  //for heroku
  }


  getbyid(_id: any) {
    return this.http.get(`http://localhost:3000/api/admin/getsingle/${_id}`);//for local
    //  return this.http.get(`/api/admin/getsingle/${_id}`);  //for heroku
  }

  posts(data: any) {
    return this.http.post("http://localhost:3000/api/admin/post", data);//for local
    // return this.http.post('/api/admin/post', data);  //for heroku
  }

  //for submission of email and pass to db
  postu(data: any) {
    return this.http.post("http://localhost:3000/api/admin/signup", data); //for local
    // return this.http.post('/api/admin/signup', data);  //for heroku
  }


  deletes(_id: any) {
    return this.http.delete(`http://localhost:3000/api/admin/delete/${_id}`);//for local
    // return this.http.delete(`/api/admin/delete/${_id}`);  //for heroku
  }


  updates(data: any, _id: any) {
    // return this.http.put('/api/admin/update', { data, _id });  //for heroku

    return this.http.put('http://localhost:3000/api/admin/update', { data, _id }); //for local

  }

  
  public mydata: any;//to pass id for reading a abook
  public formupdate: any;  //to pass id for updating a abook

  public username: any;//to pass username 



}
