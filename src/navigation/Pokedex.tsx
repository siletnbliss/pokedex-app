import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokedex from "../screens/Pokedex";
import { PokedexStackParamsList } from "./nav-params";

const Stack = createNativeStackNavigator<PokedexStackParamsList>();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={Pokedex} />
    </Stack.Navigator>
  );
}
