export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListRawReponse {
  count: number;
  next: string;
  results: [PokemonListItem][];
}

export type PokemonListResponse = PokemonListItem[];
