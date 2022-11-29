import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDalumniComponent } from './crudalumni.component';

describe('CRUDalumniComponent', () => {
  let component: CRUDalumniComponent;
  let fixture: ComponentFixture<CRUDalumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDalumniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDalumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
