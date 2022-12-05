import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumSignupComponent } from './alum-signup.component';

describe('AlumSignupComponent', () => {
  let component: AlumSignupComponent;
  let fixture: ComponentFixture<AlumSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
