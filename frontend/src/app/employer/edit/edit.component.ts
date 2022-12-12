import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupapiService } from '../signupapi.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id: any;
  data: any = {};
  constructor(private api: SignupapiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.api.getbyid(this.id).subscribe((res: any) => {
      this.data = res
      console.log(this.data)
    })
  }
  update() {
    this.api.updates(this.data, this.id).subscribe((res: any) => {
      console.log(this.data)

      this.data = res
      console.log(res)
      alert('data updated')
      this.ngOnInit()
    })
  }
}
