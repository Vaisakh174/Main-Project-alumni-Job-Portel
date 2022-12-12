import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumni-home',
  templateUrl: './alumni-home.component.html',
  styleUrls: ['./alumni-home.component.scss']
})
export class AlumniHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('alumnitoken');
    localStorage.removeItem('alumniuser');
    this.router.navigate(["/"]);

  }

}
