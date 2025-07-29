import useSWR from "swr";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { Pokemon } from "@/types/pokemon";
import type { PokemonApiResponse } from "@/app/(routes)/pokedex/poke-list-type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function usePokemonList<PokemonApiResponse>(type: string) {
  const key = ["all-pokemon", type] as const;

  const { data, isLoading, mutate } = useSWR<PokemonApiResponse>(key, async () => {
    try {
      return await getAllPokemon(type);
    } catch (error) {
      if (error instanceof Error && error.cause === "404") {
        return { results: [] };
      } else {
        throw error;
      }
    }
  });

  return { data, isLoading, mutate };
}

const API = "https://pokeapi.co/api/v2";

export async function getAllPokemon(type: string) {
  const urlallPokemon = `${API}/pokemon?limit=100000&offset=0`;
  const urlAllPokemonByType = `${API}/type/${type}`;

  try {
    const response = await fetch(type === "all" ? urlallPokemon : urlAllPokemonByType);

    if (!response.ok) {
      // Handle non-successful HTTP responses, e.g., 404 Not Found
      throw new Error(`Failed to fetch data for ${name}`);
    }

    const data = await response.json();

    if (type !== "all") {
      data.results = data.pokemon.map((entry: { pokemon: { name: string; url: string } }) => ({
        name: entry.pokemon.name,
        url: entry.pokemon.url,
      }));
    }
    console.log(data);
    return data;
  } catch (error: any) {
    throw new Error(`An error occurred while fetching data: ${error.message}`);
  }
}

export function usePokemon<T>(name: string) {
  const { data, isLoading, mutate } = useSWR<T>(name, async () => {
    try {
      return await getPokemon(name);
    } catch (error) {
      if (error instanceof Error && error.cause === "404") {
        return null;
      } else {
        throw error;
      }
    }
  });

  return { data, isLoading, mutate };
}

export async function getPokemon(name: string) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!response.ok) {
      // Handle non-successful HTTP responses, e.g., 404 Not Found
      throw new Error(`Failed to fetch data for ${name}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    // Handle network errors or other exceptions
    throw new Error(`An error occurred while fetching data: ${error.message}`);
  }
}

export function filterPokemonByName(data: PokemonApiResponse | undefined, name: string): Pokemon[] {
  if (!data) return [];

  return data.results.filter((pokemon: Pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()));
}
