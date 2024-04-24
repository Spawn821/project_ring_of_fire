import { TestBed } from '@angular/core/testing';

import { RulesdataService } from './rulesdata.service';

describe('RulesdataService', () => {
  let service: RulesdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RulesdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
