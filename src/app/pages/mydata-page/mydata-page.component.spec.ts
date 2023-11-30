import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydataPageComponent } from './mydata-page.component';

describe('MydataPageComponent', () => {
  let component: MydataPageComponent;
  let fixture: ComponentFixture<MydataPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MydataPageComponent]
    });
    fixture = TestBed.createComponent(MydataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
