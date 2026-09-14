import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ContactFaqPageComponent } from './contact-faq-page.component';

describe('ContactFaqPageComponent', () => {
  let component: ContactFaqPageComponent;
  let fixture: ComponentFixture<ContactFaqPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFaqPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFaqPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the first FAQ item of the first category by default', () => {
    expect(component.activeFaqCategoryId()).toBe(component.faqCategories[0].id);
    expect(component.openFaqIndex()).toBe(0);
  });

  it('should toggle a FAQ item open and closed', () => {
    component.toggleFaqItem(1);
    expect(component.openFaqIndex()).toBe(1);
    component.toggleFaqItem(1);
    expect(component.openFaqIndex()).toBe(-1);
  });

  it('should switch FAQ category and reset the open item', () => {
    const secondCategoryId = component.faqCategories[1].id;
    component.toggleFaqItem(2);
    component.selectFaqCategory(secondCategoryId);
    expect(component.activeFaqCategoryId()).toBe(secondCategoryId);
    expect(component.openFaqIndex()).toBe(0);
  });

  it('should filter FAQ items live as the user types', () => {
    expect(component.isSearching()).toBeFalse();
    component.onSearchInput('acte de naissance');
    expect(component.isSearching()).toBeTrue();
    expect(component.searchResults().length).toBeGreaterThan(0);
    expect(component.hasNoResults()).toBeFalse();
  });

  it('should show the no-result state when nothing matches', () => {
    component.onSearchInput('zzz-not-a-real-query-zzz');
    expect(component.hasNoResults()).toBeTrue();
    expect(component.searchResults().length).toBe(0);
  });
});
