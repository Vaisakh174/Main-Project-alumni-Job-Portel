import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpostformComponent } from './editpostform.component';

describe('EditpostformComponent', () => {
  let component: EditpostformComponent;
  let fixture: ComponentFixture<EditpostformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpostformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpostformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
