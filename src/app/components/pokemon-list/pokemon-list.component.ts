import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../shared/Pokemon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {

  @Input()
  pokemonList!: Pokemon[]

  @Output()
  selectedPokemonEmitter: EventEmitter<Pokemon> = new EventEmitter()


  selectPokemon(pokemon: Pokemon) {
    this.selectedPokemonEmitter.emit(pokemon)
  }

}
