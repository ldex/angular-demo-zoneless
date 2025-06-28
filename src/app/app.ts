import { Component, inject } from '@angular/core';
import { State } from './state';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly state = inject(State);

  count = this.state.count;
  countSig = this.state.countSig;
  count$ = this.state.count$;
  countFromObservable = 0;
  countLocal = 0;

  constructor() {
    this.state.count$.subscribe(value => {
      this.countFromObservable = value;
    });
  }

  protected increment() {
    this.state.increment();
    this.countLocal++;
  }

}
