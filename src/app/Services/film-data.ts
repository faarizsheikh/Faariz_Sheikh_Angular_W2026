// film-data.service.ts:

import { Injectable } from '@angular/core';
import { MOCK_CONTENT } from '../Shared/mock-content';
import { MyData } from '../Shared/Models/my-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class FilmDataService {
  private films = MOCK_CONTENT;

  // RETURN: An Observable that emits mock film data
  getAll(): Observable<MyData[]> {
    return of(this.films);
  }

  // CREATE: A new game
  create(newFilm: MyData): Observable<MyData[]> {
    this.films.push(newFilm);
    return of(this.films);
  }

  // RETRIEVE: A game by ID
  retrieve(filmId: number): Observable<MyData | undefined> {
    const film = this.films.find(film => film.id === filmId);
    return of(film);
  }

  // UPDATE: An existing game
  update(updatedFilm: MyData): Observable<MyData[]> {
    const index =
      this.films.findIndex(film => film.id === updatedFilm.id);
    if (index !== -1) {
      this.films[index] = updatedFilm;
    }
    return of(this.films);
  }

  // DELETE: A game
  delete(filmId: number): Observable<MyData[]> {
    this.films = this.films.filter(film => film.id !== filmId);
    return of(this.films);
  }
}
