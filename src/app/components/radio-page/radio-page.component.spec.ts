import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RadioPageComponent } from './radio-page.component';

describe('RadioPageComponent', () => {
  let component: RadioPageComponent;
  let fixture: ComponentFixture<RadioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to monday as the active schedule day', () => {
    expect(component.activeDay()).toBe('lundi');
  });

  it('should switch the active schedule day', () => {
    component.setActiveDay('samedi');
    expect(component.activeDay()).toBe('samedi');
    expect(component.scheduleByDay['samedi'].length).toBe(4);
  });

  it('should show the mini player and start playing on hero play', () => {
    component.onHeroPlay();
    expect(component.isPlaying()).toBeTrue();
    expect(component.miniPlayerVisible()).toBeTrue();
  });
});
