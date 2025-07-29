"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { ChevronRightIcon } from "lucide-react";

import { PokeCard, LoadingPokeCard } from "../../../components/pokedex/poke-card";
import { Pokemon } from "@/types/pokemon";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "motion/react";
import { useStore } from "@/store/store";
import { filterPokemonByName, useAllPokemonByType } from "@/lib/utils";

export interface PokemonApiResponse {
  results: Pokemon[];
}

const PokeTypeList = () => {
  const PAGE_SIZE = 16;
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [page, setPage] = useState(1);

  const { type, search } = useStore();

  const { data, isLoading, mutate } = useAllPokemonByType<PokemonApiResponse>(type);

  const filteredPokemon = useMemo(() => filterPokemonByName(data, search), [search, data]);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
    setPage((prev) => prev + 1);
  }, [isInView]);

  return (
    <>
      <p className="text-2xl font-bold">{type}</p>
      <div className="min-h-[calc(100vh-10rem)]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4  ">
          {isLoading && Array.from(Array(PAGE_SIZE).keys()).map((index) => <LoadingPokeCard key={index} />)}
          {data &&
            filteredPokemon &&
            filteredPokemon.slice(0, page * PAGE_SIZE).map((pokemon: Pokemon, index: number) => (
              <motion.div
                className="w-full "
                key={pokemon.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.002 * (index * 0.2),
                  y: { type: "spring", visualDuration: 0.4, delay: 0.002 * (index * 0.2), bounce: 0.5 },
                }}>
                <PokeCard key={pokemon.name} name={pokemon.name} />
              </motion.div>
            ))}
        </div>
      </div>

      <div className=" bg-none w-full flex items-center justify-center mx-auto  py-4 gap-4 ">
        <Button ref={ref} variant={"outline"} className="md:w-28 w-full " size={"lg"} onClick={() => setPage(page + 1)} disabled={page * PAGE_SIZE >= filteredPokemon?.length}>
          More
          <ChevronRightIcon />
        </Button>
      </div>
    </>
  );
};

export default PokeTypeList;
