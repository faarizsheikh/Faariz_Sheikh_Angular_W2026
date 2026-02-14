// modify-list-item.component.ts:

import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FilmDataService } from '../../Services/film-data';
import { MyData } from '../../Shared/Models/my-data';

@Component({
  selector: 'app-modify-list-item',
  imports: [
    NgClass
  ],
  templateUrl: './modify-list-item.html',
  styleUrl: './modify-list-item.scss',
})

export class ModifyListItem implements OnInit {
  films: MyData[] = [];

  constructor(private filmService: FilmDataService) { }

  ngOnInit(): void {
    this.filmService.getAll().subscribe(data => {
      this.films = data;
    });
  }

  getStatus(film: MyData): 'not-started' | 'watching' | 'finished' {
    if (!film.is_started && !film.is_finished) return 'not-started';
    if (film.is_started && !film.is_finished) return 'watching';
    return 'finished';
  }

  getStatusLabel(film: MyData): string {
    return this.getStatus(film) === 'not-started'
      ? 'Not Started'
      : this.getStatus(film) === 'watching'
        ? 'Watching'
        : 'Finished';
  }

  toggleStatus(film: MyData): void {
    if (this.getStatus(film) === 'not-started') {
      film.is_started = true;
    } else if (this.getStatus(film) === 'watching') {
      film.is_finished = true;
    } else {
      film.is_started = false;
      film.is_finished = false;
    }

    this.filmService.update(film).subscribe();
  }
}
