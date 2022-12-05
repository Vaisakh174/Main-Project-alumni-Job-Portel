import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupapiService } from '../signupapi.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerform = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("",[Validators.required,Validators.minLength(2)]),
    phnno: new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10)]),
    password: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    companyname: new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    designation: new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
   });

  constructor(private router:Router,private api:SignupapiService) { }

  ngOnInit(): void {
  }
  sign(){
    
    this.api.addemployer(this.registerform.value).subscribe(res=>{
      console.log(this.registerform.value)
      alert('Successfully Registered')
      this.router.navigate(['/login'])
    })
    
  }
  login(){
    this.router.navigate(['/login'])
  }
 


 
 get name(): FormControl{
   return this.registerform.get("name") as FormControl;
 }
 get email(): FormControl{
  return this.registerform.get("email") as FormControl;
}
get phnno(): FormControl{
  return this.registerform.get("phnno") as FormControl;
}
get password(): FormControl{
  return this.registerform.get("password") as FormControl;
}
get cmpnyname(): FormControl{
  return this.registerform.get("companyname") as FormControl;
}
get designation(): FormControl{
  return this.registerform.get("designation") as FormControl;
}
} 
