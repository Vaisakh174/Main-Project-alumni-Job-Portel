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
    Jobname: "", jobID: "", Resfile: "", Alumni_name: "",
    Alumni_qualification: "", Qualifications: "", Alumni_ID: "", Experience: "",
    Alumni_Experience: "", Alumni_course: "", Alumni_branch: "",Alumni_Placement: "", Placed_company: ""
  }];

  getdata() {
    this.api.getallapprove().subscribe(res => {
      this.approveposts = res;
      // console.log("incoming data from booklist getall", this.approveposts);
    });
  }


  approve(_id: any) {
    this.api.postApprd(this.approveposts.value).subscribe(res => {

      // alert("Data saved successfully");

      alert("Data Is Now Approved")
      this.api.deletesAppr(_id).subscribe((res) => {
        this.getdata()
      })

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



}
