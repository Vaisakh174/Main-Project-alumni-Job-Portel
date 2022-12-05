import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alum-signup',
  templateUrl: './alum-signup.component.html',
  styleUrls: ['./alum-signup.component.scss']
})
export class AlumSignupComponent implements OnInit {
  
  course=["FSD",'PSA','ML-AI','RPA','ST','CSA']

  constructor(private router:Router) { }
  
  ngOnInit(): void {
  }

  submit(){
    // this.router.navigate(["register"])
    alert("Login successfull");
  }

}
