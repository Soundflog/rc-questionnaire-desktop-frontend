import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisePageComponent } from './exercise-page.component';

describe('ExercisePageComponent', () => {
  let component: ExercisePageComponent;
  let fixture: ComponentFixture<ExercisePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExercisePageComponent]
    });
    fixture = TestBed.createComponent(ExercisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
