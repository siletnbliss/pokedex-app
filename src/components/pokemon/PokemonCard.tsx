import React from 'react';
import { Text, StyleSheet, Image, Pressable } from 'react-native';

import { PokemonDetailSimple } from '../../types/pokemon';
import { getColorFromType } from '../../utils/getColorFromType';
import DiagonalGradient from '../DiagonalGradient';
import FadeInView from '../FadeInView';

interface Props {
  pokemon: PokemonDetailSimple;
}

export default function PokemonCard({ pokemon }: Props) {
  const onPress = () => {
    console.log('pressed');
  };

  const colors = pokemon.type.map((t) => getColorFromType(t));
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <FadeInView duration={500} style={styles.spacing}>
        <DiagonalGradient colors={colors} locations={[0.6, 0.4]} style={styles.background}>
          <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, '0')}</Text>
          <Text style={styles.name}>{pokemon.name}</Text>
          <Image source={{ uri: pokemon.img }} style={styles.image} />
        </DiagonalGradient>
      </FadeInView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  background: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  image: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
    textTransform: 'capitalize',
  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontSize: 11,
  },
});
