import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GouvernanceParticipativePageComponent } from './gouvernance-participative-page.component';

describe('GouvernanceParticipativePageComponent', () => {
  let component: GouvernanceParticipativePageComponent;
  let fixture: ComponentFixture<GouvernanceParticipativePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GouvernanceParticipativePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GouvernanceParticipativePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
