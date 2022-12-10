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
    // this.getdata();
  }

  _id = this.api.applyDataFromHome;
  pdf: any;
  fullData:any;

  applyform: any = new FormGroup({
    Alumni_phone: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Alumni_email: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Alumni_name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Alumni_qualification: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Alumni_Experience: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Alumni_course: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Alumni_branch: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Alumni_Placement: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Resume: new FormControl("", [Validators.required]),
    Placed_company: new FormControl("", [Validators.required, Validators.minLength(3)])
  })



  getdata() {
    
    this.api.getbyidappr(this._id).subscribe(res => {
      this.fullData = res;
      // console.log("incoming data from readbook getall", this._id);
    });

  }



  Submit() {
    const formData = new FormData();
    formData.append('file', this.pdf);
    // console.log(formData)
    this.api.uploadpost(formData).subscribe(res => {
      console.log(res)
    });


    // this.api.applypost(this.applyform.value).subscribe(res => {
    // this.blogerDatas = res;
    console.log("incoming data from update form ", this.applyform.value);
    // alert("Data Updated Successfully");
    // this.router.navigate(['adminhome/managepost/approvejob']);
    // });
  }




  select(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.pdf = file;
      // console.log(file)
    }
  }


}
