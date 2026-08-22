import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographiePageComponent } from './geographie-page.component';

describe('GeographiePageComponent', () => {
  let component: GeographiePageComponent;
  let fixture: ComponentFixture<GeographiePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeographiePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeographiePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
