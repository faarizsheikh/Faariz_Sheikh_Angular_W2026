// app.routes.ts:

import { Routes } from '@angular/router';
import { FilmDetails } from './Film/film-details/film-details';
import { FilmList } from './Film/film-list/film-list';
import { ModifyListItem } from './Film/modify-list-item/modify-list-item';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },

  { path: 'film', redirectTo: '/films', pathMatch: 'full' },
  { path: 'film/:id', redirectTo: '/films/:id', pathMatch: 'full' },
  { path: 'films', component: FilmList },
  { path: 'films/:id', component: FilmDetails },

  { path: 'modify-item', redirectTo: '/modify', pathMatch: 'full' },
  { path: 'modifyitem', redirectTo: '/modify', pathMatch: 'full' },
  { path: 'modify-list', redirectTo: '/modify', pathMatch: 'full' },
  { path: 'modifylist', redirectTo: '/modify', pathMatch: 'full' },
  { path: 'modify-list-item', redirectTo: '/modify', pathMatch: 'full' },
  { path: 'modifylistitem', redirectTo: '/modify', pathMatch: 'full' },
  { path: 'modify', component: ModifyListItem },
  { path: 'modify/:id', component: ModifyListItem },

  { path: '**', component: PageNotFound },
];
