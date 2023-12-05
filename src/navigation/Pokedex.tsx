import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';

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
        options={({ route }) => ({
          headerTitle: () => (
            <Text style={{ textTransform: 'capitalize', fontSize: 20, fontWeight: '500' }}>
              {route.params.name}
            </Text>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
