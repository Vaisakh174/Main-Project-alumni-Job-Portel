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

  ngOnInit(): void {
    this.getdata();
  }

  approvalform: any = new FormGroup({
    Jobname: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Place: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Salary: new FormControl("", [Validators.required, Validators.minLength(2)]),
    JobType: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Qualifications: new FormControl("", [Validators.required, Validators.minLength(2)]),
    JobDescription: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Experience: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Benefits: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Schedule: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Language: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Contact: new FormControl("", [Validators.required, Validators.minLength(2)]),
    CompanyName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Alumni_name: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Alumni_phone: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Alumni_email: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Alumni_qualification: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Alumni_Experience: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Alumni_course: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Alumni_branch: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Alumni_Placement: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Placed_company: new FormControl("", [Validators.required, Validators.minLength(2)])

  })

  _id = this.api.approveForm;

  olddata: any = [{
    Alumni_Placement: "", Placed_company: "", Alumni_branch: "", Alumni_course: "",
    Alumni_Experience: "", Alumni_qualification: "", Alumni_email: "", Alumni_phone: "",
    Alumni_name: "", CompanyName: "", Contact: "", Language: "", Schedule: "", Benefits: "",
    Experience: "", JobDescription: "", Qualifications: "", JobType: "", Salary: "",
    Place: "", Jobname: "", JobID: ""
  }];

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
      Place: this.olddata.Place,
      Salary: this.olddata.Salary,
      JobType: this.olddata.JobType,
      Qualifications: this.olddata.Qualifications,
      JobDescription: this.olddata.JobDescription,
      Experience: this.olddata.Experience,
      Benefits: this.olddata.Benefits,
      Schedule: this.olddata.Schedule,
      Language: this.olddata.Language,
      Contact: this.olddata.Contact,
      CompanyName: this.olddata.CompanyName,
      Alumni_name: this.olddata.Alumni_name,
      Alumni_phone: this.olddata.Alumni_phone,
      Alumni_email: this.olddata.Alumni_email,
      Alumni_qualification: this.olddata.Alumni_qualification,
      Alumni_Experience: this.olddata.Alumni_Experience,
      Alumni_course: this.olddata.Alumni_course,
      Alumni_branch: this.olddata.Alumni_branch,
      Placed_company: this.olddata.Placed_company,
      Alumni_Placement: this.olddata.Alumni_Placement


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
