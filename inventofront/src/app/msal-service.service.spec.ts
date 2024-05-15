import { TestBed } from '@angular/core/testing';

import { MsalServiceService } from './msal-service.service';

describe('MsalServiceService', () => {
  let service: MsalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
