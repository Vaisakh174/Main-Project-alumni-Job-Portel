import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniHomeComponent } from './alumni-home.component';

describe('AlumniHomeComponent', () => {
  let component: AlumniHomeComponent;
  let fixture: ComponentFixture<AlumniHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
