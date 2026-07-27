import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollTopComponent } from './scroll-top.component';

describe('ScrollTopComponent', () => {
  let component: ScrollTopComponent;
  let fixture: ComponentFixture<ScrollTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollTopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should become visible past 100px of scroll', () => {
    Object.defineProperty(window, 'scrollY', { value: 150, configurable: true });
    component.onWindowScroll();
    expect(component.visible()).toBeTrue();
  });
});
