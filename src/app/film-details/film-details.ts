// film-details.component.ts:

import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmDataService } from '../Services/film-data';
import { MyData } from '../Shared/Models/my-data';

@Component({
  selector: 'app-film-details',
  standalone: true,
  imports: [NgClass],
  templateUrl: './film-details.html',
  styleUrls: ['./film-details.scss']
})

export class FilmDetails implements OnInit {
  film?: MyData;

  constructor(private route: ActivatedRoute, private filmService: FilmDataService) { }

  ngOnInit(): void {
    /*
      From lecture 5 slides:
      * this.route.snapshot: Provides access to the route's current state.
      * paramMap: A map of the parameters from the current route.
      * get('id'): Retrieves route parameter's value (id) from paramMap to get a specific film's ID from the route URL
     */
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.filmService.retrieve(Number(id)).subscribe({
        next: data => this.film = data,
        error: err => console.error(err)
      });
    }
  }

  // This'll assign the statusLabel based on current status:
  get statusLabel(): string {
    return this.Status === 'not-started'
      ? 'Not Started'
      : this.Status === 'watching'
        ? 'Watching'
        : 'Finished';
  }

  // This'll get the current status:
  get Status(): 'not-started' | 'watching' | 'finished' {
    if (!this.film || (!this.film.is_started && !this.film.is_finished)) return 'not-started';
    if (this.film.is_started && !this.film.is_finished) return 'watching';
    return 'finished';
  }
}
