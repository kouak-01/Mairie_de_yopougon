import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RadioVacancesPageComponent } from './radio-vacances-page.component';

describe('RadioVacancesPageComponent', () => {
  let component: RadioVacancesPageComponent;
  let fixture: ComponentFixture<RadioVacancesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioVacancesPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioVacancesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require the inscription form fields before allowing submit', () => {
    expect(component.inscriptionForm.invalid).toBeTrue();
    component.onInscriptionSubmit();
    expect(component.inscriptionSubmitted()).toBeFalse();
  });

  it('should accept the inscription once required fields are filled', () => {
    component.inscriptionForm.setValue({
      childName: 'Aya Koffi',
      childAge: 9,
      parentName: 'Mariam Koffi',
      parentPhone: '+225 07 00 00 00 00',
      activite: 'Sport & Loisirs',
      message: '',
    });
    component.onInscriptionSubmit();
    expect(component.inscriptionSubmitted()).toBeTrue();
  });
});
