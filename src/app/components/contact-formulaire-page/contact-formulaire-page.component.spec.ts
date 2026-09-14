import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ContactFormulairePageComponent } from './contact-formulaire-page.component';

describe('ContactFormulairePageComponent', () => {
  let component: ContactFormulairePageComponent;
  let fixture: ComponentFixture<ContactFormulairePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormulairePageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFormulairePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reject an invalid contact form submission', () => {
    component.onContactSubmit();
    expect(component.formSubmitted()).toBeFalse();
    expect(component.contactForm.invalid).toBeTrue();
  });

  it('should accept a valid contact form submission', () => {
    component.contactForm.setValue({
      fullName: 'Jean Kouassi',
      phone: '',
      email: 'jean.kouassi@example.com',
      service: 'État civil',
      subject: "Demande d'information",
      message: 'Bonjour, ...',
      consent: true,
    });
    component.onContactSubmit();
    expect(component.formSubmitted()).toBeTrue();
  });
});
