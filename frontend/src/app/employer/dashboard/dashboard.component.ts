import { Component, OnInit } from '@angular/core';
import { SignupapiService } from '../signupapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  jobs:any=[];
  constructor(private api:SignupapiService) { }

  ngOnInit(): void {
    this.getjob()
  }
  getjob(){
    this.api.getall().subscribe(res=>{
      this.jobs=res
    })
  }
}
