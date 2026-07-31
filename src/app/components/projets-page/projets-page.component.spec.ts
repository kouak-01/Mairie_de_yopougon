import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProjetsPageComponent } from './projets-page.component';

describe('ProjetsPageComponent', () => {
  let component: ProjetsPageComponent;
  let fixture: ComponentFixture<ProjetsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetsPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose nine projects, all shown by default', () => {
    expect(component.projects.length).toBe(9);
    expect(component.filteredProjects().length).toBe(9);
  });

  it('should filter projects by category', () => {
    component.setFilter('environnement');
    expect(component.filteredProjects().every((p) => p.filterKey === 'environnement')).toBe(true);
    expect(component.filteredProjects().length).toBe(2);
  });

  it('should reset to all projects when filter is "all"', () => {
    component.setFilter('sante');
    component.setFilter('all');
    expect(component.filteredProjects().length).toBe(9);
  });
});
