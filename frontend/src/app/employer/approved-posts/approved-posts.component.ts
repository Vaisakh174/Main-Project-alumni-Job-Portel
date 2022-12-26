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
  _loaderShow:any
  getjob(){
    this.api.getallapprd().subscribe(res=>{
      this.approvedJobs=res
      console.log("ggg",res)
    })
  }


  viewPDF(filename:any){

    this._loaderShow = true;
    this.api.downloadPdf(filename).subscribe({
      next: (data: Blob | MediaSource) => {

        let downloadURL = URL.createObjectURL(data);
        // window.open(downloadURL);
        saveAs(downloadURL, filename);
        this._loaderShow = false;
      },
      error: (err) => {
        console.log("File " + err.statusText)
        this._loaderShow = false;
        alert("File " + err.statusText)
      }
    })

  }

}
