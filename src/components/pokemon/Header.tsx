import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native';

import { PokemonDetailSimple } from '../../types/pokemon';
interface Props {
  pokemon: PokemonDetailSimple;
}
export default function Header({ pokemon }: Props) {
  const backgroundStyles = {
    ...styles.backgroundStyle,
    backgroundColor: pokemon.typeColors[0],
  };
  return (
    <View style={styles.containerStyle}>
      <View style={backgroundStyles} />

      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{pokemon.name}</Text>
          <Text style={styles.order}>#{`${pokemon.order}`}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: pokemon.img }} style={styles.image} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    textTransform: 'capitalize',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 27,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
  },
  order: {
    color: 'white',
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    bottom: 30,
  },
  image: {
    width: 250,
    height: 250,
  },
  containerStyle: {
    alignSelf: 'center',
    width: window.width,
    overflow: 'hidden',
    height: window.width * 1.2,
  },
  backgroundStyle: {
    borderRadius: window.width,
    width: window.width * 2,
    height: window.width * 2,
    marginLeft: -(window.width / 2),
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
    transform: [{ scaleX: 1.2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 40,
    height: '100%',
  },
});
