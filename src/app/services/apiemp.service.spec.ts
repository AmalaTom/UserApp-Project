import { TestBed } from '@angular/core/testing';

import { ApiempService } from './apiemp.service';

describe('ApiempService', () => {
  let service: ApiempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
