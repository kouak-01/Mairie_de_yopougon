import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HistoirePageComponent } from './histoire-page.component';

describe('HistoirePageComponent', () => {
  let component: HistoirePageComponent;
  let fixture: ComponentFixture<HistoirePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoirePageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoirePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose nine timeline milestones and six mayors', () => {
    expect(component.timelineItems.length).toBe(9);
    expect(component.mayors.length).toBe(6);
  });
});
