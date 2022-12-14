import { Component, OnInit } from '@angular/core';
import { SignupapiService } from '../signupapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewjob',
  templateUrl: './viewjob.component.html',
  styleUrls: ['./viewjob.component.scss']
})
export class ViewjobComponent implements OnInit {
  jobs:any=[];
  data:any;
  constructor(private router:Router,private api:SignupapiService) { }

  ngOnInit(): void {
    this.getjob()
      
  
  }
  edit(id:any){
    this.router.navigate([`/employerhome/edit/${id}`])
  }
  
  getjob(){
    this.api.getall().subscribe(res=>{
      this.jobs=res
    })
  }
}
