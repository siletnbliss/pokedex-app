import { Map, useFetcher } from './useFetcher';
import { PokemonListRawReponse, PokemonListResponse } from '../types/pokemon';

interface Params {
  page: number;
  size: number;
}

const mapper: Map<PokemonListRawReponse, PokemonListResponse> = (res) =>
  res.results?.flatMap((v) => v) || [];

export const useFetchPokemon = (
  { page, size }: Params = {
    page: 0,
    size: 20,
  }
) => {
  const data = useFetcher<PokemonListResponse, PokemonListRawReponse>(
    [`pokemon`, { limit: size, offset: page }],
    { api: 'pokemon' },
    mapper
  );
  return { ...data };
};
