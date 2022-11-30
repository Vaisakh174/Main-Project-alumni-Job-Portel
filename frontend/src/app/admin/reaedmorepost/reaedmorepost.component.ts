import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-reaedmorepost',
  templateUrl: './reaedmorepost.component.html',
  styleUrls: ['./reaedmorepost.component.scss']
})
export class ReaedmorepostComponent implements OnInit {

  constructor(public api: ApiService) { }

  ngOnInit(): void {this. getdata();
  }

  viewposts: any = [{ Jobname: "", CompanyName: "", Place: "", Salary: "",
  JobType: "", Qualifications: "", JobDescription: "", Experience: "" ,
  Benefits: "", Schedule: "", Language: "", Contact: "" }];

  _id=this.api.mydata;

  getdata() {
    
    this.api.getbyid(this._id).subscribe(res => {
      this.viewposts = res;
      // console.log("incoming data from readbook getall", this._id);
    });
  }


}
