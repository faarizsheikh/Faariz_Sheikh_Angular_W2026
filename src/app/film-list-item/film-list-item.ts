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
  @Input() film?: MyData;
  @Input() isEven: boolean = false;
  @Output() selectFilm = new EventEmitter<MyData>();

  onClick(): void {
    if (this.film) {
      this.selectFilm.emit(this.film);
    }
  }
}
