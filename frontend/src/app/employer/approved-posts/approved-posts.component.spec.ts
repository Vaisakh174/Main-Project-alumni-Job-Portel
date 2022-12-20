import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedPostsComponent } from './approved-posts.component';

describe('ApprovedPostsComponent', () => {
  let component: ApprovedPostsComponent;
  let fixture: ComponentFixture<ApprovedPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
