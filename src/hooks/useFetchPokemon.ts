import { Map, useInfiniteFetcher } from './useFetcher';
import { PokemonListRawReponse, PokemonListResponse } from '../types/pokemon';
import { API_HOST } from '../utils/constants';

interface Params {
  page: number;
  size: number;
}

const mapper: Map<PokemonListRawReponse, PokemonListResponse> = (res) => ({
  results: res.results?.flatMap((v) => v) || [],
  next: res.next,
  previous: res.previous,
});

export const useFetchPokemon = (
  { page, size }: Params = {
    page: 0,
    size: 20,
  }
) => {
  const data = useInfiniteFetcher<PokemonListResponse, PokemonListRawReponse>(
    [API_HOST, 'pokemon', { limit: size, offset: page }],
    {
      api: 'blank',
      map: mapper,
      keyExtractors: {
        next: (k) => (k.next ? '?' + k.next.split('?').pop() : undefined),
        previous: (k) => (k.previous ? '?' + k.previous.split('?').pop() : undefined),
      },
      maxPages: 5,
    }
  );

  return { ...data };
};
