import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MairePageComponent } from './maire-page.component';

describe('MairePageComponent', () => {
  let component: MairePageComponent;
  let fixture: ComponentFixture<MairePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MairePageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MairePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose six parcours items', () => {
    expect(component.parcoursItems.length).toBe(6);
  });

  it('should reject an invalid contact form submission', () => {
    component.onContactSubmit();
    expect(component.formSubmitted()).toBeFalse();
    expect(component.contactForm.invalid).toBeTrue();
  });
});
