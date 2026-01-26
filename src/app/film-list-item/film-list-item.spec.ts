import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListItem } from './film-list-item';

describe('FilmListItem', () => {
  let component: FilmListItem;
  let fixture: ComponentFixture<FilmListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
