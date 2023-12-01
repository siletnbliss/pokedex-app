import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type {
  NavigatorScreenParams,
  CompositeScreenProps,
} from "@react-navigation/native";

export type RootTabParamsList = {
  Favorites: undefined;
  Home: NavigatorScreenParams<PokedexStackParamsList>;
  Account: undefined;
};

export type PokedexStackParamsList = {
  Pokedex: undefined;
  Pokemon: { id: string };
};

export type NativeTabScreenProps<U extends keyof RootTabParamsList> =
  NativeStackScreenProps<RootTabParamsList, U>;

export type PokedexScreenNavigationProps = CompositeScreenProps<
  NativeTabScreenProps<"Home">,
  NativeStackScreenProps<PokedexStackParamsList>
>;
