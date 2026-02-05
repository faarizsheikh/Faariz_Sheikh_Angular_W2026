// film-list-item.component.ts:

import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MyData } from '../models/my-data';

@Component({
  selector: 'app-film-list-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './film-list-item.html',
  styleUrls: ['./film-list-item.scss'],
})

export class FilmListItem {
  @Input() film?: MyData;
  @Input() isEven: boolean = false;
}
