import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class State {

  private countSubject = new BehaviorSubject<number>(0);
  count$ = this.countSubject.asObservable();

  count = 0;
  countSig = signal(0);

  increment() {
    this.count++;
    this.countSig.update(value => value + 1);
    this.countSubject.next(this.countSubject.value + 1);
  }

  constructor() { }
}
