import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/admin/services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumniauthService } from '../alumniauth.service';

@Component({
  selector: 'app-viewjobs',
  templateUrl: './viewjobs.component.html',
  styleUrls: ['./viewjobs.component.scss']
})
export class ViewjobsComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, public auth: AlumniauthService) { }
  errmsg: any = 0;
  Back: any = 0;
  job: any = 1;
  // dateIsValid:any=1;
  // homeJobMsg:any="New jobs : "
  JobSearchMsg: any = "New jobs : "
  ngOnInit(): void {

    this.getdata();
    // setTimeout(this.checkDate, 1000);


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
    this.Back = 0;
    this.job = 1;
    this.errmsg = 0;
    this.searchForm.reset();
  }




  viewposts: any = [{
    Jobname: "", CompanyName: "", Place: "", Salary: "",
    JobType: "", Qualifications: "", JobDescription: "", Experience: "",
    Benefits: "", Schedule: "", Language: "", Contact: "", _id: ""
  }];


  getdata() {
    this.api.getall().subscribe(res => {
      this.viewposts = res;
      this.checkDate()
    });
    this.errmsg = 0;
    this.Back = 0;
    this.job = 1;

  }


  checkDate() {
    //set current date 
    var currentDate = new Date()
    // console.log("getall - ", this.viewposts)
    for (let i of this.viewposts) {

      //get date from db as string and convert into date obj and add 1day  to it

      // let FixedDate = new Date('2022-12-12');//set a old post date for demo
      let FixedDate = new Date(i.Date);
      FixedDate.setDate(FixedDate.getDate() + 7);

      // if (FixedDate.getTime() > currentDate.getTime()) {
      if (currentDate.getTime() > FixedDate.getTime()) {
        i.ApplyStatus = 0;
        // console.log('post is invalid')

      }
      else {
        i.ApplyStatus = 1;
        // console.log('post is valid')
      }
      console.log("apply ", i.ApplyStatus)
      this.api.updateapply(i.ApplyStatus, i._id).subscribe();
      // console.log("aaaa", currentDate, FixedDate)
      // console.log("ssss", typeof (currentDate), typeof (FixedDate))


    }

  }

  readMore(_id: any) {
    this.api.homeReadMoredata = _id;
    this.router.navigate(["readmore"]);
    // alert(_id);
  }


  apply(_id: any) {
    // alert("your post is now applied successfully")
    this.api.applyAjobID = _id;
    this.router.navigate(["/apply"]);
  }

  back() {
    // this.Back= !this.Back;
    // this.job= !this.job;
    // this.errmsg = 0;
    this.getdata();
    // this.router.navigate(["home"]);
  }


}
