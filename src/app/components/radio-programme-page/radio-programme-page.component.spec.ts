import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RadioProgrammePageComponent } from './radio-programme-page.component';

describe('RadioProgrammePageComponent', () => {
  let component: RadioProgrammePageComponent;
  let fixture: ComponentFixture<RadioProgrammePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioProgrammePageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioProgrammePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose the 20 weekly schedule rows', () => {
    expect(component.scheduleRows.length).toBe(20);
  });
});
