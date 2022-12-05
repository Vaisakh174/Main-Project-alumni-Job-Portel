import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumLoginComponent } from './alum-login.component';

describe('AlumLoginComponent', () => {
  let component: AlumLoginComponent;
  let fixture: ComponentFixture<AlumLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
