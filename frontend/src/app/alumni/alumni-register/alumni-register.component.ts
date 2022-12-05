import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumni-register',
  templateUrl: './alumni-register.component.html',
  styleUrls: ['./alumni-register.component.scss']
})
export class AlumniRegisterComponent implements OnInit {
  
  textBoxDisabled = true;

  toggle(){
    this.textBoxDisabled = !this.textBoxDisabled; //For Placement status 
  }
  alumniRegister(){
    alert("Hi There action update Soon")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
