import { TestBed } from '@angular/core/testing';

import { ServiceChallengeService } from './service-challenge.service';

describe('ServiceChallengeService', () => {
  let service: ServiceChallengeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceChallengeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
