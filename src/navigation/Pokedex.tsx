import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { PokedexStackParamsList } from './nav-params';
import Pokedex from '../screens/Pokedex';

const Stack = createNativeStackNavigator<PokedexStackParamsList>();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={Pokedex} />
    </Stack.Navigator>
  );
}
