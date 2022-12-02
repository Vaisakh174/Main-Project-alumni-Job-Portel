import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifySignupComponent } from './verify-signup.component';

describe('VerifySignupComponent', () => {
  let component: VerifySignupComponent;
  let fixture: ComponentFixture<VerifySignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifySignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifySignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
