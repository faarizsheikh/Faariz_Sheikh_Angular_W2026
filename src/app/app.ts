// app.component.ts:

import { Component } from '@angular/core';
import { FilmDetails } from './film-details/film-details';
import { FilmList } from './film-list/film-list';
import { FilmDataService } from './services/film-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FilmList, FilmDetails],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {
  constructor(public filmService: FilmDataService) { }
}
