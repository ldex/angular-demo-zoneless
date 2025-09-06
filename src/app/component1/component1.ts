import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { State } from './../state';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-component1',
  imports: [AsyncPipe],
  templateUrl: './component1.html',
  styleUrl: './component1.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component1 {

  countLocal = 0;
  countFromObservable = 0;

  readonly state = inject(State);

  countSig = this.state.countSig;
  count$ = this.state.count$;
  timeFromObservable = '';
  timeFromAsyncRequest$ = this.state.time$;

  constructor() {
    this.state.count$.subscribe(value => {
      this.countFromObservable = value;
    });

    this.timeFromAsyncRequest$.subscribe(value => {
      this.timeFromObservable = value;
    });
  }

  protected increment() {
    this.state.increment();
    this.countLocal++;
  }

  protected asyncRequest() {
    this.state.asyncRequest();
  }

  protected getCount() {
    return this.state.count;
  }

}
