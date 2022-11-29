import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDFacultyComponent } from './crud-faculty.component';

describe('CRUDFacultyComponent', () => {
  let component: CRUDFacultyComponent;
  let fixture: ComponentFixture<CRUDFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDFacultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
