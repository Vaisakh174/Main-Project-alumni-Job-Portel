import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/admin/services/api.service';
import { AuthService } from 'src/app/admin/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-content',
  templateUrl: './first-content.component.html',
  styleUrls: ['./first-content.component.scss']
})
export class FirstContentComponent implements OnInit {
  
  constructor(private api: ApiService, private router: Router, public auth: AuthService) { }
  errmsg: any = 0;
  Back: any = 0;
  job: any = 1;
  // homeJobMsg:any="New jobs : "
  JobSearchMsg:any="New jobs : "
  ngOnInit(): void {
    // if(this.errmsg){

    // }
    // else{
    this.getdata();
    // }
  
  }

  searchForm: any = new FormGroup({
    textData: new FormControl("", [Validators.required, Validators.minLength(1)])

  })

  data: any
  message: any;

  searchData() {
    this.api.postSearch(this.searchForm.value).subscribe(res => {
      this.data = res;
      if (this.data.length !== 0) {
        this.viewposts = res;
        // this.JobSearchMsg=`Your Search Result For ${this.searchForm.value.textData}`;
        this.errmsg = 0;
        this.Back = 1;
        // console.log("incoming data from signup res ", this.searchForm.value.textData);  //to view response in browser
      }
      else {
        this.job = 0;
        this.viewposts = res;
        this.errmsg = 1;
        this.message = "Ohh That Job Is Not Found";  
        // alert("ohh... No Data Found")
        this.Back = 1;
      }

    })
    this.Back= 0;
    this.job= 1;
    this.errmsg = 0;
    this.searchForm.reset();
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
    this.errmsg = 0;
    this.Back = 0;
    this.job = 1;
  }


  readMore(_id: any) {
    this.api.homeReadMoredata = _id;
    this.router.navigate(["readmore"]);
    // alert(_id);
  }


  apply(_id: any) {
    // alert("your post is now applied successfully")
    this.api.applyAjobID=_id;
    this.router.navigate(["/apply"]);
  }

  back(){
    // this.Back= !this.Back;
    // this.job= !this.job;
    // this.errmsg = 0;
    this.getdata();
    // this.router.navigate(["home"]);
  }


}
