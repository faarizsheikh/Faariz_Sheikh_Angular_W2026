// film-list.component.ts:

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilmListItem } from '../film-list-item/film-list-item';
import { MyData } from '../models/my-data';
import { FilmDataService } from '../services/film-data';

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [FilmListItem],
  templateUrl: './film-list.html',
  styleUrls: ['./film-list.scss'],
})

export class FilmList implements OnInit {
  films: MyData[] = [];
  @Output() selectFilm = new EventEmitter<MyData>();

  constructor(private filmService: FilmDataService) { }

  ngOnInit(): void {
    this.filmService.getAll().subscribe({
      next: (data: MyData[]) => this.films = data,
      error: err => console.error("Error while fetching films.", err),
      complete: () => console.log("Fetch complete!")
    });
  }

  onFilmSelected(film: MyData) {
    if (film) {
      this.selectFilm.emit(film); // propagate to AppComponent
    }
  }
}
