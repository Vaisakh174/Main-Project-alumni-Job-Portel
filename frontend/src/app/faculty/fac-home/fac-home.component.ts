import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fac-home',
  templateUrl: './fac-home.component.html',
  styleUrls: ['./fac-home.component.scss']
})
export class FacHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  logout() {
    localStorage.removeItem('factoken');
    localStorage.removeItem('facuser');
    this.router.navigate(["/"]);

  }





}
