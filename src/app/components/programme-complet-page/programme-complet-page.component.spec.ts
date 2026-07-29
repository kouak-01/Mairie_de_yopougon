import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProgrammeCompletPageComponent } from './programme-complet-page.component';

describe('ProgrammeCompletPageComponent', () => {
  let component: ProgrammeCompletPageComponent;
  let fixture: ComponentFixture<ProgrammeCompletPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammeCompletPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgrammeCompletPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose nine events matching the nine table-of-contents entries', () => {
    expect(component.events.length).toBe(9);
    expect(component.tocItems.length).toBe(9);
    expect(component.events.map((e) => e.id)).toEqual(component.tocItems.map((t) => t.anchor));
  });

  it('should group the festival schedule into three day-titled groups', () => {
    const festival = component.events.find((e) => e.id === 'festival')!;
    expect(festival.scheduleGroups.length).toBe(3);
    expect(festival.scheduleGroups.every((g) => !!g.dayTitle)).toBe(true);
  });
});
