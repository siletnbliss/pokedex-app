import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import { PokemonScreenProps } from '../navigation/nav-params';

export default function Pokemon({ route, navigation }: PokemonScreenProps) {
  const pokemonId = route.params.id;
  return (
    <SafeAreaView>
      <Text>Pokemon #{pokemonId}</Text>
    </SafeAreaView>
  );
}
