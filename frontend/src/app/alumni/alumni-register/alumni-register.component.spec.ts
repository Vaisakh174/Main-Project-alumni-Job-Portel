import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniRegisterComponent } from './alumni-register.component';

describe('AlumniRegisterComponent', () => {
  let component: AlumniRegisterComponent;
  let fixture: ComponentFixture<AlumniRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
