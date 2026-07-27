import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AccueilPageComponent } from './accueil-page.component';

describe('AccueilPageComponent', () => {
  let component: AccueilPageComponent;
  let fixture: ComponentFixture<AccueilPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AccueilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start on the first hero slide', () => {
    expect(component.currentSlide()).toBe(0);
  });

  it('should reject an invalid contact form submission', () => {
    component.onContactSubmit();
    expect(component.formSubmitted()).toBeFalse();
    expect(component.contactForm.invalid).toBeTrue();
  });
});
