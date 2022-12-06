import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/admin/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
   
   
    // if (this.auth.loggedin()) {
    //   this.router.navigate(['adminhome']);
    // }

  }


  gotohome(){
 this.router.navigate(['home']);
      
  }






}


