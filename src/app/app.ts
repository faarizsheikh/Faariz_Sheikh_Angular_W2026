// app.component.ts:

import { Component, /* OnInit */ } from '@angular/core';
import { FilmDetails } from './film-details/film-details';
import { FilmList } from './film-list/film-list';
import { MyData } from './models/my-data';
/* import { FilmDataService } from './services/film-data'; */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FilmList, FilmDetails, FilmDetails],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App /* implements OnInit */ {
  singleFilm?: MyData;

  /*
    constructor(private filmService: FilmDataService) {
    }
  
    ngOnInit(): void {
      this.filmService.retrieve(5).subscribe({
        next: data => this.singleFilm = data!,
        error: err => console.error("Error loading selected film.", err),
        complete: () => console.log("Selected film loaded!")
      });
    }
    */
}
