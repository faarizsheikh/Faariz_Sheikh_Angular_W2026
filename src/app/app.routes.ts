// app.routes.ts:

import { Routes } from '@angular/router';
import { FilmDetails } from './film-details/film-details';
import { FilmList } from './film-list/film-list';

export const routes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'films', component: FilmList },
  { path: 'films/:id', component: FilmDetails },
];
