import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaedmorepostComponent } from './reaedmorepost.component';

describe('ReaedmorepostComponent', () => {
  let component: ReaedmorepostComponent;
  let fixture: ComponentFixture<ReaedmorepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaedmorepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaedmorepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
