// modify-list-item.ts:

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyData } from '../../Shared/Models/my-data';
import FilmDataService from '../../Services/film-data';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modify-list-item.html',
  styleUrl: './modify-list-item.scss',
})

export class ModifyListItem implements OnInit {
  filmForm!: FormGroup;
  isEditMode: boolean = false;
  error: string | null = null;

  filmTypes = ["TV Show", "Movie"];

  streamingOptions = [
    "Amazon Prime Video", "Apple TV", "CraveTV",
    "Fandango at Home", "Google Play (Movies & TV)", "Max (formerly HBO Max)",
    "Netflix", "Plex", "YouTube"
  ];
  ogSources = [
    "None", "Another TV Show/Movie", "Comic(s)", "Article(s)", "Mythos",
    "Novel(s)", "Original Script(s)", "Stage Play(s)", "True Event(s)", "Video Game(s)"
  ];
  movieRatings = ["G", "PG", "14A", "18A", "R", "A"];
  tvRatings = ["C", "C8+", "G", "PG", "14+", "18+"];

  constructor(
    private filmService: FilmDataService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.filmForm = this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      genre: ['', Validators.required],
      yearReleased: ['', Validators.required],
      movie_sequence: [''],
      seasons: [''],
      total_episodes: [''],
      based_on: ['', Validators.required],
      creator: [''],
      streaming: ['', Validators.required],
      mpaa_rating: [''],
      tv_rating: [''],
      producer: ['', Validators.required],
      director: ['', Validators.required],
      writer: ['', Validators.required],
      starring: ['', Validators.required],
      viewer_rating: ['', Validators.required],
      is_started: [false],
      is_finished: [false],
      image_url: ['', Validators.required],
      notes: [''],
    });
  }

  ngOnInit() {
    /*
      From lecture 5 slides:
      - this.route.snapshot: Provides access to the route's current state.
      - paramMap: A map of the parameters from the current route.
      - get('id'): Retrieves the 'id' value from the route URL.
      - Converts the id into number.
    */
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.isEditMode = true;

      this.filmService.getFilmById(id).subscribe({
        next: film => {
          if (film) this.filmForm.patchValue(film);
        },
        error: err => {
          this.error = "Error Fetching Films"
          console.error("Error Fetching: ", err)
        }
      });
    }
  }

  onSubmit(): void {
    if (this.filmForm.invalid) return;

    const film: MyData = this.filmForm.getRawValue();

    if (this.isEditMode) {
      film.id = Number(this.route.snapshot.paramMap.get('id'));
      this.filmService.update(film).subscribe(() => {
        this.router.navigate(['/films']);
      });
    } else {
      film.id = this.filmService.generateNewId();
      this.filmService.create(film).subscribe(() => {
        this.router.navigate(['/films']);
      });
    }
  }

  get selectedType() {
    return this.filmForm.get('type')?.value;
  }

  get selectedBasedOn() {
    return this.filmForm.get('based_on')?.value;
  }

  navBackToFilmList() {
    this.router.navigate(['/films']);
  }
}
