import { TestBed } from '@angular/core/testing';

import { Canditates } from './canditates';

describe('Canditates', () => {
  let service: Canditates;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Canditates);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
