import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class httpService {
	constructor (private http: Http) {}
	getPokemons(limit:number, offset:number): Observable <any>{
		return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=' + limit + '&offset=' + offset)
			.map(res => res.json())
	}
	getPokemonsTypes(iterator:number): Observable <any>{
		return this.http.get('https://pokeapi.co/api/v2/pokemon/'+ iterator)
			.map(res => res.json())
	}
}
//