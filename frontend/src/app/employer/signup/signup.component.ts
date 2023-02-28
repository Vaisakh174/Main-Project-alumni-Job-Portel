import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupapiService } from '../signupapi.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerform = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("", [Validators.required, Validators.pattern('^([A-Za-z0-9\-.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$')]),
    phnno: new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    companyname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),
    designation: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),
    otp: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
  });

  constructor(private router: Router, private api: SignupapiService) { }

  ngOnInit(): void {
  }

  loaderShow = false
  showTimer = false
  countdown = 120;
  time: any

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


  sign() {
    this.loaderShow = true
    this.api.addemployer(this.registerform.value).subscribe({

      // console.log('res from reg. : ',res)
      next: (res) => {
        // console.log("success from reg  ", res);   //to view token in browser
        this.loaderShow = false
        alert(res.message);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        // console.log("error from reg ", err);     //to view error in browser
        this.loaderShow = false
        alert(`Error...  ${err.error.message}`);
        this.registerform.reset()
      }
    })



  }

  textForGenerateOtp = 'Generate OTP'
  generateOtp() {
    this.loaderShow = true

    if (this.registerform.controls.email.status == 'INVALID') {
      this.loaderShow = false
      alert('Email Is Invalid')
      // console.log(this.registerform.controls.email.status)
    }
    else {
      this.api.generateOtp({ email: this.registerform.value.email }).subscribe({

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
          this.registerform.reset()
        }
      })
    }
  }



  verifyOtp() {
    this.loaderShow = true
    if (this.registerform.controls.email.status == 'INVALID') {
      this.loaderShow = false
      alert('Email Is Invalid')
      // console.log(this.registerform.controls.email.status)
    } else if (this.registerform.controls.otp.status == 'INVALID') {
      this.loaderShow = false
      alert('OTP Is Invalid')
      // console.log(this.registerform.controls.otp.status)
    }

    else {
      this.api.verifyOtp({ otp: this.registerform.value.otp, email: this.registerform.value.email }).subscribe({

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
          // this.registerform.reset()
        }
      })
    }

  }









  get name(): FormControl {
    return this.registerform.get("name") as FormControl;
  }
  get email(): FormControl {
    return this.registerform.get("email") as FormControl;
  }
  get phnno(): FormControl {
    return this.registerform.get("phnno") as FormControl;
  }
  get password(): FormControl {
    return this.registerform.get("password") as FormControl;
  }
  get cmpnyname(): FormControl {
    return this.registerform.get("companyname") as FormControl;
  }
  get designation(): FormControl {
    return this.registerform.get("designation") as FormControl;
  } 
   get otp(): FormControl {
    return this.registerform.get("otp") as FormControl;
  }
}

// Validators.pattern('([A-Za-z0-9\-.]+]@(A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$')]