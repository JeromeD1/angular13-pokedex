import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../shared/pokedex.service';
import { Pokemon } from '../../shared/Pokemon.model';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from '../../components/pokemon-detail/pokemon-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokedex-page',
  standalone: true,
  imports: [PokemonListComponent, PokemonDetailComponent, CommonModule],
  templateUrl: './pokedex-page.component.html',
  styleUrl: './pokedex-page.component.scss'
})
export class PokedexPageComponent implements OnInit{

  constructor(private pokeService: PokedexService) {}

  pokemonList: Pokemon[] = [];
  selectedPokemon: Pokemon | null = null

  ngOnInit(): void {
      this.getPokemons()
  }

  getPokemons(): void {
    this.pokemonList = this.pokeService.getPokemons()
  }


  showPokemonDetail(pokemon: Pokemon){
    this.selectedPokemon = pokemon
  }

}
