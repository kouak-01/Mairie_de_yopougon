import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PageEnConstructionComponent } from './page-en-construction.component';

describe('PageEnConstructionComponent', () => {
  let component: PageEnConstructionComponent;
  let fixture: ComponentFixture<PageEnConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageEnConstructionComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PageEnConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reject an invalid email on notify submit', () => {
    component.emailControl.setValue('invalide');
    component.onNotifySubmit();
    expect(component.notifySent()).toBeFalse();
  });
});
