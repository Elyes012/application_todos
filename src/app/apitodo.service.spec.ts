import { TestBed, inject } from '@angular/core/testing';

import { ApitodoService } from './apitodo.service';

describe('ApitodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApitodoService]
    });
  });

  it('should be created', inject([ApitodoService], (service: ApitodoService) => {
    expect(service).toBeTruthy();
  }));
});
