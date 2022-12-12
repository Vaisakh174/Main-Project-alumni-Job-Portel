import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacHomeComponent } from './fac-home.component';

describe('FacHomeComponent', () => {
  let component: FacHomeComponent;
  let fixture: ComponentFixture<FacHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
