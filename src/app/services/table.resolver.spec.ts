import { TestBed } from '@angular/core/testing';

import { TableResolver } from './table.resolver';

describe('TableResolver', () => {
  let resolver: TableResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TableResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
