import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProgramFormPageComponent} from './program-form-page.component';

describe('ProgramFormPageComponent', () => {
  let component: ProgramFormPageComponent;
  let fixture: ComponentFixture<ProgramFormPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramFormPageComponent]
    });
    fixture = TestBed.createComponent(ProgramFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
