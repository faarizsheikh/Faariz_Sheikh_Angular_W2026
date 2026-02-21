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
  Date = new Date().getFullYear();

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
      title: ['', [Validators.required, this.preventWhitespace]],
      type: ['', Validators.required],
      genre: ['', [Validators.required, this.preventWhitespace]],
      yearReleased: ['', [Validators.required, Validators.max(this.Date), Validators.min(1950)]],
      movie_sequence: ['', [Validators.max(10000), Validators.min(1)]],
      seasons: ['', [Validators.max(1000), Validators.min(1)]],
      total_episodes: ['', [Validators.max(10000), Validators.min(1)]],
      based_on: ['', [Validators.required]],
      creator: [''],
      streaming: ['', Validators.required],
      mpaa_rating: [''],
      tv_rating: [''],
      producer: ['', [Validators.required, this.preventWhitespace]],
      director: ['', [Validators.required, this.preventWhitespace]],
      writer: ['', [Validators.required, this.preventWhitespace]],
      starring: ['', [Validators.required, this.preventWhitespace]],
      viewer_rating: ['', [Validators.required, Validators.max(5), Validators.min(1)]],
      is_started: [false],
      is_finished: [false],
      image_url: ['', [Validators.required, this.preventWhitespace]],
      notes: ['', [this.preventWhitespace]],
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

    if (this.isEditMode) film.id = Number(this.route.snapshot.paramMap.get('id'));

    if (
      this.filmService.title_year_preventDuplicate(
        film.title,
        film.yearReleased,
        this.isEditMode ? film.id : undefined
      )
    ) {
      this.error = "A film with this title and year already exists.";
      return;
    }

    if (this.isEditMode) {
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

  preventWhitespace(control: any) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  numValidator(event: KeyboardEvent) {
    const invalidKeys = ['e', 'E', '+', '-', '_', '.'];
    if (invalidKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  titleValidator(event: KeyboardEvent) {
    const invalidKeys =
      ['\\', '/', '+', '=', '@', '#', '$', '%', '^', '&',
        '*', '|', '<', '>', '{', '}', '[', ']', '~', '`'];
    if (invalidKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  credits_genre_validator(event: KeyboardEvent) {
    const invalidKeys =
      ['\\', '/', ':', ';', '_', '+', '=', '@', '#', '$', '%', '^', '&', '*',
        '?', '!', '"', '\'', '|', '<', '>', '{', '}', '[', ']', '(', ')', '~', '`'];
    if (invalidKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  imageURL_validator(event: KeyboardEvent) {
    const invalidKeys =
      ['\\', ';', '_', '+', '=', '^', '&', '*', '!', '"',
        '\'', '|', '{', '}', '[', ']', '(', ')', '~', '`'];
    if (invalidKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  notesValidator(event: KeyboardEvent) {
    const invalidKeys =
      ['|', '<', '>', '{', '}', '[', ']', '`'];
    if (invalidKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  navBackToFilmList() {
    this.router.navigate(['/films']);
  }
}
