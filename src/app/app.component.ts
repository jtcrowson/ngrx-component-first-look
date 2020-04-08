import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$: Observable<number>;
  isCountEven$: Observable<boolean>;

  constructor() {
    this.count$ = interval(1000);
    this.isCountEven$ = this.count$.pipe(
      map(count => count % 2 == 0 )
    );
  }
}