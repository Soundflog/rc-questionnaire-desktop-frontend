import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnketaModuleComponent } from './card-anketa-module.component';

describe('CardAnketaModuleComponent', () => {
  let component: CardAnketaModuleComponent;
  let fixture: ComponentFixture<CardAnketaModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAnketaModuleComponent]
    });
    fixture = TestBed.createComponent(CardAnketaModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
