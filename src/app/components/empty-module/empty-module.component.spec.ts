import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyModuleComponent } from './empty-module.component';

describe('EmptyModuleComponent', () => {
  let component: EmptyModuleComponent;
  let fixture: ComponentFixture<EmptyModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyModuleComponent]
    });
    fixture = TestBed.createComponent(EmptyModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
