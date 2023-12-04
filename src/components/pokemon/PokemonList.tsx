import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import PokemonCard from './PokemonCard';
import { PokemonDetailSimple } from '../../types/pokemon';

interface Props {
  pokemon: PokemonDetailSimple[];
}

export default function PokemonList({ pokemon }: Props) {
  return (
    <FlatList
      data={pokemon}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(p) => String(p.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    padding: 5,
  },
});
