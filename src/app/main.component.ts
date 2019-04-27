import { Component } from '@angular/core';

@Component({
  selector: 'main',
  template: `<nav-bar> </nav-bar>
  <router-outlet></router-outlet>
  <hr/>
  <page-end></page-end>` ,

})
export class Main {
  title = 'learnapp';
}
