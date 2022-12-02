import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})
export class AddpostComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
  }

  addpostform: any = new FormGroup({
    Jobname: new FormControl("", [Validators.required, Validators.minLength(3)]),
    CompanyName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Place: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Salary: new FormControl("", [Validators.required, Validators.minLength(3)]),
    JobType: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Qualifications: new FormControl("", [Validators.required, Validators.minLength(3)]),
    JobDescription: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Experience: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Benefits: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Schedule: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Language: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Contact: new FormControl("", [Validators.required, Validators.minLength(3)])
  })
  addpost() {
    this.api.post(this.addpostform.value).subscribe(res => {
      if (res) {
        alert("Data saved successfully");
        console.log("incoming data from addbook", this.addpostform.value);
        this.router.navigate(['adminhome/managepost/view']);
      }
      // console.log(res);
    })
    // console.log("incoming data from addbook", this.addbookform.value);
  };


}
