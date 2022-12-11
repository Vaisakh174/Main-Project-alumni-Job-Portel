import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-alumni',
  templateUrl: './add-alumni.component.html',
  styleUrls: ['./add-alumni.component.scss']
})
export class AddAlumniComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, public auth: AuthService) { }

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
  
  addalumni() {
    this.api.postalumni(this.addalumniform.value).subscribe(res => {
      if (res) {
        alert("Data saved successfully");
        // console.log("incoming data from addbook", this.addalumniform.value);
        this.router.navigate(['adminhome/alumni']);
      }

    })
    this.addalumniform.reset()
  };


}
