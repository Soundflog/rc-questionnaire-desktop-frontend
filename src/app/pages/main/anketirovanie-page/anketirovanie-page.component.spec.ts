import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnketirovaniePageComponent } from './anketirovanie-page.component';

describe('ProductPageComponent', () => {
  let component: AnketirovaniePageComponent;
  let fixture: ComponentFixture<AnketirovaniePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnketirovaniePageComponent]
    });
    fixture = TestBed.createComponent(AnketirovaniePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
