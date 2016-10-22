import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
      <header></header>
      <router-outlet></router-outlet>
    `
})
export class AppComponent {

}