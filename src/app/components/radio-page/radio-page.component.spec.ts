import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RadioPageComponent } from './radio-page.component';

describe('RadioPageComponent', () => {
  let component: RadioPageComponent;
  let fixture: ComponentFixture<RadioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cycle through the hero slides', () => {
    expect(component.currentSlide()).toBe(0);
  });

  it('should require the contact form fields before allowing submit', () => {
    expect(component.contactForm.invalid).toBeTrue();
    component.onContactSubmit();
    expect(component.formSubmitted()).toBeFalse();
  });
});
