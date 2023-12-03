import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';

import Container from '../components/Container';
import UiFeedback from '../components/UiFeedback';
import { useFetchPokemonDetailList } from '../hooks/useFetchPokemonDetail';

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
    <UiFeedback
      isLoading={isLoadingInitial || isLoading}
      isError={isErrorInitial || isError}
      isEmpty={isSuccessInitial && !pokedex.length}>
      <SafeAreaView>
        <Text>Pokedex</Text>
        <View
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
          }}>
          {pokedex?.map((p, i) => (
            <Container
              key={i}
              style={{
                width: '45%',
                height: 'auto',
              }}>
              <Text>{p.data?.name}</Text>
            </Container>
          ))}
        </View>
      </SafeAreaView>
    </UiFeedback>
  );
}
