import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnketaAllPageComponent } from './anketa-all-page.component';

describe('AnketaAllPageComponent', () => {
  let component: AnketaAllPageComponent;
  let fixture: ComponentFixture<AnketaAllPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnketaAllPageComponent]
    });
    fixture = TestBed.createComponent(AnketaAllPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
