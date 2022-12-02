
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent implements OnInit {

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
  }
  addAnAdmin: any = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(5)]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)]),
  })

  get f() {
    return this.addAnAdmin.controls;
  }

  signupcheck() {
    this.api.postAddAdmin(this.addAnAdmin.value).subscribe({
      next: (res) => {

        alert("Data saved successfully")
        this.router.navigate(['adminhome/managepost']);

        // console.log("incoming data from signup res ",res);  //to view response in browser

      },
      error: (err) => {
        // console.log("error from login ", err.error);     //to view error in browser
        alert(`Error...  ${err.error}`);
      }
      // ,
      // complete: () =>{
      //   console.iog('complete') // to view error in req is completed or not
      // } 
    }

    );
  }
}
