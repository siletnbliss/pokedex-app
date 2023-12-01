import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/MaterialIcons";
import Pokedex from "../screens/Pokedex";
import Favorites from "../screens/Favorites";
import { RootTabParamsList } from "./nav-params";

const Tab = createBottomTabNavigator<RootTabParamsList>();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerTitleAlign: "center" }}
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
          // TODO: change with a nicer icon perhaps
          tabBarIcon: ({ size }) => (
            <Image
              style={{ width: 50, height: 50, top: -18 }}
              source={require("../assets/pokeball.png")}
            />
          ),
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
