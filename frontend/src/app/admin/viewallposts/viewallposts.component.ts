import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-viewallposts',
  templateUrl: './viewallposts.component.html',
  styleUrls: ['./viewallposts.component.scss']
})
export class ViewallpostsComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {this.getdata();
  }
  viewposts: any = [{ Jobname: "", CompanyName: "", Place: "", Salary: "",
  JobType: "", Qualifications: "", JobDescription: "", Experience: "" ,
  Benefits: "", Schedule: "", Language: "", Contact: "" }];
  loaderShow:any;

  getdata() {
    this.loaderShow=true;
    this.api.getall().subscribe(res => {
      this.viewposts = res;
      // console.log("incoming data from booklist getall", this.viewposts);
      this.loaderShow=false;
    });
  }

  
  readmore(_id: any) {
    this.loaderShow=true
    this.api.mydata = _id;
    // console.log(_id)
    this.router.navigate(['adminhome/managepost/readmore']);
    this.loaderShow=false
  }

  deletes(_id: any) {
    this.loaderShow=true
    this.api.deletes(_id).subscribe((res) => {
      // this.blogerDatas = res;
      // console.log("incoming data from updatecount ", res);
      alert("Data Deleted Successfully");
      this.getdata()
      this.loaderShow=false
    })
  }

  edit(_id : any){
    this.loaderShow=true
    this.api.formupdate = _id;
    this.router.navigate(['adminhome/managepost/editpost']);
    this.loaderShow=false
  }

  

  

}
