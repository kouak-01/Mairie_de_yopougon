import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ContactReseauxPageComponent } from './contact-reseaux-page.component';

describe('ContactReseauxPageComponent', () => {
  let component: ContactReseauxPageComponent;
  let fixture: ComponentFixture<ContactReseauxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactReseauxPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactReseauxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose the 6 social network cards', () => {
    expect(component.reseauCards.length).toBe(6);
  });

  it('should expose the videotheque items', () => {
    expect(component.videoGalleryItems.length).toBe(2);
  });
});
