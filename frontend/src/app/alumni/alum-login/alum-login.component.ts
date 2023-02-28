import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumniapiService } from '../alumniapi.service';

@Component({
  selector: 'app-alum-login',
  templateUrl: './alum-login.component.html',
  styleUrls: ['./alum-login.component.scss']
})
export class AlumLoginComponent implements OnInit {


  constructor(private router: Router, private api: AlumniapiService) { }

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
    this.api.loginAlumni(this.loginform.value).subscribe({

      next: (res) => {

        localStorage.setItem('alumni_token', res.alumni_token);
        localStorage.setItem('alumni_name', res.alumni_name);
        // console.log("success from login  ", res.token,res.USER);   //to view token in browser
        alert(res.message);
        this.router.navigate(['/alumnihome']);

      },
      error: (err) => {

        // console.log("error from login ", err.error);     //to view error in browser
        alert(`Error...  ${err.error.message}`);

      }

    });
  }



}
