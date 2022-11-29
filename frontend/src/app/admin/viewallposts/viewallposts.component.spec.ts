import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallpostsComponent } from './viewallposts.component';

describe('ViewallpostsComponent', () => {
  let component: ViewallpostsComponent;
  let fixture: ComponentFixture<ViewallpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallpostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
