import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveJobComponent } from './approve-job.component';

describe('ApproveJobComponent', () => {
  let component: ApproveJobComponent;
  let fixture: ComponentFixture<ApproveJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
