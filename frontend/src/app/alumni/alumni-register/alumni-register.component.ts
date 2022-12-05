import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumni-register',
  templateUrl: './alumni-register.component.html',
  styleUrls: ['./alumni-register.component.scss']
})
export class AlumniRegisterComponent implements OnInit {
  textBoxDisabled = true;

  toggle(){
    this.textBoxDisabled = !this.textBoxDisabled;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
