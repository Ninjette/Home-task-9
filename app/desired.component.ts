import { Component } from '@angular/core';

@Component({
    selector: 'header',
    template: `
      <div>
      	<div className="header clearfix">
      		<div className="container">
      			<h2 className="header__title">Welcom to pokemon-app</h2>
      			<div className="header__links">
      				<a className="header__link" href="/#/common">listing</a>
      				<a className="header__link" href="/#/desired">favourites</a>
      			</div>
      		</div>
      	</div>
      </div>
    `
})
export class HeaderComponent { }
