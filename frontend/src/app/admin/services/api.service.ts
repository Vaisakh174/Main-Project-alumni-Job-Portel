import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  

   getallapprove() {
    return this.http.get("http://localhost:3000/api/approve/getall"); //for local
    // return this.http.get('/api/approve/getall');  //for heroku
  }

  postApprd(data: any) {
    return this.http.post("http://localhost:3000/api/approve/posted", data);//for local
    // return this.http.post('/api/approve/posted', data);  //for heroku
    
  }
  applypost(data: any) {
    return this.http.post("http://localhost:3000/api/approve/apply", data);//for local
    // return this.http.post('/api/approve/apply', data);  //for heroku
    
  } 
  uploadpost(data: any) {
    return this.http.post("http://localhost:3000/api/approve/file", data);//for local
    // return this.http.post('/api/approve/file', data);  //for heroku
    
  }

  deletesAppr(_id: any) {
    return this.http.delete(`http://localhost:3000/api/approve/delete/${_id}`);//for local
    // return this.http.delete(`/api/approve/delete/${_id}`);  //for heroku
  }
  getbyidappr(_id: any) {
    return this.http.get(`http://localhost:3000/api/approve/getsingle/${_id}`);//for local
    //  return this.http.get(`/api/approve/getsingle/${_id}`);  //for heroku
  }
  updateappr(data: any, _id: any) {
    // return this.http.put('/api/approve/update', { data, _id });  //for heroku

    return this.http.put('http://localhost:3000/api/approve/update', { data, _id }); //for local

  }








  // for login
  postAddAdmin(data: any) {
    return this.http.post("http://localhost:3000/api/login/signup", data);//for local
    // return this.http.post('/api/login/signup', data);  //for heroku
  }




  
//for home job search
  postSearch(data: any) {
    return this.http.post("http://localhost:3000/api/jobpost/postSearch", data);//for local
    // return this.http.post('/api/jobpost/postSearch', data);  //for heroku
    
  }

  





// for job posts
  getall() {

    return this.http.get("http://localhost:3000/api/jobpost/getall"); //for local
    // return this.http.get('/api/jobpost/getall');  //for heroku
  }

  getbyid(_id: any) {
    return this.http.get(`http://localhost:3000/api/jobpost/getsingle/${_id}`);//for local
    //  return this.http.get(`/api/jobpost/getsingle/${_id}`);  //for heroku
  }

  post(data: any) {
    return this.http.post("http://localhost:3000/api/jobpost/post", data);//for local
    // return this.http.post('/api/jobpost/post', data);  //for heroku
  }
  

  deletes(_id: any) {
    return this.http.delete(`http://localhost:3000/api/admin/delete/${_id}`);//for local
    // return this.http.delete(`/api/jobpost/delete/${_id}`);  //for heroku
  }


  updates(data: any, _id: any) {
    // return this.http.put('/api/jobpost/update', { data, _id });  //for heroku

    return this.http.put('http://localhost:3000/api/jobpost/update', { data, _id }); //for local

  }

  

  //for data transfer
  public mydata: any;//to pass id for reading a data insie admin
  public formupdate: any;  //to pass id for updating a form
  public approveForm: any;  //to pass id for updating a form
  public username: any;//to pass username 
  public homeReadMoredata :any;//read post main home
  public applyDataFromHome :any;//read post main home
  public applyDataFromRead :any;//read post main home


}
