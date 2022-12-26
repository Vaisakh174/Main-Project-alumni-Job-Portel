import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-approve-job',
  templateUrl: './approve-job.component.html',
  styleUrls: ['./approve-job.component.scss']
})
export class ApproveJobComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.getdata();
  }
  _loaderShow:any;

  approveposts: any = [{
    Alumni_Placement: "", Placed_company: "", Alumni_branch: "", Alumni_course: "",
    Alumni_Experience: "", Alumni_qualification: "", Alumni_email: "", Alumni_phone: "",
    Alumni_name: "", CompanyName: "", Contact: "", Language: "", Schedule: "", Benefits: "",
    Experience: "", JobDescription: "", Qualifications: "", JobType: "", Salary: "",
    Place: "", Jobname: "", _id: ""
  }];

  getdata() {
    this._loaderShow=true
    this.api.getallapprove().subscribe(res => {
      this.approveposts = res;
      // console.log("incoming data from booklist getall", this.approveposts);
      this._loaderShow = false;
    });
  }


  approve(_id: any, i: any) {
    this._loaderShow=true
    this.api.postApprd(this.approveposts[i]).subscribe(res => {
      // console.log("incoming data from appr ", this.approveposts);
      // alert("Data saved successfully");
    


    this.api.deletesAppr(_id).subscribe((res) => {

    })
    this.getdata();
    alert("Data Is Now Approved")
    this._loaderShow = false;
  })
   
   
  }



  deletes(_id: any) {
    this._loaderShow=true
    this.api.deletesAppr(_id).subscribe((res) => {
      // this.approveposts = res;
      // console.log("incoming data from updatecount ", res);
      alert("Data Deleted Successfully");
      this.getdata()
      this._loaderShow = false;
    })
  }

  edit(_id: any) {
    this._loaderShow=true
    this.api.approveForm = _id;
    this.router.navigate(['/adminhome/managepost/editApproval']);
    this._loaderShow = false;
  }
  readmore(_id:any){
    this._loaderShow=true
    this.api.readapproovalform=_id;
    this.router.navigate(['/adminhome/managepost/readmore2']);
    this._loaderShow = false;
  }


}
