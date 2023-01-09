import { TestBed } from '@angular/core/testing';

import { InvertebrateService } from './invertebrate.service';

describe('InvertebrateService', () => {
  let service: InvertebrateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvertebrateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
