import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveAlumniReqComponent } from './approve-alumni-req.component';

describe('ApproveAlumniReqComponent', () => {
  let component: ApproveAlumniReqComponent;
  let fixture: ComponentFixture<ApproveAlumniReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveAlumniReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveAlumniReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
