import { Component, Input } from '@angular/core';
import { Pokemon } from '../../shared/Pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {

  @Input()
  pokemon!: Pokemon;

}
