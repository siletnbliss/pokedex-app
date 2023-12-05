import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import UiFeedback from '../components/UiFeedback';
import { useFetchPokemonSingleDetail } from '../hooks/useFetchPokemonDetail';
import { PokemonScreenProps } from '../navigation/nav-params';

export default function Pokemon({ route, navigation }: PokemonScreenProps) {
  const pokemonId = route.params.id;
  const { isLoading, isError, data: pokemon } = useFetchPokemonSingleDetail(pokemonId);
  return (
    <SafeAreaView>
      <UiFeedback isLoading={isLoading} isError={isError}>
        <Text>Pokemon #{pokemonId}</Text>
      </UiFeedback>
    </SafeAreaView>
  );
}
