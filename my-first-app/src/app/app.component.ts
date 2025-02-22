import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  template: `
    <h1>{{ title }}</h1>
    <app-counter></app-counter>
  `
})
export class AppComponent {
  title = 'Изучаем Angular';
}
