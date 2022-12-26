import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { saveAs } from 'file-saver'


@Component({
  selector: 'app-view-approved',
  templateUrl: './view-approved.component.html',
  styleUrls: ['./view-approved.component.scss']
})
export class ViewApprovedComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getjob();
  }

  approvedJobs: any
  _loaderShow: any;

  getjob() {
    this._loaderShow = true;
    this.api.getallapprd().subscribe(res => {
      this.approvedJobs = res
      console.log("ggg", res)
      this._loaderShow = false;
    })
  }


  download(filename: any) {
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



  deleted(_id: any) {
    this._loaderShow = true;
    this.api.deletesApprd(_id).subscribe();
    this.getjob();
    this._loaderShow = false;
  }


}
