import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/admin/services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumniapiService } from 'src/app/alumni/alumniapi.service';



@Component({
  selector: 'app-first-content',
  templateUrl: './first-content.component.html',
  styleUrls: ['./first-content.component.scss']
})
export class FirstContentComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, public auth: AlumniapiService) { }

  errmsg: any = 0;
  Back: any = 0;
  job: any = 1;
  JobSearchMsg: any = "New jobs : "


  ngOnInit(): void {
    this.getdata();
  }

  _loaderShow: any
  searchForm: any = new FormGroup({
    textData: new FormControl("", [Validators.required, Validators.minLength(1)])

  })

  data: any
  message: any;

  searchData() {
    this._loaderShow = true;

    this.api.postSearch(this.searchForm.value).subscribe(res => {
      this.data = res;
      if (this.data.length !== 0) {
        this.viewposts = res;
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
      this._loaderShow = false;
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
    this._loaderShow = true;
    this.api.getall().subscribe(res => {
      this.viewposts = res;
      this.checkDate()
      this._loaderShow = false;
    });
    this.errmsg = 0;
    this.Back = 0;
    this.job = 1;

  }

  currentDate: any;


  checkDate() {
    //set current date 
    this.currentDate = new Date()

    // console.log('Current time ', this.currentDate)



    for (let i of this.viewposts) {

      //get date from db as string and convert into date obj and add 1day  to it

      const formattedDateString = i.Date.replace('IST', '');
      // let FixedDate = new Date('Dec 20, 2022, 9:39:49 PM  ');//set a old post date for demo
      const FixedDate = new Date(formattedDateString);
      FixedDate.setDate(FixedDate.getDate() + 7);
      // console.log('Each post last date ', FixedDate)

      if (this.currentDate.getTime() > FixedDate.getTime()) {
        i.ApplyStatus = 0;
        // console.log('post is invalid')

      }
      else {
        i.ApplyStatus = 1;
        // console.log('post is valid')

        // console.log(`${i.Jobname} last date: `, FixedDate)
      }
      // console.log("apply?: ", i.ApplyStatus)
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

    this.getdata();

  }


}
