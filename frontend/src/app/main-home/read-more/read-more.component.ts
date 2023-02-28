import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/admin/services/api.service';
import { AlumniapiService } from 'src/app/alumni/alumniapi.service';
// import { AuthService } from 'src/app/admin/services/auth.service';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {

  constructor(public api: ApiService,public auth:AlumniapiService,private router:Router) { }

  ngOnInit(): void {this. getdata();
  }

  loaderShow: any

  viewposts: any = [{ Jobname: "", CompanyName: "", Place: "", Salary: "",
  JobType: "", Qualifications: "", JobDescription: "", Experience: "" ,
  Benefits: "", Schedule: "", Language: "", Contact: "" }];

  _id=this.api.homeReadMoredata;

  getdata() {
    this.loaderShow=true;
    this.api.getbyid(this._id).subscribe(res => {
      this.viewposts = res;
      // console.log("incoming data from readbook getall", this._id);
      this.loaderShow=false;
    });

}

apply(_id:any){
  this.api.applyAjobID=_id;
  this.router.navigate(["/apply"]);
  // alert("your post is now applied successfully")
    }



}