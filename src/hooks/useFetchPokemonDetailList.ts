import { useFetchPokemon } from './useFetchPokemon';
import { Map, useFetcherList } from './useFetcher';
import { PokemonDetailRaw, PokemonDetailSimple } from '../types/pokemon';
import { getColorFromType } from '../utils/getColorFromType';

const mapper: Map<PokemonDetailRaw, PokemonDetailSimple> = (poke) => ({
  id: poke.id,
  name: poke.name,
  type: poke.types.map((t) => t.type.name),
  order: poke.order,
  img: poke.sprites.other['official-artwork'].front_default,
  typeColors: poke.types.map((t) => getColorFromType(t.type.name)),
});

export const useFetchPokemonDetailList = (urls?: string[]) => {
  const {
    data: baseList,
    isError: isBaseListError,
    isLoading: isBaseListLoading,
    isSuccess: isBaseListSuccess,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    hasPreviousPage,
    fetchPreviousPage,
    isFetchingPreviousPage,
  } = useFetchPokemon();

  const results = useFetcherList<PokemonDetailSimple, PokemonDetailRaw>(
    baseList ? baseList.pages.flatMap((p) => p.results).map((item) => [item.url]) : [],
    { api: 'blank', map: mapper }
  );

  return {
    ...results,
    isLoadingInitial: isBaseListLoading,
    isErrorInitial: isBaseListError,
    isSuccessInitial: isBaseListSuccess,
    isLoadingNextPage: isFetchingNextPage,
    hasNextPage,
    loadNextPage: fetchNextPage,
    isLoadingPreviousPage: isFetchingPreviousPage,
    hasPreviousPage,
    loadPreviousPage: fetchPreviousPage,
  };
};
