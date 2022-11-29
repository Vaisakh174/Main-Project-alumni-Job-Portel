import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEmployerComponent } from './crud-employer.component';

describe('CrudEmployerComponent', () => {
  let component: CrudEmployerComponent;
  let fixture: ComponentFixture<CrudEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
