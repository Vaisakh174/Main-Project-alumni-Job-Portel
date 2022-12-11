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

  // course=["FSD",'PSA','ML-AI','RPA','ST','CSA']

  constructor(private router: Router, private api: AlumniapiService) { }

  ngOnInit(): void {
  }

  addalumniform: any = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(2)]),
    email: new FormControl("", [Validators.required, Validators.minLength(2)]),
    mobile: new FormControl("", [Validators.required, Validators.minLength(2)]),
    course: new FormControl("", [Validators.required, Validators.minLength(2)]),
    qualification: new FormControl("", [Validators.required, Validators.minLength(2)]),
    batch: new FormControl("", [Validators.required]),
    placement: new FormControl("", [Validators.required, Validators.minLength(2)]),
    password: new FormControl("", [Validators.required, Validators.minLength(2)])
  })


  addalumni() {
    console.log(this.addalumniform.value)

    this.api.postalumni(this.addalumniform.value).subscribe(res => {
      if (res) {
        alert("Data saved successfully");
        // console.log("incoming data from addbook", this.addalumniform.value);
        this.router.navigate(['adminhome/alumni']);
      }

    })
    this.addalumniform.reset()
  };







  // submit(){
  //   // this.router.navigate(["register"])
  //   alert("Login successfull");
  // }

}
