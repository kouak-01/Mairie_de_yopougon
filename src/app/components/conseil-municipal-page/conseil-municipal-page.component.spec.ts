import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ConseilMunicipalPageComponent } from './conseil-municipal-page.component';

describe('ConseilMunicipalPageComponent', () => {
  let component: ConseilMunicipalPageComponent;
  let fixture: ComponentFixture<ConseilMunicipalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConseilMunicipalPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ConseilMunicipalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose eight team members (Maire adjoints)', () => {
    expect(component.teamMembers.length).toBe(8);
  });

  it('should expose nine permanent commissions', () => {
    expect(component.commissionItems.length).toBe(9);
  });

  it('should expose four latest deliberations', () => {
    expect(component.deliberations.length).toBe(4);
  });
});
