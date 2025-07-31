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

export interface MotionStore {
  defaultDelay: number;
  defaultDuration: number;
  setDefaultDelay: (defaultDelay: number) => void;
}

export const useMotionStore = create<MotionStore>((set) => ({
  defaultDelay: 0.3,
  defaultDuration: 0.3,
  setDefaultDelay: (defaultDelay: number) => set({ defaultDelay }),
  setDefaultDuration: (defaultDuration: number) => set({ defaultDuration }),
}));

export interface SidebarStore {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isSidebarOpen: false,
  setIsSidebarOpen: (isSidebarOpen: boolean) => set({ isSidebarOpen }),
}));
