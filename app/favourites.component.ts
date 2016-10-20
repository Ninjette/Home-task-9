import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'favourites',
    template: `
		<div class="container">
			<div *ngFor="let pokemon of favouritesArray" class="col-sm-4 col-md-3">
				<div class="elem">
					<div class="elem__icon-wrap">
						<div class="elem__icon active visible"></div>
					</div>
					<div class="elem__media-wrap">
						<img class="elem__media" [src]="'img/'+pokemon.name+'.jpg'" alt="" />
					</div>
					<div class="elem__name">{{pokemon.name}}</div>
					<div class="elem__types">
						<div *ngFor="let type of pokemon.types" class={{type.type.name}}>{{type.type.name}}</div>
					</div>
				</div>
			</div>
		</div>
    `,
     styleUrls: ['./app/favourites.component.css'],
})
export class favouritesComponent {
	elemMask = 'elem_';
	favouritesArray = [];

	ngOnInit(): void {
		console.log('ngOnInit');
		//get desired pokemons from Local Storage
		let lsLength = localStorage.length;
		if (lsLength > 0) {
			for(let i = 0; i < lsLength; i++) {
				let key = localStorage.key(i);
				if(key.indexOf(this.elemMask) == 0) {
					this.favouritesArray.push(JSON.parse(localStorage.getItem(key)));
				}
			}
		};
	}
}