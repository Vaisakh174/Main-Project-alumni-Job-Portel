import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupapiService } from '../signupapi.service';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.scss']
})
export class PostjobComponent implements OnInit {
  jobpostform:any = new FormGroup({
    jobrole: new FormControl("",[Validators.required]),
    companyname: new FormControl("",[Validators.required]),
    education: new FormControl("",[Validators.required]),
    experience: new FormControl("",[Validators.required]),
    skills:new FormControl("",[Validators.required]),
    location:new FormControl("",[Validators.required]),
    salary:new FormControl("",[Validators.required]),
    jobdescription:new FormControl("",[Validators.required]),
  })
  constructor(private api:SignupapiService) { }

  ngOnInit(): void {
  }


  
postjob(){
    this.api.addjob(this.jobpostform.value).subscribe(res=>{
      console.log(this.jobpostform.value)
      alert("Job Posted")
    })
}
}
