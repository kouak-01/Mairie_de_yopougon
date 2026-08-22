import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiRecrutementPageComponent } from './emploi-recrutement-page.component';

describe('EmploiRecrutementPageComponent', () => {
  let component: EmploiRecrutementPageComponent;
  let fixture: ComponentFixture<EmploiRecrutementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploiRecrutementPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploiRecrutementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
