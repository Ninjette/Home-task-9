import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { httpService } from '../../services/http-service';

@Component({
    selector: 'listing_',
    providers: [httpService],
    template: `
          <div class="container">
    		<div class="row">
    			<div *ngFor="let pokemon of pokemons" class="col-sm-4 col-md-3">
    				<div class="elem">
    					<div class="elem__icon-wrap">
    						<div *ngIf="pokemon.like" (click)="addToFavourites($event, pokemon)" class="elem__icon"></div>
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
    		<div *ngIf="loading" class="loader">
    			<img  class="loader__media" src="img/loader.gif"/>
    			<p class="loader__text">loading...</p>
    		</div>
    		<button *ngIf="!loading" (click)="loadItems()" class="js-load button btn btn-success">Load more</button>
    		<div *ngIf="error" class="error-message">This pokemon is already in desired list</div>
          </div>
    `,
     styleUrls: ['./app/components/listing/listing.component.css']
})
export class listingComponent {
	error:boolean = false;
	loading: boolean = false;
	pokemons: any[] = [];
	limit:number = 12;
	offset:number = 0;
	elemMask:string = 'elem_';

	constructor (private _httpService: httpService){}

	addToFavourites(event: any, pokemon: any){
		console.log('addToFavourites');
		let _this = this;
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
		};

		if (!similar) {
			localStorage.setItem(this.elemMask + pokemon.id, JSON.stringify(pokemon));
			event.target.classList.add("active");
		} else{
			_this.error = true;
			setTimeout(function(){
				_this.error = false;
			},4000)
		}

	}

	loadItems() {
		let _this = this;
		if(_this.pokemons.length <= 133){
			_this.loading = true;//ux features
			this._httpService.getPokemons(this.limit, this.offset)
				.subscribe(
					data => data.results.map(function (el:string) {
						_this.pokemons.push(el);
					}),
					error => alert(error),
						() => _this.loadTypes()
				);
		}
	}

	loadTypes(){
		let _this = this;
		let counter = 0;
		for (let j = _this.offset; j < _this.offset + _this.limit; j++) {
			this._httpService.getPokemonsTypes(j + 1)
				.subscribe(
					data => {
						_this.pokemons[j].id = data.id;
						_this.pokemons[j].types = data.types;
						_this.pokemons[j].like = true;
						
						counter++;
						if (counter === _this.limit) {
							_this.offset = _this.pokemons.length;
							_this.loading = false;
						}
					},
					error => alert(error)
				);
		};
	}
	ngOnInit(): void {
		this.loadItems();
	}
}
// like works incorrect