import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnketaPageComponent } from './anketa-page.component';

describe('AnketaPageComponent', () => {
  let component: AnketaPageComponent;
  let fixture: ComponentFixture<AnketaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnketaPageComponent]
    });
    fixture = TestBed.createComponent(AnketaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
