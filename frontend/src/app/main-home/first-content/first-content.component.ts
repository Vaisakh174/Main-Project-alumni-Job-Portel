import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/admin/services/api.service';
import { AuthService } from 'src/app/admin/services/auth.service';

@Component({
  selector: 'app-first-content',
  templateUrl: './first-content.component.html',
  styleUrls: ['./first-content.component.scss']
})
export class FirstContentComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.getdata();
  }

  viewposts: any = [{
    Jobname: "", CompanyName: "", Place: "", Salary: "",
    JobType: "", Qualifications: "", JobDescription: "", Experience: "",
    Benefits: "", Schedule: "", Language: "", Contact: ""
  }];

  getdata() {
    this.api.getall().subscribe(res => {
      this.viewposts = res;
      // console.log("incoming data from booklist getall", this.viewposts);
    });
  }
  readMore(_id:any){
this.api.homeReadMoredata=_id;
this.router.navigate(["readmore"]);
// alert(_id);
  }
  apply(_id:any){
alert("your post is now applied successfully")
  }



}
