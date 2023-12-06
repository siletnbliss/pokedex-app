import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ProgressBar from './ProgressBar';
import { PokemonDetailFull } from '../../types/pokemon';
import { COLORS } from '../../utils/constants';

interface Props {
  stats: PokemonDetailFull['stats'];
}

export default function Stats({ stats }: Props) {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((stat, i) => (
        <View key={i} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{stat.stat.name}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.statNumber}>{stat.base_stat}</Text>
            <ProgressBar stat={stat.base_stat} />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  blockTitle: {
    width: '40%',
  },
  statName: {
    textTransform: 'capitalize',
    fontSize: 12,
    color: COLORS.textGray,
  },
  blockInfo: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statNumber: {
    width: '12%',
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: '#dedede',
    width: '88%',
    height: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
});
