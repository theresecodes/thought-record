import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmotionsComponent } from './add-emotions.component';

describe('AddEmotionsComponent', () => {
  let component: AddEmotionsComponent;
  let fixture: ComponentFixture<AddEmotionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmotionsComponent]
    });
    fixture = TestBed.createComponent(AddEmotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
