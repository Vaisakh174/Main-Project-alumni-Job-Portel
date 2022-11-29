import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAjobComponent } from './post-ajob.component';

describe('PostAjobComponent', () => {
  let component: PostAjobComponent;
  let fixture: ComponentFixture<PostAjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAjobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
