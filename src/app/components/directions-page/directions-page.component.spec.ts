import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DirectionsPageComponent } from './directions-page.component';

describe('DirectionsPageComponent', () => {
  let component: DirectionsPageComponent;
  let fixture: ComponentFixture<DirectionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectionsPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose six administrative directions', () => {
    expect(component.administrativeDirections.length).toBe(6);
  });

  it('should expose six technical directions', () => {
    expect(component.technicalDirections.length).toBe(6);
  });
});
