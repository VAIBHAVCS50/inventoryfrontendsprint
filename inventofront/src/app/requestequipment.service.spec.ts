import { TestBed } from '@angular/core/testing';

import { RequestequipmentService } from './requestequipment.service';

describe('RequestequipmentService', () => {
  let service: RequestequipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestequipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
