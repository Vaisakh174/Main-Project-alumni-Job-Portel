import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstContentComponent } from './first-content.component';

describe('FirstContentComponent', () => {
  let component: FirstContentComponent;
  let fixture: ComponentFixture<FirstContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
