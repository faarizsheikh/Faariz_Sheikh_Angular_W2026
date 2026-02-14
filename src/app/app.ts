// app.component.ts:

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Layout/header/header';
import { Footer } from './Layout/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Footer, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {

}
