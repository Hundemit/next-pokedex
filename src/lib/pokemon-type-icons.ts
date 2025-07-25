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
} from "lucide-react";

export interface PokemonType {
  name: string;
  icon: LucideIcon;
  color: string;
}

export const pokemonTypeIcons: Record<string, PokemonType> = {
  normal: {
    name: "Normal",
    icon: Circle,
    color: "#A8A878",
  },
  fire: {
    name: "Fire",
    icon: Flame,
    color: "#F08030",
  },
  water: {
    name: "Water",
    icon: Droplets,
    color: "#6890F0",
  },
  electric: {
    name: "Electric",
    icon: Zap,
    color: "#F8D030",
  },
  grass: {
    name: "Grass",
    icon: Leaf,
    color: "#78C850",
  },
  ice: {
    name: "Ice",
    icon: Snowflake,
    color: "#98D8D8",
  },
  fighting: {
    name: "Fighting",
    icon: Sword,
    color: "#C03028",
  },
  poison: {
    name: "Poison",
    icon: Skull,
    color: "#A040A0",
  },
  ground: {
    name: "Ground",
    icon: Pickaxe,
    color: "#E0C068",
  },
  flying: {
    name: "Flying",
    icon: Bird,
    color: "#A890F0",
  },
  psychic: {
    name: "Psychic",
    icon: Eye,
    color: "#F85888",
  },
  bug: {
    name: "Bug",
    icon: Bug,
    color: "#A8B820",
  },
  rock: {
    name: "Rock",
    icon: Mountain,
    color: "#B8A038",
  },
  ghost: {
    name: "Ghost",
    icon: Ghost,
    color: "#705898",
  },
  dragon: {
    name: "Dragon",
    icon: Crown,
    color: "#7038F8",
  },
  dark: {
    name: "Dark",
    icon: Moon,
    color: "#705848",
  },
  steel: {
    name: "Steel",
    icon: Shield,
    color: "#B8B8D0",
  },
  fairy: {
    name: "Fairy",
    icon: Sparkles,
    color: "#EE99AC",
  },
};

// Helper function to get icon by type name
export const getPokemonTypeIcon = (typeName: string): PokemonType | undefined => {
  return pokemonTypeIcons[typeName.toLowerCase()];
};

// Get all types as array for navigation
export const getAllPokemonTypes = (): PokemonType[] => {
  return Object.values(pokemonTypeIcons);
};
