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
    Jobname: new FormControl("",[Validators.required]),
    CompanyName: new FormControl("",[Validators.required]),
    Place: new FormControl("",[Validators.required]),
    Salary: new FormControl("",[Validators.required]),
    JobType:new FormControl("",[Validators.required]),
    Qualifications:new FormControl("",[Validators.required]),
    JobDescription:new FormControl("",[Validators.required]),
    Experience:new FormControl("",[Validators.required]),
    Benefits:new FormControl("",[Validators.required]),
    Schedule:new FormControl("",[Validators.required]),
    Language:new FormControl("",[Validators.required]),
    Contact:new FormControl("",[Validators.required]),
    Date:new FormControl("",[Validators.required]),
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
