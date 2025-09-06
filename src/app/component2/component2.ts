import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { State } from '../state';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-component2',
  imports: [AsyncPipe],
  templateUrl: './component2.html',
  styleUrl: './component2.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component2 {

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

  protected getCount() {
    return this.state.count;
  }

}
