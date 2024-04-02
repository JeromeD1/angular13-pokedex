import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemon.model';
import { POKEMONS } from '../../assets/pokemons-mock';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokemonList$: BehaviorSubject<Pokemon[]> = new BehaviorSubject(POKEMONS)

  constructor() { }

  getPokemons():Observable<Pokemon[]> {
    return this.pokemonList$ as Observable<Pokemon[]>
  }

  addPokemon(pokemon: Pokemon): void {
    const currentList = this.pokemonList$.getValue()
    this.pokemonList$.next([...currentList, pokemon])
  }
}
