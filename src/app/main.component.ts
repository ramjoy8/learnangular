import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';

@Component({
  selector: 'main',
  template: `<nav-bar> </nav-bar>
  
  <router-outlet></router-outlet>
  <hr/>
  <mat-progress-bar
  *ngIf="loading" color="accent" mode="indeterminate">
  </mat-progress-bar>
  <page-end></page-end>` ,

})
export class Main {
  title = 'learnapp';
  loading = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}

