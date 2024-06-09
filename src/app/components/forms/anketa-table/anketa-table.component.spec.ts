import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnketaTableComponent } from './anketa-table.component';

describe('AnketaTableComponent', () => {
  let component: AnketaTableComponent;
  let fixture: ComponentFixture<AnketaTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnketaTableComponent]
    });
    fixture = TestBed.createComponent(AnketaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
