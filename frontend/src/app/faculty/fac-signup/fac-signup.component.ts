import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacApiserviceService } from '../fac-apiservice.service';

@Component({
  selector: 'app-fac-signup',
  templateUrl: './fac-signup.component.html',
  styleUrls: ['./fac-signup.component.scss']
})
export class FacSignupComponent implements OnInit {

  constructor(private router: Router, private api: FacApiserviceService) { }

  ngOnInit(): void {
  }
  addfac: any = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(5)]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)]),
  })

  get f() {
    return this.addfac.controls;
  }

  signupcheck() {
    // this.api.postAddAdmin(this.addfac.value).subscribe({
    //   next: (res) => {

    //     alert("Data saved successfully")
        this.router.navigate(['/faculty']);

        // console.log("incoming data from signup res ",res);  //to view response in browser

      // },
      // error: (err) => {
        // console.log("error from login ", err.error);     //to view error in browser
        // alert(`Error...  ${err.error}`);
      // }
   

    // );
  }


}