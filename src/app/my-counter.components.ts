import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';
 
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>
 
  constructor(private store: Store<{ count: number }>) {
    // TODO: This stream will connect to the current store `count` state
    this.count$ = store.select('count');
  }
 
  increment() {
    // TODO: Dispatch an increment action
  }
 
  decrement() {
    // TODO: Dispatch a decrement action
  }
 
  reset() {
    // TODO: Dispatch a reset action
  }
}