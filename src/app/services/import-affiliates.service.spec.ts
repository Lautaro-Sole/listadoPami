import { TestBed } from '@angular/core/testing';

import { ImportAffiliatesService } from './import-affiliates.service';

describe('ImportAffiliatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImportAffiliatesService = TestBed.get(ImportAffiliatesService);
    expect(service).toBeTruthy();
  });
});
