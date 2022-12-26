import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { saveAs } from 'file-saver'
import * as PDFJS from 'pdfjs-dist';
import { PdfJsViewerComponent  } from 'ng2-pdfjs-viewer';

@Component({
  selector: 'app-approve-alumni-req',
  templateUrl: './approve-alumni-req.component.html',
  styleUrls: ['./approve-alumni-req.component.scss']
})
export class ApproveAlumniReqComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getdata();
  }

  _id: any = this.api.readapproovalform;
  _loaderShow:any;

  datas: any = {
    Alumni_Placement: "", Placed_company: "", Alumni_branch: "", Alumni_course: "",
    Alumni_Experience: "", Alumni_qualification: "", Alumni_email: "", Alumni_phone: "",
    Alumni_name: "", CompanyName: "", Contact: "", Language: "", Schedule: "", Benefits: "",
    Experience: "", JobDescription: "", Qualifications: "", JobType: "", Salary: "",
    Place: "", Jobname: "", JobID: ""
  }


  getdata() {
    this._loaderShow=true;
    this.api.getbyidappr(this._id).subscribe(res => {
      this.datas = res;
      this._loaderShow=false;
    });

  }

 
 

  downloadResume(filename: any) {
    this._loaderShow = true;
    this.api.downloadPdf(filename).subscribe({
      next: (data: Blob | MediaSource) => {
        let downloadURL =URL.createObjectURL(data);
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




    
