import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-editpostform',
  templateUrl: './editpostform.component.html',
  styleUrls: ['./editpostform.component.scss']
})
export class EditpostformComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.getdata()
  }

  _id = this.api.formupdate;

  olddata: any=[{ Jobname: "", CompanyName: "", Place: "", Salary: "",
  JobType: "", Qualifications: "", JobDescription: "", Experience: "" ,
  Benefits: "", Schedule: "", Language: "", Contact: "" }];

  getdata() {

    this.api.getbyid(this._id).subscribe(res => {
      this.olddata = res;
      console.log("incoming olddata from update, get id", this._id);
      this.setoldvalue()
    });
  }

  updatepostform: any = new FormGroup({
    Jobname: new FormControl("", [Validators.required, Validators.minLength(5)]),
    CompanyName: new FormControl("", [Validators.required, Validators.minLength(5)]),
    Place: new FormControl("", [Validators.required, Validators.minLength(5)]),
    Salary: new FormControl("", [Validators.required, Validators.minLength(5)]),
    JobType: new FormControl("", [Validators.required, Validators.minLength(5)]),
    Qualifications: new FormControl("", [Validators.required, Validators.minLength(5)]),
    JobDescription: new FormControl("", [Validators.required, Validators.minLength(5)]),
    Experience: new FormControl("", [Validators.required, Validators.minLength(5)]),
    Benefits: new FormControl("", [Validators.required, Validators.minLength(5)]),
    Schedule: new FormControl("", [Validators.required, Validators.minLength(5)]),
    Language: new FormControl("", [Validators.required, Validators.minLength(5)]),
    Contact: new FormControl("", [Validators.required, Validators.minLength(5)])
  })

  setoldvalue() {
    this.updatepostform.setValue({
      
      Jobname: this.olddata.Jobname,
      CompanyName: this.olddata.CompanyName,
      Place: this.olddata.Place,
      Salary: this.olddata.Salary,
      JobType: this.olddata.JobType,
      Qualifications: this.olddata.Qualifications,
      JobDescription: this.olddata.JobDescription,
      Experience: this.olddata.Experience,
      Benefits: this.olddata.Benefits,
      Schedule: this.olddata.Schedule,
      Language: this.olddata.Language,
      Contact: this.olddata.Contact

    })
  }

  updatepost() {

    this.api.updates(this.updatepostform.value, this._id).subscribe((res) => {
      // this.blogerDatas = res;
      // console.log("incoming data from update form ",this.updatebookform.value);
      alert("Data Updated Successfully");
      this.router.navigate(['adminhome/managepost/view']);
    });
  }

}
