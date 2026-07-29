import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ActualitesPageComponent } from './actualites-page.component';

describe('ActualitesPageComponent', () => {
  let component: ActualitesPageComponent;
  let fixture: ComponentFixture<ActualitesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualitesPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ActualitesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose eight articles, all shown by default alongside the featured one', () => {
    expect(component.articles.length).toBe(8);
    expect(component.filteredArticles().length).toBe(8);
    expect(component.showFeatured()).toBe(true);
  });

  it('should filter articles and toggle the featured article by category', () => {
    component.setFilter('sante');
    expect(component.filteredArticles().every((a) => a.filterKey === 'sante')).toBe(true);
    expect(component.showFeatured()).toBe(false);

    component.setFilter('developpement');
    expect(component.showFeatured()).toBe(true);
  });

  it('should expose four videos and four agenda items', () => {
    expect(component.videos.length).toBe(4);
    expect(component.agendaItems.length).toBe(4);
  });
});
