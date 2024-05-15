import { TestBed } from '@angular/core/testing';

import { SelfupdateService } from './selfupdate.service';

describe('SelfupdateService', () => {
  let service: SelfupdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfupdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
