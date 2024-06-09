import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private pageTitleSubject = new BehaviorSubject<string>('');
  title$ = this.pageTitleSubject.asObservable();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  initialize() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route.snapshot.data['title'];
        })
      )
      .subscribe((title) => {
        if (title) {
          this.pageTitleSubject.next(`${title}`);
        }
      });
  }
}
