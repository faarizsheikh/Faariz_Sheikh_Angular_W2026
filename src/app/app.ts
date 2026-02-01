// app.component.ts:

import { Component } from '@angular/core';
import { FilmDetails } from './film-details/film-details';
import { FilmList } from './film-list/film-list';
import { MyData } from './models/my-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FilmList, FilmDetails, FilmDetails],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {
  singleFilm?: MyData;
}
