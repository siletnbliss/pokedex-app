import React, { memo, useMemo } from 'react';
import { Text, StyleSheet, Image, Pressable } from 'react-native';

import PokemonTypeGradient from './PokemonTypeGradient';
import { PokemonDetailSimple } from '../../types/pokemon';
import FadeInView from '../FadeInView';

interface Props {
  pokemon: PokemonDetailSimple;
  onPress: (pokemon: PokemonDetailSimple) => void;
  height?: number;
}
// 130 -> 90
// height -> imgSize
// imgSize = height * 90 /130
function PokemonCard({ pokemon, onPress, height = 130 }: Props) {
  const imageSize = useMemo(() => Math.round((height * 9) / 13), [height]);
  return (
    <Pressable style={[styles.card, { height }]} onPress={() => onPress(pokemon)}>
      <FadeInView duration={500} style={styles.spacing}>
        <PokemonTypeGradient colors={pokemon.typeColors} style={styles.background}>
          <Text style={styles.number}>#{pokemon.order}</Text>
          <Text style={styles.name}>{pokemon.name}</Text>
          <Image
            source={{ uri: pokemon.img }}
            style={[styles.image, { width: imageSize, height: imageSize }]}
          />
        </PokemonTypeGradient>
      </FadeInView>
    </Pressable>
  );
}

export default memo(PokemonCard);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    //height: 130,
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
    //width: 90,
    //height: 90,
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
