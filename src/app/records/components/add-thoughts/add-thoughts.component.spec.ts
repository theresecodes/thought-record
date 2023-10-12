import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThoughtsComponent } from './add-thoughts.component';

describe('AddThoughtsComponent', () => {
  let component: AddThoughtsComponent;
  let fixture: ComponentFixture<AddThoughtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddThoughtsComponent]
    });
    fixture = TestBed.createComponent(AddThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
