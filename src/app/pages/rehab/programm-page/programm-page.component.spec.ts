import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammPageComponent } from './programm-page.component';

describe('ProgrammPageComponent', () => {
  let component: ProgrammPageComponent;
  let fixture: ComponentFixture<ProgrammPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammPageComponent]
    });
    fixture = TestBed.createComponent(ProgrammPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
