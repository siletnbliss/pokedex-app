import Icon from '@expo/vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import { RootTabParamsList } from './nav-params';
import Pokeball from '../components/Pokeball';
import Account from '../screens/Account';
import Favorites from '../screens/Favorites';
import Pokedex from '../screens/Pokedex';
import { COLORS } from '../utils/constants';

const Tab = createBottomTabNavigator<RootTabParamsList>();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: COLORS.primary,
      }}
      initialRouteName="Home">
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="favorite" size={size} color={color} />,
        }}
        name="Favorites"
        component={Favorites}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          headerTransparent: true,
          headerTitle: '',
          tabBarIcon: ({ color }) => (
            <View style={[styles.ballContainer, styles.shadowProp]}>
              <Pokeball
                size={75}
                //translateY={5}
                color={color}
              />
            </View>
          ),
        }}
        name="Home"
        component={Pokedex}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="person" size={size} color={color} />,
          tabBarLabel: 'My account',
          headerTitle: 'My account',
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  ballContainer: {
    transform: [{ translateY: -20 }],
    width: 80,
    height: 40,
    borderBottomColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  shadowProp: {
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: '#000000',
    elevation: 0.1,
    shadowOpacity: 0.6,
  },
});

export default Navigation;
