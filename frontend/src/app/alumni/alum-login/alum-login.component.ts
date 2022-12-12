import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumniapiService } from '../alumniapi.service';
import { AlumniauthService } from '../alumniauth.service';

@Component({
  selector: 'app-alum-login',
  templateUrl: './alum-login.component.html',
  styleUrls: ['./alum-login.component.scss']
})
export class AlumLoginComponent implements OnInit {


  constructor(private router: Router, private auth: AlumniauthService) { }

  ngOnInit(): void {
  }

  loginform: any = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.minLength(2)]),
    password: new FormControl("", [Validators.required, Validators.minLength(2)])
  })




  get f() {
    return this.loginform.controls;
  }



  logincheck() {
    this.auth.loginuser(this.loginform.value).subscribe({

      next: (res) => {

        localStorage.setItem('alumnitoken', res.token);
        // console.log("success from login  ", res.token,res.USER);   //to view token in browser
        alert("Login success");
        localStorage.setItem('alumniuser', res.USER);
        this.router.navigate(['/alumnihome']);

      },
      error: (err) => {

        // console.log("error from login ", err.error);     //to view error in browser
        alert(`Error...  ${err.error}`);

      }

    });
  }



}
