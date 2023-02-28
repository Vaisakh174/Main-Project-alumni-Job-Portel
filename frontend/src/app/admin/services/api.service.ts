import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000";
  // url="";  //for hosting

  //for approoval of alumni response
  getallapprove() {
    return this.http.get(`${this.url}/api/approve/getall`);
  }

  postApprd(data: any) {
    return this.http.post(`${this.url}/api/approve/posted`, data);
  }

  deletesAppr(_id: any) {
    return this.http.delete(`${this.url}/api/approve/delete/${_id}`);
  }

  getbyidappr(_id: any) {
    return this.http.get(`${this.url}/api/approve/getsingle/${_id}`);
  }

  updateappr(data: any, _id: any) {
    return this.http.put(`${this.url}/api/approve/update`, { data, _id });
  }




  //approved
  getallapprd() {
    return this.http.get(`${this.url}/api/approve/getAllApproved`);
  }

 //approved
  deletesApprd(_id: any) {
    return this.http.delete(`${this.url}/api/approve/deleted/${_id}`);
  }



  // // //for job apply
  // applypost(postData: any,alumniData:any) {
  //   return this.http.post(`${this.url}/api/approve/apply`,{postData,alumniData});
  // }
  
  //for file upload
  uploadPost(Fdata: any) {
    return this.http.post(`${this.url}/api/upload`,Fdata, {
      reportProgress: true,
      observe: 'events'
    })
  }

  
  //for file download
  downloadPdf(filename:any) {
    return this.http.get(`${this.url}/api/upload/${filename}`,{responseType:'blob'});
  } 
  
  //for file delete
  deletePdf(filename:any) {
    // let filename={filename:name}
    return this.http.delete(`${this.url}/api/upload/del/${filename}`);
  }




  // for admin signup
  postAddAdmin(data: any) {
    return this.http.post(`${this.url}/api/login/signup`, data);
  }





  //for home job search
  postSearch(data: any) {
    return this.http.post(`${this.url}/api/jobpost/postSearch`, data);
  }




 //for new alumni
  postalumni(data: any) {
    return this.http.post(`${this.url}/api/alumni/new`, data);
  }



 //for new employer
  postemployer(data: any) {
    return this.http.post(`${this.url}/api/employer/employersignup`, data);
  }
  
  
  //for new faculty
  postfaculty(data: any) {
    return this.http.post(`${this.url}/api/faculty/new`, data);
  }







  // for creating new posts
  getall() {
    return this.http.get(`${this.url}/api/jobpost/getall`);
  }

  getbyid(_id: any) {
    return this.http.get(`${this.url}/api/jobpost/getsingle/${_id}`);
  }

  post(data: any) {
    return this.http.post(`${this.url}/api/jobpost/post`, data);
  }

  deletes(_id: any) {
    return this.http.delete(`${this.url}/api/jobpost/delete/${_id}`);
  }

  updates(data: any, _id: any) {
    return this.http.put(`${this.url}/api/jobpost/update`, { data, _id });

  }


  // to update ApplyStatus button
    updateapply(data: any, _id: any) {
    return this.http.put(`${this.url}/api/jobpost/updateapply`, { data, _id });

  }



  //for data transfer
  public mydata: any;//to pass id for reading a data insie admin
  public formupdate: any;  //to pass id for updating a form
  public approveForm: any;  //to pass id for updating a form
  public username: any;//to pass username 
  public homeReadMoredata: any;//read post main home
  public applyAjobID: any;//read post main home
  public readapproovalform: any;//read post main home


}
