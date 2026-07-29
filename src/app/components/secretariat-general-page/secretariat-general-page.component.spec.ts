import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SecretariatGeneralPageComponent } from './secretariat-general-page.component';

describe('SecretariatGeneralPageComponent', () => {
  let component: SecretariatGeneralPageComponent;
  let fixture: ComponentFixture<SecretariatGeneralPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretariatGeneralPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SecretariatGeneralPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose eight mission items', () => {
    expect(component.missionItems.length).toBe(8);
  });

  it('should expose six attached directions', () => {
    expect(component.directionItems.length).toBe(6);
  });

  it('should expose six public-reception info items', () => {
    expect(component.accueilInfoItems.length).toBe(6);
  });
});
