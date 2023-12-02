import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import UiFeedback from '../components/UiFeedback';
import { useFetchPokemon } from '../hooks/useFetchPokemon';

export default function Pokedex() {
  const { data: pokedex, isLoading, isError, isSuccess } = useFetchPokemon();

  return (
    <UiFeedback isLoading={isLoading} isError={isError} isEmpty={isSuccess && !pokedex.length}>
      <SafeAreaView>
        <Text>Pokedex</Text>
        {pokedex?.map((p) => <Text key={p.name}>{p.name}</Text>)}
      </SafeAreaView>
    </UiFeedback>
  );
}
