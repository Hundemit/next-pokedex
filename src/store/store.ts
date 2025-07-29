import { create } from "zustand";
import { PokemonType, pokemonTypeIcons } from "@/lib/pokemon-type-icons";

export interface Store {
  search: string;
  type: PokemonType;
  pokemonName: string;
  page: number;
  setSearch: (search: string) => void;
  setType: (type: PokemonType) => void;
  setPokemonName: (pokemonName: string) => void;
  setPage: (page: number) => void;
}

export const useStore = create<Store>((set) => ({
  search: "",
  type: pokemonTypeIcons.all,
  pokemonName: "",
  page: 1,
  setSearch: (search: string) => set({ search }),
  setType: (type: PokemonType) => set({ type }),
  setPokemonName: (pokemonName: string) => set({ pokemonName }),
  setPage: (page: number) => set({ page }),
}));
