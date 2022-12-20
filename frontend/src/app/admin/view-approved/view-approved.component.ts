import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-approved',
  templateUrl: './view-approved.component.html',
  styleUrls: ['./view-approved.component.scss']
})
export class ViewApprovedComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {this.getjob();
  }

  approvedJobs:any

  getjob(){
    this.api.getallapprd().subscribe(res=>{
      this.approvedJobs=res
      console.log("ggg",res)
    })
  }


}
