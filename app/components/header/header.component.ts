import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header',
    template: `
      <div>
      	<div class="header clearfix">
      		<div class="container">
      			<h2 class="header__title">Welcom to app</h2>
      			<div class="header__links">
      				<a class="header__link" routerLink="/listing" routerLinkActive="active">listing</a>
      				<a class="header__link" routerLink="/favourites" routerLinkActive="active">favourites</a>
      			</div>
      		</div>
      	</div>
      </div>
    `,
    styleUrls: ['./app/components/header/header.component.css'],
})
export class HeaderComponent {
}
