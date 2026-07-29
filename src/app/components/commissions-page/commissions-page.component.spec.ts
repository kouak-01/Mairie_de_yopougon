import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CommissionsPageComponent } from './commissions-page.component';

describe('CommissionsPageComponent', () => {
  let component: CommissionsPageComponent;
  let fixture: ComponentFixture<CommissionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommissionsPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CommissionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose six commission summaries', () => {
    expect(component.commissionSummaries.length).toBe(6);
  });

  it('should expose four process steps', () => {
    expect(component.processSteps.length).toBe(4);
  });

  it('should expose nine detailed commissions', () => {
    expect(component.commissionDetails.length).toBe(9);
  });
});
