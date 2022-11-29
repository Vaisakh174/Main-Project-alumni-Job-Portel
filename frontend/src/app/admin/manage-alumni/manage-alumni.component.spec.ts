import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAlumniComponent } from './manage-alumni.component';

describe('ManageAlumniComponent', () => {
  let component: ManageAlumniComponent;
  let fixture: ComponentFixture<ManageAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAlumniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
