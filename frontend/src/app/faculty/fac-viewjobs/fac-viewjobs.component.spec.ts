import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacViewjobsComponent } from './fac-viewjobs.component';

describe('FacViewjobsComponent', () => {
  let component: FacViewjobsComponent;
  let fixture: ComponentFixture<FacViewjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacViewjobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacViewjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
