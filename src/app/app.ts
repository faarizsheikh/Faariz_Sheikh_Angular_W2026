import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  name : String = "Faariz"
  favouriteFilm: string = 'IT';
  yearRelease: number = 2017;
}
