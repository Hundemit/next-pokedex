"use client";

import { useState, useMemo, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { PokeCard, LoadingPokeCard } from "./pokecard";
import { Pokemon } from "@/types/pokemon";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useStore } from "@/store/store";
import { useAllPokemon, filterPokemonByName, getPokemonPage } from "@/lib/utils";

export interface PokemonApiResponse {
  results: Pokemon[];
}

const Pokelist = () => {
  const { type, search } = useStore();
  const PokemonPerScreen = 16;
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(81);

  const { data, isLoading, mutate } = useAllPokemon<PokemonApiResponse>(type);

  const filteredPokemon = useMemo(() => filterPokemonByName(data, search), [search, data]);

  useEffect(() => {
    setPage(1);
    setTotalPages(Math.ceil(filteredPokemon.length / PokemonPerScreen));
  }, [search, filteredPokemon.length, PokemonPerScreen]);

  return (
    <>
      <div className="min-h-[calc(100vh-10rem)]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4  ">
          {isLoading && Array.from(Array(PokemonPerScreen).keys()).map((index) => <LoadingPokeCard key={index} />)}
          {data &&
            getPokemonPage(filteredPokemon, page, PokemonPerScreen).map((pokemon: Pokemon, index: number) => (
              <motion.div
                className="w-full "
                key={pokemon.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 * (index * 0.4),
                  y: { type: "spring", visualDuration: 0.4, delay: 0.1 * (index * 0.4), bounce: 0.5 },
                }}>
                <PokeCard key={pokemon.name} name={pokemon.name} />
              </motion.div>
            ))}
        </div>
      </div>
      {/* Pagination */}

      <div className=" bg-none w-full flex items-center justify-center mx-auto sticky left-0 bottom-0 py-4 gap-4 ">
        <div className=" w-full md:w-auto">
          <Button className="md:w-28 w-full " size={"lg"} onClick={() => setPage((prev) => Math.max(prev - 1, 0))} disabled={page === 1}>
            <ChevronLeftIcon />
            Previous
          </Button>
        </div>
        <div className="w-full md:w-auto ">
          <Button size={"lg"} className="md:w-28 w-full " disabled={page === totalPages} onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}>
            Next
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Pokelist;
