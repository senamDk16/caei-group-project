import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './compenents/header/header';
import { Clients } from './feature/clients/clients';

@Component({
  imports: [RouterOutlet, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');
}
