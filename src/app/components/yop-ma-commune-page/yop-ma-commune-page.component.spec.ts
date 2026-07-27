import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { YopMaCommunePageComponent } from './yop-ma-commune-page.component';

describe('YopMaCommunePageComponent', () => {
  let component: YopMaCommunePageComponent;
  let fixture: ComponentFixture<YopMaCommunePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YopMaCommunePageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(YopMaCommunePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose eight quick-nav items matching the bento sections', () => {
    expect(component.quickNavItems.length).toBe(8);
  });

  it('should default to histoire as the active section', () => {
    expect(component.activeSection()).toBe('histoire');
  });
});
