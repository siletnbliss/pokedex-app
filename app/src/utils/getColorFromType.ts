import { POKEMON_TYPE_COLORS } from './constants';

type PokemonType = keyof typeof POKEMON_TYPE_COLORS;

const convertStringToType = (type?: string): PokemonType => {
  if (!type) return 'normal';
  type = type.toLowerCase();
  return Object.keys(POKEMON_TYPE_COLORS).includes(type) ? (type as PokemonType) : 'normal';
};

export const getColorFromType = (type?: string) => POKEMON_TYPE_COLORS[convertStringToType(type)];
