import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseAllPageComponent } from './exercise-all-page.component';

describe('ExerciseAllPageComponent', () => {
  let component: ExerciseAllPageComponent;
  let fixture: ComponentFixture<ExerciseAllPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseAllPageComponent]
    });
    fixture = TestBed.createComponent(ExerciseAllPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
