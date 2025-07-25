"use client";

import { useState, useMemo, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon, RotateCcw } from "lucide-react";

import PokeCard from "./pokecard";
import { Pokemon } from "@/types/pokemon";
import { Skeleton } from "@/components/ui/skeleton";
import { usePokemonPage, filterPokemonByName, useAllPokemon, getPokemonPage } from "@/lib/utils";
import { log } from "console";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { redirect, useRouter } from "next/navigation";

export interface PokemonApiResponse {
  results: Pokemon[];
}

const Pokelist = ({ search }: { search: string }) => {
  const PokemonPerScreen = 16;
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(81);

  const { data, isLoading, mutate } = useAllPokemon<PokemonApiResponse>();
  const router = useRouter();

  const filteredPokemon = useMemo(() => filterPokemonByName(data, search), [data, search]);

  useEffect(() => {
    setPage(1);
    setTotalPages(Math.ceil(filteredPokemon.length / PokemonPerScreen));
  }, [search, filteredPokemon.length, PokemonPerScreen]);

  console.log("totalPages");
  console.log(totalPages);
  console.log("--------------------------------");

  console.log("filteredPokemon Hier unter");

  console.log(filteredPokemon);
  console.log("--------------------------------");
  console.log("getPokemonPage Hierunter");
  console.log(getPokemonPage(filteredPokemon, page, PokemonPerScreen));
  console.log("--------------------------------");

  return (
    <>
      <div className="min-h-[calc(100vh-10rem)]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4  ">
          {isLoading && Array.from(Array(PokemonPerScreen).keys()).map((index) => <LoadingPokemonCard key={index} />)}
          {data &&
            getPokemonPage(filteredPokemon, page, PokemonPerScreen).map((pokemon: Pokemon, index: number) => (
              <motion.div
                className="w-full "
                key={pokemon.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.4 * (index * 0.3),
                  y: { type: "spring", visualDuration: 0.4, delay: 0.4 * (index * 0.3), bounce: 0.5 },
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

function LoadingPokemonCard() {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <div className="animate-pulse dark:text-blue-100 dark:bg-slate-700  bg-blue-50  text-blue-700 rounded-full  mx-auto w-32  h-32 mt-5  object-cover"></div>
      </div>
      <div className="p-5">
        <div className="mb-2 animate-pulse dark:text-blue-100 dark:bg-slate-700  bg-blue-50  text-blue-700 rounded-full  mx-auto w-28  h-8  object-cover"></div>

        <button className="animate-pulse w-full flex justify-center items-center px-3 py-2 text-sm font-medium text-center  dark:text-blue-100 dark:bg-slate-700 rounded bg-blue-50  text-blue-400 h-9"></button>
      </div>
    </div>
  );
}
