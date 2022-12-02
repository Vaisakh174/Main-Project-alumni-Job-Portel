import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-approval-form',
  templateUrl: './approval-form.component.html',
  styleUrls: ['./approval-form.component.scss']
})
export class ApprovalFormComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {this.getdata();
  }

  approvalform: any = new FormGroup({
    Jobname: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Qualifications: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Experience: new FormControl("", [Validators.required, Validators.minLength(3)]),
    JobID: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Resfile: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Alumni_name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Alumni_qualification: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Alumni_ID: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Alumni_Experience: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Alumni_course: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Alumni_branch: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Alumni_Placement: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Placed_company: new FormControl("", [Validators.required, Validators.minLength(3)])
  })

_id=this.api.approveForm;
  
olddata: any=[{ Jobname: "", Qualifications: "", Experience: "", JobID: "",
  Resfile: "", Alumni_name: "", Alumni_qualification: "", Alumni_ID: "" ,
  Alumni_Experience: "", Alumni_course: "", Alumni_branch: "", Alumni_Placement: "", Placed_company: "" }];

getdata() {

  this.api.getbyidappr(this._id).subscribe(res => {
    this.olddata = res;
    console.log("incoming olddata from update, get id", this._id);
    this.setoldvalue()
  });
}

setoldvalue() {
  this.approvalform.setValue({
    
    Jobname: this.olddata.Jobname,
    Qualifications: this.olddata.Qualifications,
    Experience: this.olddata.Experience,
    JobID: this.olddata.JobID,
    Resfile: this.olddata.Resfile,
    Alumni_name: this.olddata.Alumni_name,
    Alumni_qualification: this.olddata.Alumni_qualification,
    Alumni_ID: this.olddata.Alumni_ID,
    Alumni_Experience: this.olddata.Alumni_Experience,
    Alumni_course: this.olddata.Alumni_course,
    Alumni_branch: this.olddata.Alumni_branch,
    Alumni_Placement: this.olddata.Alumni_Placement,
    Placed_company: this.olddata.Placed_company

  })
}

updateaApprovalReq() {

  this.api.updateappr(this.approvalform.value, this._id).subscribe((res) => {
    // this.blogerDatas = res;
    // console.log("incoming data from update form ",this.updatebookform.value);
    alert("Data Updated Successfully");
    this.router.navigate(['adminhome/managepost/approvejob']);
  });
}

}
