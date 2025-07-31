import {
  Flame, // Fire
  Droplets, // Water
  Leaf, // Grass
  Zap, // Electric
  Mountain, // Rock
  Snowflake, // Ice
  Sword, // Fighting
  Skull, // Poison
  Bird, // Flying
  Bug, // Bug
  Ghost, // Ghost
  Moon, // Dark
  Sparkles, // Fairy
  Shield, // Steel
  Crown, // Dragon
  Circle, // Normal
  Pickaxe, // Ground
  Eye, // Psychic
  type LucideIcon,
  Square,
} from "lucide-react";

export interface PokemonType {
  name: string;
  icon: LucideIcon;
  buttonName: string;
  color: string;
}

export const pokemonTypeIcons: Record<string, PokemonType> = {
  all: {
    buttonName: "All Pokémon",
    name: "all",
    icon: Square,
    color: "#A8A8A8", // Grau
  },
  normal: {
    buttonName: "Normal",
    name: "normal",
    icon: Circle,
    color: "#98986A", // 5% dunkler als #A8A878
  },
  fire: {
    buttonName: "Fire",
    name: "fire",
    icon: Flame,
    color: "#D8732B", // 5% dunkler als #F08030
  },
  water: {
    buttonName: "Water",
    name: "water",
    icon: Droplets,
    color: "#5E82D8", // 5% dunkler als #6890F0
  },
  electric: {
    buttonName: "Electric",
    name: "electric",
    icon: Zap,
    color: "#DFBC2B", // 5% dunkler als #F8D030
  },
  grass: {
    buttonName: "Grass",
    name: "grass",
    icon: Leaf,
    color: "#6CAF48", // 5% dunkler als #78C850
  },
  ice: {
    buttonName: "Ice",
    name: "ice",
    icon: Snowflake,
    color: "#8AC2C2", // 5% dunkler als #98D8D8
  },
  fighting: {
    buttonName: "Fighting",
    name: "fighting",
    icon: Sword,
    color: "#AC2923", // 5% dunkler als #C03028
  },
  poison: {
    buttonName: "Poison",
    name: "poison",
    icon: Skull,
    color: "#8F3890", // 5% dunkler als #A040A0
  },
  ground: {
    buttonName: "Ground",
    name: "ground",
    icon: Pickaxe,
    color: "#CBB35E", // 5% dunkler als #E0C068
  },
  flying: {
    buttonName: "Flying",
    name: "flying",
    icon: Bird,
    color: "#977ED8", // 5% dunkler als #A890F0
  },
  psychic: {
    buttonName: "Psychic",
    name: "psychic",
    icon: Eye,
    color: "#DF4E78", // 5% dunkler als #F85888
  },
  bug: {
    buttonName: "Bug",
    name: "bug",
    icon: Bug,
    color: "#969E1C", // 5% dunkler als #A8B820
  },
  rock: {
    buttonName: "Rock",
    name: "rock",
    icon: Mountain,
    color: "#A08C32", // 5% dunkler als #B8A038
  },
  ghost: {
    buttonName: "Ghost",
    name: "ghost",
    icon: Ghost,
    color: "#635082", // 5% dunkler als #705898
  },
  dragon: {
    buttonName: "Dragon",
    name: "dragon",
    icon: Crown,
    color: "#6232DF", // 5% dunkler als #7038F8
  },
  dark: {
    buttonName: "Dark",
    name: "dark",
    icon: Moon,
    color: "#635042", // 5% dunkler als #705848
  },
  steel: {
    buttonName: "Steel",
    name: "steel",
    icon: Shield,
    color: "#A3A3B6", // 5% dunkler als #B8B8D0
  },
  fairy: {
    buttonName: "Fairy",
    name: "fairy",
    icon: Sparkles,
    color: "#D48899", // 5% dunkler als #EE99AC
  },
};
