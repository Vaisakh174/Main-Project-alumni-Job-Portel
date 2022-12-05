import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from'@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginform = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email,Validators.minLength(2)]),
    password: new FormControl("",[Validators.required,Validators.minLength(6)]),
  });
    
  
 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

login(){
  this.router.navigate(['/employerhome'])
}

  get email(): FormControl{
    return this.loginform.get("email") as FormControl;
  }
  get password(): FormControl{
   return this.loginform.get("password") as FormControl;
 }
}
