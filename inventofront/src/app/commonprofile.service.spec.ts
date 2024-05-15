import { TestBed } from '@angular/core/testing';

import { CommonprofileService } from './commonprofile.service';

describe('CommonprofileService', () => {
  let service: CommonprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
