# Pokédex App com Ionic + Angular

Este é um aplicativo simples de Pokédex desenvolvido com **Ionic + Angular** que permite buscar informações sobre um Pokémon e exibir seus detalhes, como altura, peso, tipos, habilidades, movimentos e imagem.

## 📱 Funcionalidades

- Buscar um Pokémon pelo nome
- Exibir informações básicas do Pokémon
- Mostrar imagem oficial do Pokémon
- Redirecionamento entre a tela de busca (Home) e a tela de detalhes

## 🚀 Tecnologias Utilizadas

- [Ionic Framework](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [PokéAPI](https://pokeapi.co/) (API pública para dados de Pokémon)
- RxJS (para lidar com assinaturas HTTP)

## 📂 Estrutura de Pastas

```bash
src/
├── app/
│   ├── home/               # Página de busca
│   │   ├── home.page.ts
│   │   ├── home.page.html
│   ├── detalhes/           # Página de detalhes do Pokémon
│   │   ├── detalhes.page.ts
│   │   ├── detalhes.page.html
│   ├── services/
│   │   └── pokemon.service.ts  # Serviço de comunicação com a API

