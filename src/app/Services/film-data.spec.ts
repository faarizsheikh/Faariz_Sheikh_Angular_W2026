// film-data.spec.ts:

import { TestBed } from '@angular/core/testing';
import { FilmDataService } from './film-data';

describe('FilmData', () => {
  let service: FilmDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
