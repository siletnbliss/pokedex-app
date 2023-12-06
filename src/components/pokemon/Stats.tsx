import React from 'react';
import { View, Text, StyleSheet, DimensionValue } from 'react-native';

import { PokemonDetailFull } from '../../types/pokemon';
import { COLORS } from '../../utils/constants';

interface Props {
  stats: PokemonDetailFull['stats'];
}

const getBarStyles = (stat: number) => {
  let bgColor = '#ff3e3e';

  if (stat > 25 && stat < 50) {
    bgColor = '#F08700';
  } else if (stat >= 50 && stat < 80) {
    bgColor = '#EFCA08';
  } else if (stat >= 80) {
    bgColor = '#6EEB83';
  }
  const roundedPercent = Math.floor((100 * stat) / 120);
  return {
    backgroundColor: bgColor,
    width: (roundedPercent + `%`) as DimensionValue,
  };
};

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
            <View style={styles.bgBar}>
              <View style={[styles.bar, getBarStyles(stat.base_stat)]} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 60,
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
