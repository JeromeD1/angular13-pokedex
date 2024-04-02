import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokedexService } from '../../shared/pokedex.service';
import { Pokemon } from '../../shared/Pokemon.model';
import { Subject, takeUntil } from 'rxjs';
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
export class PokedexPageComponent implements OnInit, OnDestroy{

  constructor(private pokeService: PokedexService) {}

  pokemonList: Pokemon[] = [];
  selectedPokemon: Pokemon | null = null
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
      this.getPokemons()
  }

  getPokemons(): void {
    this.pokeService.getPokemons()
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => this.pokemonList = data)
  }


  showPokemonDetail(pokemon: Pokemon){
    this.selectedPokemon = pokemon
  }

  ngOnDestroy(): void {
      this.destroy$.next()
      this.destroy$.complete()
  }
}
