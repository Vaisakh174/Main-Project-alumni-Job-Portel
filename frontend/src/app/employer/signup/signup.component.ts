import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    cmpnyname: new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    designation: new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
   });

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  sign(){
    this.router.navigate(['/login'])
  }
  login(){
    this.router.navigate(['/login'])
  }
 

//  registerSubmited(){
//   console.log(this.registerform.get("name"));
//  }
 
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
  return this.registerform.get("cmpnyname") as FormControl;
}
get designation(): FormControl{
  return this.registerform.get("designation") as FormControl;
}
} 
