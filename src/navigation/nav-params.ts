import type { NavigatorScreenParams, CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootTabParamsList = {
  Favorites: undefined;
  Home: NavigatorScreenParams<PokedexStackParamsList>;
  Account: undefined;
};

export type PokedexStackParamsList = {
  Pokedex: undefined;
  Pokemon: { id: string; name: string };
};

export type NativeTabScreenProps<U extends keyof RootTabParamsList> = NativeStackScreenProps<
  RootTabParamsList,
  U
>;

export type PokedexScreenNavigationProps = CompositeScreenProps<
  NativeTabScreenProps<'Home'>,
  NativeStackScreenProps<PokedexStackParamsList>
>;

export type PokemonScreenProps = NativeStackScreenProps<PokedexStackParamsList, 'Pokemon'>;

export type PokedexScreenProps = NativeStackScreenProps<PokedexStackParamsList, 'Pokedex'>;
