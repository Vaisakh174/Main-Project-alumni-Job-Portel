import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumniapiService } from '../alumniapi.service';
@Component({
  selector: 'app-alum-signup',
  templateUrl: './alum-signup.component.html',
  styleUrls: ['./alum-signup.component.scss']
})
export class AlumSignupComponent implements OnInit {


  constructor(private router: Router, private api: AlumniapiService) { }

  ngOnInit(): void {
  }

  addalumniform: any = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(2)]),
    email: new FormControl("", [Validators.required, Validators.minLength(2)]),
    mobile: new FormControl("", [Validators.required, Validators.minLength(2)]),
    course: new FormControl("", [Validators.required, Validators.minLength(2)]),
    qualification: new FormControl("", [Validators.required, Validators.minLength(2)]),
    batch: new FormControl("", [Validators.required, Validators.minLength(2)]),
    placement: new FormControl("", [Validators.required, Validators.minLength(2)]),
    password: new FormControl("", [Validators.required, Validators.minLength(2)])
  })



  get f() {
    return this.addalumniform.controls;
  }


  addalumni() {
    this.api.postalumni(this.addalumniform.value).subscribe({
      next: (res) => {

        alert("Data saved successfully")
        this.router.navigate(['/alumnilogin']);

        // console.log("incoming data from signup res ",res);  //to view response in browser

      },
      error: (err) => {
        // console.log("error from login ", err.error);     //to view error in browser
        alert(`Error...  ${err.error}`);
      }
    });
  }




}
