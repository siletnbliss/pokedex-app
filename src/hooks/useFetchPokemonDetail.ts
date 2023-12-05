import { useFetcher } from './useFetcher';
import { PokemonDetailRaw } from '../types/pokemon';

export const useFetchPokemonSingleDetail = (id: string | number) => {
  const data = useFetcher<PokemonDetailRaw>(['pokemon', id], { api: 'pokemon' });
  return { ...data };
};
