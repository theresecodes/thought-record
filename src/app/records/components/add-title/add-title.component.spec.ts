import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTitleComponent } from './add-title.component';

describe('AddTitleComponent', () => {
  let component: AddTitleComponent;
  let fixture: ComponentFixture<AddTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTitleComponent]
    });
    fixture = TestBed.createComponent(AddTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
