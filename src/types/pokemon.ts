interface NameUrl {
  name: string;
  url: string;
}
export interface PokemonListItem extends NameUrl {}

export interface PokemonListRawReponse {
  count: number;
  next?: string;
  previous?: string;
  results: [PokemonListItem][];
}

export type PokemonListResponse = { results: PokemonListItem[]; next?: string; previous?: string };

export interface PokemonDetailRaw {
  abilities: {
    ability: NameUrl;
    is_hidden: boolean;
  }[];
  held_items: {
    item: NameUrl;
  }[];
  id: number;
  moves: {
    move: NameUrl;
  }[];
  name: string;
  order: number;
  game_indices: {
    game_index: number;
  }[];
  sprites: {
    back_default: string;
    front_default: string;
    back_shiny: string;
    front_shiny: string;
    other: {
      'official-artwork': {
        front_default: string;
        front_shiny: string;
      };
    };
  };

  stats: {
    base_stat: number;
    stat: NameUrl;
  }[];
  types: {
    slot: number;
    type: NameUrl;
  }[];
  weight: number;
  height: number;
}

export interface PokemonDetailSimple {
  id: number;
  name: string;
  type: string[];
  typeColors: string[];
  order: number;
  img: string;
}
