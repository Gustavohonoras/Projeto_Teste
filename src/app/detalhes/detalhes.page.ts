import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, TitleCasePipe],
})
export class DetalhesPage implements OnInit {
  nome: string | null = null;
  detalhes: any[] = [];
  loading = false;
  erro = '';
  imagemUrl: string = '';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nome = params['nome'];
      if (this.nome) {
        this.buscarDetalhes(this.nome);
      }
    });
  }

  buscarDetalhes(nomePokemon: string) {
    this.loading = true;
    this.erro = '';
    this.pokemonService.getPokemon(nomePokemon).subscribe({
      next: (data) => {
        this.detalhes = [
          { titulo: 'Altura', texto: `${data.height / 10} m`, imagem: 'assets/icons/altura.png' },
          { titulo: 'Peso', texto: `${data.weight / 10} kg`, imagem: 'assets/icons/peso.png' },
          { titulo: 'Tipos', texto: data.types.map((t: any) => t.type.name).join(', '), imagem: 'assets/icons/tipo.png' },
          { titulo: 'Habilidades', texto: data.abilities.map((a: any) => a.ability.name).join(', '), imagem: 'assets/icons/habilidade.png' },
          { titulo: 'Movimentos', texto: data.moves.slice(0, 5).map((m: any) => m.move.name).join(', '), imagem: 'assets/icons/movimento.png' },
        ];
        this.imagemUrl = data.sprites.front_default; 
        this.loading = false;
      },
      error: () => {
        this.erro = 'Pokémon não encontrado!';
        this.loading = false;
      }
    });
  }

  voltarParaHome() {
    this.router.navigate(['']);
  }
}
