import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/admin/services/api.service';
import { AuthService } from 'src/app/admin/services/auth.service';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.scss']
})
export class ApplyJobComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    this.getdata();
  }

  _id = this.api.applyAjobID;
  pdf: any;
  postDetails: any;

  applyform: any = new FormGroup({
    Alumni_phone: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Alumni_email: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Alumni_name: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Alumni_qualification: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Alumni_Experience: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Alumni_course: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Alumni_branch: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Alumni_Placement: new FormControl("", [Validators.required, Validators.minLength(2)]),
    Resume: new FormControl("", [Validators.required]),
    Placed_company: new FormControl("", [Validators.required, Validators.minLength(2)])
  })



  getdata() {

    this.api.getbyid(this._id).subscribe(res => {
      this.postDetails = res;

    });

  }



  Submit() {
    const formData = new FormData();
    formData.append('file', this.pdf);
    // console.log(formData)

    this.api.uploadPost(formData).subscribe(res => {
      // console.log(res)


      this.api.applypost(this.postDetails, this.applyform.value).subscribe(res => {
        // console.log(res)
      });
    });

    alert("Data saved Successfully");
    this.router.navigate(['/']);

  }




  select(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.pdf = file;
      // console.log(file)
    }
  }


}
