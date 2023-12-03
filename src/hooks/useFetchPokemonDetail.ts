import { useFetchPokemon } from './useFetchPokemon';
import { Map, useFetcher, useFetcherList } from './useFetcher';
import { PokemonDetailRaw, PokemonDetailSimple } from '../types/pokemon';

export const useFetchPokemonSingleDetail = (url: string) => {
  const data = useFetcher<PokemonDetailRaw>([url], { api: 'blank' });
  return { ...data };
};

const mapper: Map<PokemonDetailRaw, PokemonDetailSimple> = (poke) => ({
  id: poke.id,
  name: poke.name,
  type: poke.types.map((t) => t.type.name),
  order: poke.order,
  img: poke.sprites.other['official-artwork'].front_default,
});

export const useFetchPokemonDetailList = (urls?: string[]) => {
  const {
    data: baseList,
    isError: isBaseListError,
    isLoading: isBaseListLoading,
    isSuccess: isBaseListSuccess,
  } = useFetchPokemon();

  const results = useFetcherList<PokemonDetailSimple, PokemonDetailRaw>(
    baseList ? baseList.map((item) => [item.url]) : [],
    { api: 'blank' },
    mapper
  );
  return {
    ...results,
    isLoadingInitial: isBaseListLoading,
    isErrorInitial: isBaseListError,
    isSuccessInitial: isBaseListSuccess,
  };
};
