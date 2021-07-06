import { TestBed } from '@angular/core/testing';

import { CashflowServiceService } from './cashflow-service.service';

describe('CashflowServiceService', () => {
  let service: CashflowServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashflowServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
