import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismeEtLoisirsPageComponent } from './tourisme-et-loisirs-page.component';

describe('TourismeEtLoisirsPageComponent', () => {
  let component: TourismeEtLoisirsPageComponent;
  let fixture: ComponentFixture<TourismeEtLoisirsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourismeEtLoisirsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourismeEtLoisirsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
