import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reaedmorepost',
  templateUrl: './reaedmorepost.component.html',
  styleUrls: ['./reaedmorepost.component.scss']
})
export class ReaedmorepostComponent implements OnInit {

  constructor(public api: ApiService,public auth:AuthService) { }

  ngOnInit(): void {this. getdata();
  }

  viewposts: any = [{ Jobname: "", CompanyName: "", Place: "", Salary: "",
  JobType: "", Qualifications: "", JobDescription: "", Experience: "" ,
  Benefits: "", Schedule: "", Language: "", Contact: "" }];

  _id=this.api.mydata;
  _loaderShow:any;

  getdata() {
    this._loaderShow=true;
    this.api.getbyid(this._id).subscribe(res => {
      this.viewposts = res;
      // console.log("incoming data from readbook getall", this._id);
      this._loaderShow=false;
    });
  }



}
