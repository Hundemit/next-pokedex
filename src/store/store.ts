import { create } from "zustand";

export interface Store {
  search: string;
  type: string;
  setSearch: (search: string) => void;
  setType: (type: string) => void;
}

export const useStore = create<Store>((set) => ({
  search: "",
  type: "all",
  setSearch: (search: string) => set({ search }),
  setType: (type: string) => set({ type }),
}));
