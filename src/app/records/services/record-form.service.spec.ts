import { TestBed } from '@angular/core/testing';

import { RecordFormService } from './record-form.service';

describe('RecordFormService', () => {
  let service: RecordFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
