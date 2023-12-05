import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import PokemonCard from './PokemonCard';
import { PokemonDetailSimple } from '../../types/pokemon';
import Container from '../Container';
import Spinner from '../Spinner';

interface Props {
  pokemon: PokemonDetailSimple[];
  loadMore: () => any;
  loadPrevious: () => any;
  isLoading: boolean;
  isLoadingPrevious: boolean;
}

const CustomLoader = () => (
  <Container style={styles.loader}>
    <Spinner size={60} />
  </Container>
);

export default function PokemonList({
  pokemon,
  loadMore,
  loadPrevious,
  isLoading,
  isLoadingPrevious,
}: Props) {
  return (
    <FlatList
      data={pokemon}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(p) => String(p.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContainer}
      onEndReached={loadMore}
      onEndReachedThreshold={0.3}
      onScrollToTop={loadPrevious}
      ListHeaderComponent={isLoadingPrevious ? <CustomLoader /> : null}
      ListFooterComponent={isLoading ? <CustomLoader /> : null}
      maintainVisibleContentPosition={{ minIndexForVisible: 0 }}
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    padding: 5,
  },
  loader: {
    marginTop: 20,
    marginBottom: 60,
    height: 60,
  },
});
