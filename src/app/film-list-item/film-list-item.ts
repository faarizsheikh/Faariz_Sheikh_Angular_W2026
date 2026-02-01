// film-list-item.component.ts:

import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyData } from '../models/my-data';

@Component({
  selector: 'app-film-list-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './film-list-item.html',
  styleUrls: ['./film-list-item.scss'],
})

export class FilmListItem {
  @Input() film!: MyData;
  @Input() isEven: boolean = false;
  @Output() selectFilm = new EventEmitter<MyData>();

  onClick(): void {
    if (this.film) {
      this.selectFilm.emit(this.film);
    }
  }

  // This'll assign the statusLabel based on current status:
  get statusLabel(): string {
    return this.Status === 'not-started'
      ? 'Not Started'
      : this.Status === 'watching'
        ? 'Watching'
        : 'Finished';
  }

  // This'll get the current status:
  get Status(): 'not-started' | 'watching' | 'finished' {
    if (!this.film || (!this.film.is_started && !this.film.is_finished)) return 'not-started';
    if (this.film.is_started && !this.film.is_finished) return 'watching';
    return 'finished';
  }

  // This'll be used for changing the status:
  toggleStatus(event: Event): void {
    event.stopPropagation();

    if (this.Status === 'not-started') {
      this.film.is_started = true;
    }
    else if (this.Status === 'watching') {
      this.film.is_finished = true;
    }
    else {
      this.film.is_started = false;
      this.film.is_finished = false;
    }
  }
}
