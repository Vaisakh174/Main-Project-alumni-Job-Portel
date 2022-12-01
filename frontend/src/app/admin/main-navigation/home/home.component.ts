import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 

constructor(private router: Router, public auth: AuthService, private api: ApiService) { }
username:any
  ngOnInit(): void {
    this.username = localStorage.getItem('currentuser');
  }

  
 
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentuser');
    this.router.navigate([""]);
  }

}
