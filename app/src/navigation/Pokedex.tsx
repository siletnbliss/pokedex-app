import Icon from '@expo/vector-icons/MaterialIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable } from 'react-native';

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
          title: '',
          headerTransparent: true,
          headerRight: () => (
            <Pressable
              onPress={() => {
                console.log({ ID: route.params.id });
              }}>
              <Icon name="favorite-outline" size={24} color="white" />
            </Pressable>
          ),
          headerTintColor: 'white',
        })}
      />
    </Stack.Navigator>
  );
}
