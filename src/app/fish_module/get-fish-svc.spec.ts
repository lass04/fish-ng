import { TestBed } from '@angular/core/testing';

import { GetFishSvc } from './get-fish-svc';

describe('GetFishSvc', () => {
  let service: GetFishSvc;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFishSvc);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
