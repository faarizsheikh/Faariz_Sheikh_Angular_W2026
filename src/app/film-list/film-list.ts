import { Component, OnInit } from '@angular/core';
import { MyData } from '../models/my-data';
import { FilmListItem } from '../film-list-item/film-list-item';
import { FilmDataService } from '../services/film-data';

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [FilmListItem],
  templateUrl: './film-list.html',
  styleUrls: ['./film-list.scss'],
})

export class FilmList implements OnInit {
  films : MyData[] = [];

  constructor(private filmService: FilmDataService) {}

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
