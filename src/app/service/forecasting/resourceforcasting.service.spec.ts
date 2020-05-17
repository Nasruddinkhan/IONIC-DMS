import { TestBed } from '@angular/core/testing';

import { ResourceforcastingService } from './resourceforcasting.service';

describe('ResourceforcastingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResourceforcastingService = TestBed.get(ResourceforcastingService);
    expect(service).toBeTruthy();
  });
});
