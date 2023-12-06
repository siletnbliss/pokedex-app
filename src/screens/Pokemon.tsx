import React from 'react';
import { Text, ScrollView } from 'react-native';

import UiFeedback from '../components/UiFeedback';
import Header from '../components/pokemon/Header';
import Stats from '../components/pokemon/Stats';
import Type from '../components/pokemon/Type';
import { useFetchPokemonSingleDetail } from '../hooks/useFetchPokemonDetail';
import { PokemonScreenProps } from '../navigation/nav-params';

export default function Pokemon({ route, navigation }: PokemonScreenProps) {
  const pokemonId = route.params.id;
  const { isLoading, isError, data: pokemon } = useFetchPokemonSingleDetail(pokemonId);
  if (isError || isLoading || !pokemon) {
    return (
      <UiFeedback isLoading={isLoading} isError={isError}>
        <Text>{route.params.name}</Text>
      </UiFeedback>
    );
  }

  return (
    <ScrollView>
      <Header pokemon={pokemon} />
      <Type types={pokemon.type} colors={pokemon.typeColors} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
