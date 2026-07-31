import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AgendaPageComponent } from './agenda-page.component';

describe('AgendaPageComponent', () => {
  let component: AgendaPageComponent;
  let fixture: ComponentFixture<AgendaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AgendaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose nine events, all shown by default', () => {
    expect(component.events.length).toBe(9);
    expect(component.filteredEvents().length).toBe(9);
  });

  it('should filter events by category', () => {
    component.setFilter('education');
    expect(component.filteredEvents().every((e) => e.filterKey === 'education')).toBe(true);
    expect(component.filteredEvents().length).toBe(2);
  });

  it('should build a 36-cell calendar grid (5 empty + 31 days) with 7 event days', () => {
    expect(component.calendarDays.length).toBe(36);
    expect(component.calendarDays.filter((d) => d.hasEvent).length).toBe(7);
  });
});
