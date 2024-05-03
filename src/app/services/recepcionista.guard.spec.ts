import { TestBed } from '@angular/core/testing';

import { RecepcionistaGuard } from './recepcionista.guard';

describe('RecepcionistaGuard', () => {
  let guard: RecepcionistaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RecepcionistaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
