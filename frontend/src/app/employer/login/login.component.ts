import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from'@angular/forms';
import { Router } from '@angular/router';
import { SignupapiService } from '../signupapi.service';

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
    
  
 
  constructor(private router: Router,private api:SignupapiService) { }

  ngOnInit(): void {
  }
loaderShow=false
login(){
  this.loaderShow = true
  this.api.login(this.loginform.value).subscribe({
    // console.log('res from reg. : ',res)
    next: (res) => {
      localStorage.setItem('employer_token', res.token);
      // console.log(  "res from login  ", res);   //to view token in browser
      localStorage.setItem('employer_name', res.employer_name);

      alert(res.message);
      this.loaderShow = false
      this.router.navigate(['/employerhome']);
    },
    error: (err) => {
      // console.log("error from login ", err); 
      this.loaderShow = false    //to view error in browser
      alert(`Error...  ${err.error.message}`);
      // this.loginform.reset()
    }
  })


}
  get email(): FormControl{
    return this.loginform.get("email") as FormControl;
  }
  get password(): FormControl{
   return this.loginform.get("password") as FormControl;
 }
}
