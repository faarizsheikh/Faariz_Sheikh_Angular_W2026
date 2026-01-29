import { Component, Input } from '@angular/core';
import { MyData } from '../models/my-data';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-film-list-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './film-list-item.html',
  styleUrls: ['./film-list-item.css'],
})

export class FilmListItem {
  @Input() film!: MyData;

  // This will get the current status:
  Status(film?: MyData): 'not-started' | 'watching' | 'finished' {
    if (!film || (!film.is_started && !film.is_finished)) return 'not-started';
    if (film.is_started && !film.is_finished) return 'watching';
    return 'finished';
  }

  // This will be used for changing the status
  toggleStatus(film?: MyData): void {
    if (!film) return;

    const status = this.Status(film);

    if (status === 'not-started') {
      film.is_started = true;
      film.is_finished = false;
    }
    else if (status === 'watching') {
      film.is_started = true;
      film.is_finished = true;
    }
    else {
      film.is_started = false;
      film.is_finished = false;
    }
  }
}
