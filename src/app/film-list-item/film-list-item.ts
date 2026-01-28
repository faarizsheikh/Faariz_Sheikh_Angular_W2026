import { Component, Input } from '@angular/core';
import { MyData } from '../models/my-data';

@Component({
  selector: 'app-film-list-item',
  standalone: true,
  imports: [],
  templateUrl: './film-list-item.html',
  styleUrls: ['./film-list-item.css'],
})

export class FilmListItem {
  @Input() film!: MyData;
}
