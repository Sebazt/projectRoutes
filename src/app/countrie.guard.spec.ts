import { TestBed } from '@angular/core/testing';

import { CountrieGuard } from './countrie.guard';

describe('CountrieGuard', () => {
  let guard: CountrieGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CountrieGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
