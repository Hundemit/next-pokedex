import useSWR from "swr";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { Pokemon } from "@/types/pokemon";
import type { PokemonApiResponse } from "@/app/pokedex/pokelist";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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

export function getPokemonPage(Pokemons: Pokemon[], page: number, limit: number) {
  const start = (page - 1) * limit;
  const end = start + limit;

  return Pokemons.slice(start, end);
}

export function usePokemonPage<T>(page: number, limit: number) {
  const { data, isLoading, mutate } = useSWR<T>(`pokemon-page-${page}`, async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page * limit}`);

    return await response.json();
  });

  return { data, isLoading, mutate };
}

export async function getAllPokemon() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);

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

export function useAllPokemon<T>() {
  const { data, isLoading, mutate } = useSWR<T>(`all-pokemon`, async () => {
    try {
      return await getAllPokemon();
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

export function filterPokemonByName(data: PokemonApiResponse | undefined, name: string) {
  if (!data) {
    return [];
  }
  return data.results.filter((pokemon: Pokemon) => {
    if (!name) {
      return true;
    }
    return pokemon.name.toLowerCase().includes(name.toLowerCase());
  });
}
export function filterPokemonByType(data: PokemonApiResponse | undefined, type: string): Pokemon[] {
  if (!data) {
    return [];
  }

  // Wenn kein Typ angegeben ist, alle Pokémon zurückgeben
  if (!type) {
    return data.results;
  }

  const typeLower = type.toLowerCase();

  return data.results.filter((pokemon: Pokemon) => pokemon.types.some((t) => t.type.name.toLowerCase() === typeLower));
}
