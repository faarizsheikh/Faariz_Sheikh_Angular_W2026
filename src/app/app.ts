import { Component } from '@angular/core';
import { FilmList } from './film-list/film-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FilmList],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {
}
