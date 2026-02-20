// film-data.service.ts:

import { Injectable } from '@angular/core';
import { MOCK_CONTENT } from '../Shared/mock-content';
import { MyData } from '../Shared/Models/my-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

class FilmDataService {
  private films: MyData[] = MOCK_CONTENT;

  // RETURN: An Observable that emits mock film data
  getAll(): Observable<MyData[]> {
    console.log(this.films);
    return of(this.films);
  }

  getFilmById(filmId: number): Observable<MyData | undefined> {
    const film = this.films.find(film => film.id === filmId);
    return of(film);
  }

  // CREATE: A new game
  create(newFilm: MyData): Observable<MyData[]> {
    this.films.push(newFilm);
    console.log("List after add modification:");
    return of(this.films);
  }

  // RETRIEVE: A game by ID
  retrieve(filmId: number): Observable<MyData | undefined> {
    const film = this.films.find(film => film.id === filmId);
    console.log("Selected film:", film);
    return of(film);
  }

  // UPDATE: An existing game
  update(updatedFilm: MyData): Observable<MyData[]> {
    const index =
      this.films.findIndex(film => film.id === updatedFilm.id);
    if (index !== -1) {
      this.films[index] = updatedFilm;
    }
    console.log("List after update modification:");
    return of(this.films);
  }

  // DELETE: A game
  delete(filmId: number): Observable<MyData[]> {
    console.log("Deleting film with ID:", filmId);
    this.films = this.films.filter(film => film.id !== filmId);

    console.log("List after delete modification:");
    console.log(this.films.length === 0 ? "[ EMPTY ]" : this.films);

    return of(this.films);
  }

  generateNewId(): number {
    console.log("Generating new id. Now there are, ", this.films.length + 1);
    return this.films.length > 0 ? Math.max(...this.films.map(film => film.id)) + 1 : 1;
  }
}

export default FilmDataService
