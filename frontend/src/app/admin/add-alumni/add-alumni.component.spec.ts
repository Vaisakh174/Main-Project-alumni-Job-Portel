import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlumniComponent } from './add-alumni.component';

describe('AddAlumniComponent', () => {
  let component: AddAlumniComponent;
  let fixture: ComponentFixture<AddAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAlumniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
