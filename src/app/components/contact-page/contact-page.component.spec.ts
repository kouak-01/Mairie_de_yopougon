import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ContactPageComponent } from './contact-page.component';

describe('ContactPageComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no FAQ item open by default', () => {
    expect(component.openFaqId()).toBeNull();
  });

  it('should toggle a FAQ item open and closed', () => {
    component.toggleFaq('etat-civil');
    expect(component.openFaqId()).toBe('etat-civil');
    component.toggleFaq('etat-civil');
    expect(component.openFaqId()).toBeNull();
  });

  it('should reject an invalid contact form submission', () => {
    component.onContactSubmit();
    expect(component.formSubmitted()).toBeFalse();
    expect(component.contactForm.invalid).toBeTrue();
  });
});
