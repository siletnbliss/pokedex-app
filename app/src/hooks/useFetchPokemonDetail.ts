import { pokemonDetailRawSimpleMap } from './useFetchPokemonDetailList';
import { Map, useFetcher } from './useFetcher';
import { PokemonDetailFull, PokemonDetailRaw } from '../types/pokemon';

const pokemonMapper: Map<PokemonDetailRaw, PokemonDetailFull> = (pokemon) => ({
  ...pokemonDetailRawSimpleMap(pokemon),
  stats: pokemon.stats,
});

export const useFetchPokemonSingleDetail = (id: string | number) => {
  const data = useFetcher<PokemonDetailFull, PokemonDetailRaw>(['pokemon', id], {
    api: 'pokemon',
    map: pokemonMapper,
  });
  return { ...data };
};
