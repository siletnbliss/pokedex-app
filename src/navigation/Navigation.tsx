import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/MaterialIcons";
import Pokedex from "../screens/Pokedex";
import Favorites from "../screens/Favorites";
import { RootTabParamsList } from "./nav-params";
import Pokeball from "../components/Pokeball";

const Tab = createBottomTabNavigator<RootTabParamsList>();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        tabBarActiveTintColor: "#ee1515",
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="favorite" size={size} color={color} />
          ),
        }}
        name="Favorites"
        component={Favorites}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Pokédex",
          headerTitle: "Pokédex",
          tabBarIcon: ({ size, color }) => <Pokeball size={40} color={color} />,
        }}
        name="Home"
        component={Pokedex}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          ),
          tabBarLabel: "My account",
          headerTitle: "My account",
        }}
        name="Account"
        component={Pokedex}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
