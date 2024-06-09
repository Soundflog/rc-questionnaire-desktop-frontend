import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleAnketaComponent } from './module-anketa.component';

describe('ModuleAnketaComponent', () => {
  let component: ModuleAnketaComponent;
  let fixture: ComponentFixture<ModuleAnketaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleAnketaComponent]
    });
    fixture = TestBed.createComponent(ModuleAnketaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
