import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionCardComponent } from './emotion-card.component';

describe('EmotionCardComponent', () => {
  let component: EmotionCardComponent;
  let fixture: ComponentFixture<EmotionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmotionCardComponent]
    });
    fixture = TestBed.createComponent(EmotionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
