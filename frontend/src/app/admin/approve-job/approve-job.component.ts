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

  approveposts: any = [{
    Alumni_Placement: "", Placed_company: "", Alumni_branch: "", Alumni_course: "",
    Alumni_Experience: "", Alumni_qualification: "", Alumni_email: "", Alumni_phone: "",
    Alumni_name: "", CompanyName: "", Contact: "", Language: "", Schedule: "", Benefits: "",
    Experience: "", JobDescription: "", Qualifications: "", JobType: "", Salary: "",
    Place: "", Jobname: "", _id: ""
  }];

  getdata() {
    this.api.getallapprove().subscribe(res => {
      this.approveposts = res;
      // console.log("incoming data from booklist getall", this.approveposts);
    });
  }


  approve(_id: any, i: any) {
    this.api.postApprd(this.approveposts[i]).subscribe(res => {
      // console.log("incoming data from appr ", this.approveposts);
      // alert("Data saved successfully");
    


    this.api.deletesAppr(_id).subscribe((res) => {

    })
    this.getdata();
    alert("Data Is Now Approved")
  })
   
   
  }



  deletes(_id: any) {

    this.api.deletesAppr(_id).subscribe((res) => {
      // this.approveposts = res;
      // console.log("incoming data from updatecount ", res);
      alert("Data Deleted Successfully");
      this.getdata()
    })
  }

  edit(_id: any) {
    this.api.approveForm = _id;
    this.router.navigate(['/adminhome/managepost/editApproval']);
  }
  readmore(_id:any){
    this.api.readapproovalform=_id;
    this.router.navigate(['/adminhome/managepost/readmore2']);
  }


}
