import React, { useRef, useEffect } from 'react';
import { Animated, View, Easing, ColorValue } from 'react-native';

import Pokeball from './Pokeball';
import { COLORS } from '../utils/constants';

interface Props {
  size?: number;
  durationMs?: number;
  color?: ColorValue;
}

const AnimatedIcon = Animated.createAnimatedComponent(Pokeball);

const startRotationAnimation = (durationMs: number, rotationDegree: Animated.Value): void => {
  Animated.loop(
    Animated.timing(rotationDegree, {
      toValue: 360,
      duration: durationMs,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();
};

export default function Spinner({ size = 24, durationMs = 1500, color = COLORS.lightgray }: Props) {
  const rotationDegree = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startRotationAnimation(durationMs, rotationDegree);
  }, [durationMs, rotationDegree]);

  return (
    <View>
      <AnimatedIcon
        color={color}
        size={size}
        style={{
          transform: [
            {
              rotateZ: rotationDegree.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}
      />
    </View>
  );
}
