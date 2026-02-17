import { Component, signal } from '@angular/core';

@Component({
  selector: 'p-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-portfolio');
}
