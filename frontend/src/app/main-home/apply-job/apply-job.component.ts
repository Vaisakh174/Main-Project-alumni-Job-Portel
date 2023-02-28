import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/admin/services/api.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { AlumniapiService } from 'src/app/alumni/alumniapi.service';
@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.scss']
})
export class ApplyJobComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, public auth: AlumniapiService) { }

  ngOnInit(): void {
    this.getdata();
  }

  _id = this.api.applyAjobID;
  pdf: any;
  postDetails: any;
  _loaderShow: any
  response: any;
  myEvent: any
  uploadProgress: any
  progress_Show: any

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
    this.progress_Show = false
    this._loaderShow = true;
    this.api.getbyid(this._id).subscribe(res => {
      this.postDetails = res;
      this._loaderShow = false;
    });

  }





  Submit() {
    this.progress_Show = true
    this._loaderShow = true;
    const formData = new FormData();
    formData.append('file', this.pdf);
    formData.append('postData', JSON.stringify(this.postDetails));
    formData.append('alumniData', JSON.stringify(this.applyform.value));

    // Subscribe to the uploadProgress observable
    this.api.uploadPost(formData).subscribe(event => {
      this.myEvent = event
      if (this.myEvent.type === HttpEventType.UploadProgress) {
        // Calculate the upload percentage and update the progress bar
        const percentDone = Math.round(100 * this.myEvent.loaded / this.myEvent.total);
        this.uploadProgress = percentDone;
      } else if (event instanceof HttpResponse) {
        // The upload is complete, update the progress bar to 100% and set the response
        this.uploadProgress = 100;
        this.response = event;

      }

      if (this.response) {
        // console.log(this.response)
        if (this.response.status == 200) {
          this.progress_Show = false
          this._loaderShow = false;
          alert('Upload Success');
          this.router.navigate(['/']);
        }
        else {
          this.progress_Show = false
          this._loaderShow = false;
          alert('Error While Uploading Please Try Again....');


        }
      }




    });



  }





  select(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.pdf = file;
      // console.log(file)
    }
  }


}
