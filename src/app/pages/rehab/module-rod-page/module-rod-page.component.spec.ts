import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleRodPageComponent } from './module-rod-page.component';

describe('ModuleRodPageComponent', () => {
  let component: ModuleRodPageComponent;
  let fixture: ComponentFixture<ModuleRodPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleRodPageComponent]
    });
    fixture = TestBed.createComponent(ModuleRodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
