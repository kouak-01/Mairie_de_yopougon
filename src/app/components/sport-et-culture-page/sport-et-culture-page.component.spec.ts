import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportEtCulturePageComponent } from './sport-et-culture-page.component';

describe('SportEtCulturePageComponent', () => {
  let component: SportEtCulturePageComponent;
  let fixture: ComponentFixture<SportEtCulturePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportEtCulturePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportEtCulturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
