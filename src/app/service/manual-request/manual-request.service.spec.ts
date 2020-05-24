import { TestBed } from '@angular/core/testing';

import { ManualRequestService } from './manual-request.service';

describe('ManualRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManualRequestService = TestBed.get(ManualRequestService);
    expect(service).toBeTruthy();
  });
});
