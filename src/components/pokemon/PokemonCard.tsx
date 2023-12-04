import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

import { PokemonDetailSimple } from '../../types/pokemon';
import { COLORS } from '../../utils/constants';

interface Props {
  pokemon: PokemonDetailSimple;
}

export default function PokemonCard({ pokemon }: Props) {
  const onPress = () => {
    console.log('pressed');
  };
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.spacing}>
        <View style={styles.background}>
          <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, '0')}</Text>
          <Text style={styles.name}>{pokemon.name}</Text>
          <Image source={{ uri: pokemon.img }} style={styles.image} />
        </View>
      </View>
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
    backgroundColor: COLORS.lightgray,
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
  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontSize: 11,
  },
});
