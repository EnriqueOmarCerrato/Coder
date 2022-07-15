import { TestBed } from '@angular/core/testing';

import { PacageService } from './pacage.service';

describe('PacageService', () => {
  let service: PacageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
