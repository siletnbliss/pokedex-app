import React from 'react';
import { SafeAreaView } from 'react-native';

import UiFeedback from '../components/UiFeedback';
import PokemonList from '../components/pokemon/PokemonList';
import { useFetchPokemonDetailList } from '../hooks/useFetchPokemonDetail';
import { PokemonDetailSimple } from '../types/pokemon';

export default function Pokedex() {
  const {
    results: pokedex,
    isError,
    isLoading,
    isLoadingInitial,
    isErrorInitial,
    isSuccessInitial,
    isLoadingNextPage,
    loadNextPage,
    hasNextPage,
    isLoadingPreviousPage,
    hasPreviousPage,
    loadPreviousPage,
  } = useFetchPokemonDetailList();

  const shouldLoadNextPage = () => {
    if (!hasNextPage || isLoadingNextPage || isLoading) return;
    loadNextPage();
  };
  const shouldLoadPreviousPage = () => {
    if (!hasPreviousPage || isLoadingPreviousPage || isLoading) return;
    loadPreviousPage();
  };

  return (
    <SafeAreaView>
      <UiFeedback
        isLoading={isLoadingInitial}
        isError={isErrorInitial || isError}
        isEmpty={isSuccessInitial && !pokedex.length}>
        <PokemonList
          pokemon={pokedex.filter((p) => !!p.data).map((p) => p.data as PokemonDetailSimple)}
          loadMore={shouldLoadNextPage}
          loadPrevious={shouldLoadPreviousPage}
          isLoading={isLoadingNextPage || isLoading}
          isLoadingPrevious={isLoadingPreviousPage || isLoading}
        />
      </UiFeedback>
    </SafeAreaView>
  );
}
