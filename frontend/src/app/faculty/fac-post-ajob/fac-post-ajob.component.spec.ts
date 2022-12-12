import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacPostAjobComponent } from './fac-post-ajob.component';

describe('FacPostAjobComponent', () => {
  let component: FacPostAjobComponent;
  let fixture: ComponentFixture<FacPostAjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacPostAjobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacPostAjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
