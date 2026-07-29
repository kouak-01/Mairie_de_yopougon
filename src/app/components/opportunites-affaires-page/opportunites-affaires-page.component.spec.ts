import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { OpportunitesAffairesPageComponent } from './opportunites-affaires-page.component';

describe('OpportunitesAffairesPageComponent', () => {
  let component: OpportunitesAffairesPageComponent;
  let fixture: ComponentFixture<OpportunitesAffairesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpportunitesAffairesPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(OpportunitesAffairesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose eight atouts and six secteurs porteurs', () => {
    expect(component.atouts.length).toBe(8);
    expect(component.secteurs.length).toBe(6);
  });
});
