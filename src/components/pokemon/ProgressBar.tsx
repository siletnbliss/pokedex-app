import React, { useMemo, useRef, useEffect } from 'react';
import { View, StyleSheet, DimensionValue, Animated } from 'react-native';

interface Props {
  stat: number;
  width?: DimensionValue;
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
  const roundedPercent = stat * 1.35; //Math.floor((100 * stat) / 120);
  return {
    backgroundColor: bgColor,
    width: roundedPercent,
  };
};

export default function ProgressBar({ stat, width = '88%' }: Props) {
  const barStyles = useMemo(() => getBarStyles(stat), [stat]);
  const growAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!barStyles.width) return;
    Animated.timing(growAnim, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [barStyles.width]);

  return (
    <View style={[styles.bgBar, { width }]}>
      <Animated.View
        style={{
          ...styles.bar,
          backgroundColor: barStyles.backgroundColor,
          width: '1%',
          transform: [
            {
              scaleX: growAnim.interpolate({
                inputRange: [1, 100],
                outputRange: [1, barStyles.width],
              }),
            },
          ],
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bgBar: {
    backgroundColor: '#dedede',
    height: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
});
