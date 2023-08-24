import { TestBed } from '@angular/core/testing';

import { ThoughtRecordThoughtRecordUiMapperService } from './thought-record-thought-record-ui-mapper.service';

describe('ThoughtRecordThoughtRecordUiMapperService', () => {
  let service: ThoughtRecordThoughtRecordUiMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThoughtRecordThoughtRecordUiMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
