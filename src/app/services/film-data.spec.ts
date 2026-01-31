import { TestBed } from '@angular/core/testing';

import { FilmData } from './film-data';

describe('FilmData', () => {
  let service: FilmData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
