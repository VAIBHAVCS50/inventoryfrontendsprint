import { TestBed } from '@angular/core/testing';

import { GetequipmentService } from './getequipment.service';

describe('GetequipmentService', () => {
  let service: GetequipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetequipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
