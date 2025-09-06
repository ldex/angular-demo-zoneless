import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpResult } from './http-result';

@Injectable({
  providedIn: 'root'
})
export class State {

  private readonly http = inject(HttpClient);

  count: number = 0;
  countSig: WritableSignal<number> = signal(0);

  private countSubject = new BehaviorSubject<number>(0);
  count$: Observable<number> = this.countSubject.asObservable();

  time: string = '';
  timeSig: WritableSignal<string> = signal('');
  private timeSubject = new BehaviorSubject<string>('');
  time$: Observable<string> = this.timeSubject.asObservable();

  increment() {
    this.count++;
    this.countSig.update(value => value + 1);
    this.countSubject.next(this.countSubject.value + 1);
  }

  asyncRequest() {
    return this.http.get<HttpResult>('http://worldtimeapi.org/api/ip')
    .subscribe({
      next: (data) => {
        this.time = data.datetime;
        this.timeSig.set(data.datetime);
        this.timeSubject.next(data.datetime);
        console.log(data);
      },
      error: (error) => { console.error(error); }
    });
  }

  constructor() { }
}
