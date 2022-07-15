/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PacageService } from './pacage.service';

describe('Service: Pacage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PacageService]
    });
  });

  it('should ...', inject([PacageService], (service: PacageService) => {
    expect(service).toBeTruthy();
  }));
});
