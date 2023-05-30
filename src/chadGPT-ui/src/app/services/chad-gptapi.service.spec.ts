import { TestBed } from '@angular/core/testing';

import { ChadGPTapiService } from './chad-gptapi.service';

describe('ChadGPTapiService', () => {
  let service: ChadGPTapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChadGPTapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
