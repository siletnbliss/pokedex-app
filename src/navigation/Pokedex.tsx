import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { PokedexStackParamsList } from './nav-params';
import Pokedex from '../screens/Pokedex';
import Pokemon from '../screens/Pokemon';

const Stack = createNativeStackNavigator<PokedexStackParamsList>();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{ title: '', headerTransparent: true }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: '',
          headerTransparent: true,
          //headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
}
