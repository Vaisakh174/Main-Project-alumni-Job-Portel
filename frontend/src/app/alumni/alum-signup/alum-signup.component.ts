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
  
  loaderShow = false
  showTimer = false
  countdown = 120;
  time: any
  textForGenerateOtp = 'Generate OTP'


  
  addalumniform: any = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(2)]),
    email: new FormControl("", [Validators.required, Validators.minLength(2)]),
    mobile: new FormControl("", [Validators.required, Validators.minLength(2)]),
    course: new FormControl("", [Validators.required, Validators.minLength(2)]),
    qualification: new FormControl("", [Validators.required, Validators.minLength(2)]),
    batch: new FormControl("", [Validators.required, Validators.minLength(2)]),
    placement: new FormControl("", [Validators.required, Validators.minLength(2)]),
    password: new FormControl("", [Validators.required, Validators.minLength(2)]),
    otp: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(6)])

  })



  timer() {
    this.showTimer = true
    this.time = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(this.time);
        // handle timer expiry
        this.showTimer = false
        alert('Your OTP Is Expired')
      }
    }, 1000);
  }

  get f() {
    return this.addalumniform.controls;
  }


  addalumni() {
    this.api.postalumni(this.addalumniform.value).subscribe({
      next: (res) => {

        alert(res.message)
        this.router.navigate(['/alumni']);

        // console.log("incoming data from signup res ",res);  //to view response in browser

      },
      error: (err) => {
        // console.log("error from login ", err.error);     //to view error in browser
        alert(`Error...  ${err.error.message}`);
      }
    });
  }




  generateOtp() {
    this.loaderShow = true

    if (this.addalumniform.controls.email.status == 'INVALID') {
      this.loaderShow = false
      alert('Email Is Invalid')
      // console.log(this.addalumniform.controls.email.status)
    }
    else {
      this.api.generateOtp({ email: this.addalumniform.value.email }).subscribe({

        // console.log('res from reg. : ',res)
        next: (res) => {
          // console.log("success from reg  ", res);   //to view token in browser
          this.textForGenerateOtp = "Regenerate OTP"
          this.loaderShow = false
          alert(res.message);
          this.timer()
        },
        error: (err) => {
          // console.log("error from reg ", err);     //to view error in browser
          this.loaderShow = false
          alert(`Error...  ${err.error.message}`);
          this.addalumniform.reset()
        }
      })
    }
  }



  verifyOtp() {
    this.loaderShow = true
    if (this.addalumniform.controls.email.status == 'INVALID') {
      this.loaderShow = false
      alert('Email Is Invalid')
      // console.log(this.addalumniform.controls.email.status)
    } else if (this.addalumniform.controls.otp.status == 'INVALID') {
      this.loaderShow = false
      alert('OTP Is Invalid')
      // console.log(this.addalumniform.controls.otp.status)
    }

    else {
      this.api.verifyOtp({ otp: this.addalumniform.value.otp, email: this.addalumniform.value.email }).subscribe({

        // console.log('res from reg. : ',res)
        next: (res) => {
          // console.log("success from reg  ", res);   //to view token in browser
          this.loaderShow = false
          alert(res.message);
          clearInterval(this.time);
          this.showTimer = false
        },
        error: (err) => {
          // console.log("error from reg ", err);     //to view error in browser
          this.loaderShow = false
          alert(`Error...  ${err.error.message}`);
          // this.addalumniform.reset()
        }
      })
    }


  }

}
