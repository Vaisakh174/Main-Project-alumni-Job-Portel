import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-approve-alumni-req',
  templateUrl: './approve-alumni-req.component.html',
  styleUrls: ['./approve-alumni-req.component.scss']
})
export class ApproveAlumniReqComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getdata();
  }

_id:any=this.api.readapproovalform;


datas:any={
Alumni_Placement: "", Placed_company: "", Alumni_branch: "", Alumni_course: "",
Alumni_Experience: "", Alumni_qualification: "", Alumni_email: "", Alumni_phone: "",
Alumni_name: "", CompanyName: "", Contact: "", Language: "", Schedule: "", Benefits: "",
Experience: "", JobDescription: "", Qualifications: "", JobType: "", Salary: "",
Place: "", Jobname: "", JobID: ""
}


  getdata() {
    this.api.getbyidappr(this._id).subscribe(res => {
      this.datas = res;
    });

  }

}
