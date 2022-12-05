import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/admin/services/api.service';
import { AuthService } from 'src/app/admin/services/auth.service';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {

  constructor(public api: ApiService,public auth:AuthService) { }

  ngOnInit(): void {this. getdata();
  }

  viewposts: any = [{ Jobname: "", CompanyName: "", Place: "", Salary: "",
  JobType: "", Qualifications: "", JobDescription: "", Experience: "" ,
  Benefits: "", Schedule: "", Language: "", Contact: "" }];

  _id=this.api.homeReadMoredata;

  getdata() {
    
    this.api.getbyid(this._id).subscribe(res => {
      this.viewposts = res;
      // console.log("incoming data from readbook getall", this._id);
    });

}

apply(_id:any){
  alert("your post is now applied successfully")
    }



}