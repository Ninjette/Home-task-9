import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'listing_',
    template: `
          <div class="container">
    		<div class="row">
    			<div *ngFor="let pokemon of pokemons" class="col-sm-4 col-md-3">
    				<div class="elem">
    					<div (click)="addToFavourites($event, pokemon)" class="elem__icon-wrap">
    						<div class="elem__icon"></div>
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
    		<div class="loader">
    			<img  class="loader__media" src="img/loader.gif"/>
    			<p class="loader__text">loading...</p>
    		</div>
    		<button (click)="loadItems()" class="js-load button btn btn-success">Load more</button>
          </div>
    `,
     styleUrls: ['./app/listing.component.css']
})
export class listingComponent {
	pokemons: string[] = [];
	limit:number = 12;
	offset:number = 0;
	elemMask:string = 'elem_';

	addLoader () {
		let loader = document.querySelectorAll('.loader');
		let btnLoadMore = document.querySelectorAll('.js-load');
		
		loader.forEach(function(item, i) {
			loader[i].classList.add("active");
		});
		
		btnLoadMore.forEach(function(item, i) {
			btnLoadMore[i].style.display = 'none';
		});
	}

	removeLoader() {
		let loader = document.querySelectorAll('.loader');
		let btnLoadMore = document.querySelectorAll('.js-load');
		
		loader.forEach(function(item, i) {
			loader[i].classList.remove("active");
		});
		
		btnLoadMore.forEach(function(item, i) {
			btnLoadMore[i].style.display = 'block';
		});
	}
	loadItems(){
		let _this = this;

		if(_this.pokemons.length <= 133){
			_this.addLoader();

			fetch('https://pokeapi.co/api/v2/pokemon/?limit=' + _this.limit + '&offset=' + _this.offset)
				.then(function (response) {
					return response.json();
				})
				.then(function (responseInfo) {
					responseInfo.results.map(function (el, index) {
						_this.pokemons.push(el);
					})
					//get types
					let counter = 0;
					for (let j = _this.offset; j < _this.offset + _this.limit; j++) {
						fetch('https://pokeapi.co/api/v2/pokemon/' + (j + 1))
							.then(function (responseInfo) {
								return responseInfo.json();
							})
							.then(function (resultInfo) {
								_this.pokemons[j].id = resultInfo.id;
								_this.pokemons[j].types = resultInfo.types;
								
								counter++;
								if (counter === _this.limit) {
									_this.offset = _this.pokemons.length;
									_this.removeLoader();
									let heartIcons = document.querySelectorAll('.elem__icon');
									
									heartIcons.forEach(function(item, i) {
										heartIcons[i].classList.add("visible");
									});
								}
							})
					};
				})
				.catch(alert);
		}
	}

	addToFavourites(event, pokemon){
		console.log('addToFavourites');
		// add pokemon to desired list if there is no such pokemon in Local Storage already
		let lsLength = localStorage.length;
		let similar = false;
		if (lsLength > 0) {
			for (var i = 0; i < lsLength; i++) {
				let key = localStorage.key(i);
				let keyId = key.slice(5);
				pokemon.id.toString();
				if (key.indexOf(this.elemMask) === 0 && pokemon.id.toString() === keyId) {
					similar = true;
				}
			};
		}

		if (!similar) {
			localStorage.setItem(this.elemMask + pokemon.id, JSON.stringify(pokemon));
			event.target.classList.add("active");
		}

	}

	ngOnInit(): void {
		this.loadItems();
	}
}