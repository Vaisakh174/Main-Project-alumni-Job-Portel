import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-add-employer',
  templateUrl: './add-employer.component.html',
  styleUrls: ['./add-employer.component.scss']
})
export class AddEmployerComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
  }

  addbookform: any = new FormGroup({
    bookname: new FormControl("", [Validators.required, Validators.minLength(5)]),
    author: new FormControl("", [Validators.required, Validators.minLength(5)]),
    bookimgaddress: new FormControl("", [Validators.required, Validators.minLength(5)]),
    content: new FormControl("", [Validators.required, Validators.minLength(5)])
  })
  addbook() {
    this.api.post(this.addbookform.value).subscribe(res => {
      if (res) {
        alert("Data saved successfully");
        // console.log("incoming data from addbook", this.addbookform.value);
        this.router.navigate(['/books/booksList']);
      }
      // console.log(res);
    })
    // console.log("incoming data from addbook", this.addbookform.value);
  };

}
