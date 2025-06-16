import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; // para o ion-input
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service'; // ajuste o caminho conforme seu projeto

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TitleCasePipe
  ]
})
export class HomePage implements OnInit {
  nome: string = '';
  imagemUrl: string = '';
  loading = false;
  erro = '';

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.carregarPokemon('pikachu');
  }

  carregarPokemon(nomePokemon: string) {
    this.loading = true;
    this.erro = '';
    this.pokemonService.getPokemon(nomePokemon).subscribe({
      next: (data) => {
        this.nome = data.name;
        this.imagemUrl = data.sprites.front_default;
        this.loading = false;
      },
      error: () => {
        this.erro = 'Pokémon não encontrado!';
        this.loading = false;
      }
    });
  }

  irParaDetalhes(nomePokemon: string) {
    this.router.navigate(['/detalhes'], { queryParams: { nome: nomePokemon } });
  }
}
