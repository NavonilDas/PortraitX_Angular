import { TestBed } from '@angular/core/testing';

import { DbuserService } from './dbuser.service';

describe('DbuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbuserService = TestBed.get(DbuserService);
    expect(service).toBeTruthy();
  });
});
