import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alum-signup',
  templateUrl: './alum-signup.component.html',
  styleUrls: ['./alum-signup.component.scss']
})
export class AlumSignupComponent implements OnInit {
  
  course=["FSD",'PSA','ML-AI','RPA','ST','CSA']

  constructor() { }
  
  ngOnInit(): void {
  }

}
