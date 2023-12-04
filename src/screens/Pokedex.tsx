import React from 'react';
import { Text, SafeAreaView } from 'react-native';

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
  } = useFetchPokemonDetailList();

  return (
    <SafeAreaView>
      <UiFeedback
        isLoading={isLoadingInitial || isLoading}
        isError={isErrorInitial || isError}
        isEmpty={isSuccessInitial && !pokedex.length}>
        <Text>Pokedex</Text>
        <PokemonList
          pokemon={pokedex.filter((p) => !!p.data).map((p) => p.data as PokemonDetailSimple)}
        />
      </UiFeedback>
    </SafeAreaView>
  );
}
