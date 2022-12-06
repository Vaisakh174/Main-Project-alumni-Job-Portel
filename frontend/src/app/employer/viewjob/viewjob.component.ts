import { Component, OnInit } from '@angular/core';
import { SignupapiService } from '../signupapi.service';

@Component({
  selector: 'app-viewjob',
  templateUrl: './viewjob.component.html',
  styleUrls: ['./viewjob.component.scss']
})
export class ViewjobComponent implements OnInit {
  jobs:any=[];
  data:any;
  constructor(private api:SignupapiService) { }

  ngOnInit(): void {
    this.getjob()
  }
  
  getjob(){
    this.api.getjob().subscribe(res=>{
      this.jobs=res
    })
  }
}
