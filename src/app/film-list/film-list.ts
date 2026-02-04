// film-list.component.ts:

import { Component, OnInit } from '@angular/core';
import { FilmListItem } from '../film-list-item/film-list-item';
import { MyData } from '../models/my-data';
import { FilmDataService } from '../services/film-data';
import {RouterLink} from '@angular/router';

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
