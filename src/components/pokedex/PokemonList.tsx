import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Platform } from 'react-native';

import PokemonCard from './PokemonCard';
import { PokedexScreenNavigationProps } from '../../navigation/nav-params';
import { PokemonDetailSimple } from '../../types/pokemon';
import Container from '../Container';
import Spinner from '../Spinner';

interface Props {
  pokemon: PokemonDetailSimple[];
  loadMore: () => any;
  loadPrevious: () => any;
  isLoading: boolean;
  isLoadingPrevious: boolean;
  hasNext: boolean;
}

const CustomLoader = ({ isTop = false }: { isTop?: boolean }) => (
  <Container style={[styles.loader, { marginBottom: isTop ? 30 : 40 }]}>
    <Spinner size={60} />
  </Container>
);

export default function PokemonList({
  pokemon,
  loadMore,
  loadPrevious,
  isLoading,
  isLoadingPrevious,
  hasNext,
}: Props) {
  const navigation = useNavigation<PokedexScreenNavigationProps['navigation']>();

  const onPokemonPress = (pokemon: PokemonDetailSimple) => {
    navigation.navigate('Pokemon', { id: String(pokemon.id), name: pokemon.name });
  };

  return (
    <FlatList
      data={pokemon}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(p) => String(p.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} onPress={onPokemonPress} />}
      contentContainerStyle={styles.flatListContainer}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      onScrollToTop={loadPrevious}
      ListHeaderComponent={isLoadingPrevious ? <CustomLoader isTop /> : null}
      ListFooterComponent={hasNext ? <CustomLoader /> : null}
      maintainVisibleContentPosition={{ minIndexForVisible: 0 }}
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    padding: 5,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
  loader: {
    marginTop: 20,
    marginBottom: 40,
    height: 60,
  },
});
