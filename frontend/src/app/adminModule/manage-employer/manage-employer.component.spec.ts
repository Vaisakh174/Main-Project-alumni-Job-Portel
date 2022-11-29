import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmployerComponent } from './manage-employer.component';

describe('ManageEmployerComponent', () => {
  let component: ManageEmployerComponent;
  let fixture: ComponentFixture<ManageEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
