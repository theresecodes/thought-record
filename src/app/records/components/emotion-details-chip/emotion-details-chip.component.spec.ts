import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionDetailsChipComponent } from './emotion-details-chip.component';

describe('EmotionDetailsChipComponent', () => {
  let component: EmotionDetailsChipComponent;
  let fixture: ComponentFixture<EmotionDetailsChipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmotionDetailsChipComponent]
    });
    fixture = TestBed.createComponent(EmotionDetailsChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
