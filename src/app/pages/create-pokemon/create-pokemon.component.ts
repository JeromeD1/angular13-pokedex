import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pokemon } from '../../shared/Pokemon.model';
import { PokedexService } from '../../shared/pokedex.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-pokemon',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-pokemon.component.html',
  styleUrl: './create-pokemon.component.scss'
})
export class CreatePokemonComponent {

  submitted: boolean = false

  constructor(private fb: FormBuilder, private pokeService: PokedexService, private router: Router){}

  pokeForm = this.fb.group({
    name: ['', Validators.required],
    imgUrl: ['', Validators.required],
    description: ['']
  })

  onSubmit(): void {

    this.submitted = true

    if(this.pokeForm.valid){
      const formData = {
        name: this.pokeForm.value.name,
        imgUrl: this.pokeForm.value.imgUrl,
        description: this.pokeForm.value.description
      }
  
      this.pokeService.addPokemon(formData as Pokemon)
  
      this.pokeForm.reset({
        name: '',
        imgUrl: '',
        description: ''
      })

      this.submitted = false
    }
        
  }

  backToHome(): void {
    this.router.navigate(['/'])
  }
}
