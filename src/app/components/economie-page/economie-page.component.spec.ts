import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomiePageComponent } from './economie-page.component';

describe('EconomiePageComponent', () => {
  let component: EconomiePageComponent;
  let fixture: ComponentFixture<EconomiePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EconomiePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomiePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
