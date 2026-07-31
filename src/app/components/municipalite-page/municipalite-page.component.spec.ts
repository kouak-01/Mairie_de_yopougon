import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MunicipalitePageComponent } from './municipalite-page.component';

describe('MunicipalitePageComponent', () => {
  let component: MunicipalitePageComponent;
  let fixture: ComponentFixture<MunicipalitePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MunicipalitePageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MunicipalitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose eight adjoints matching the source page', () => {
    expect(component.adjointItems.length).toBe(8);
  });

  it('should expose six municipal commissions', () => {
    expect(component.commissionItems.length).toBe(6);
  });

  it('should expose four council number stats', () => {
    expect(component.numberStats.length).toBe(4);
  });
});
