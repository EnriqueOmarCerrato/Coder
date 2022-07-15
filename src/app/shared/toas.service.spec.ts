/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToasService } from './toas.service';

describe('Service: Toas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToasService]
    });
  });

  it('should ...', inject([ToasService], (service: ToasService) => {
    expect(service).toBeTruthy();
  }));
});
