import { Component, OnInit } from '@angular/core';
import { SignupapiService } from '../signupapi.service';
import{saveAs} from 'file-saver'

@Component({
  selector: 'app-approved-posts',
  templateUrl: './approved-posts.component.html',
  styleUrls: ['./approved-posts.component.scss']
})
export class ApprovedPostsComponent implements OnInit {

  constructor(private api:SignupapiService) { }

  ngOnInit(): void {this.getjob();
  }

  approvedJobs:any

  getjob(){
    this.api.getallapprd().subscribe(res=>{
      this.approvedJobs=res
      console.log("ggg",res)
    })
  }


  viewPDF(filename:any){

    this.api.downloadPdf(filename).subscribe((data:Blob | MediaSource )=>{

      let downloadURL=window.URL.createObjectURL(data);
      saveAs(downloadURL);
    })

  }

}
