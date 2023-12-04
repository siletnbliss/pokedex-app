import React, { useRef, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { Animated } from 'react-native';
import type { ViewStyle } from 'react-native';

type FadeInViewProps = PropsWithChildren<{ style: ViewStyle; duration?: number }>;

const FadeInView: React.FC<FadeInViewProps> = ({ style, children, duration = 1000 }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {children}
    </Animated.View>
  );
};

export default FadeInView;
