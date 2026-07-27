import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the mobile nav', () => {
    expect(component.mobileNavOpen()).toBeFalse();
    component.toggleMobileNav();
    expect(component.mobileNavOpen()).toBeTrue();
  });

  it('should open a level-1 item and close it on second toggle', () => {
    const item = component.navItems[0];
    const fakeEvent = { preventDefault: () => {}, stopPropagation: () => {} } as Event;
    component.toggleL1(item, fakeEvent);
    expect(component.isL1Open(item)).toBeTrue();
    component.toggleL1(item, fakeEvent);
    expect(component.isL1Open(item)).toBeFalse();
  });
});
