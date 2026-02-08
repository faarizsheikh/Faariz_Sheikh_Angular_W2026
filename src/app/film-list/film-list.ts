// film-list.component.ts:

import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FilmListItem } from '../film-list-item/film-list-item';
import { FilmDataService } from '../Services/film-data';
import { MyData } from '../Shared/Models/my-data';

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [FilmListItem, RouterLink],
  templateUrl: './film-list.html',
  styleUrls: ['./film-list.scss']
})

export class FilmList implements OnInit {
  films: MyData[] = [];

  constructor(private filmService: FilmDataService) { }

  ngOnInit(): void {
    this.filmService.getAll().subscribe(data => {
      this.films = data;
    });
  }
}
