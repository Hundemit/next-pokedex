"use client";

import { useMemo, useEffect, useRef } from "react";
import { ChevronRightIcon } from "lucide-react";

import { PokeCard, SkeletonPokeCard } from "@/components/pokedex/poke-card";
import { Pokemon } from "@/types/pokemon";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "motion/react";
import { useMotionStore, useStore } from "@/store/store";
import { usePokemonList, filterPokemonByName } from "@/lib/utils";

export interface PokemonApiResponse {
  results: Pokemon[];
}

const Pokelist = () => {
  const PAGE_SIZE = 30;
  const ref = useRef(null);
  const isInView = useInView(ref);

  const { type, search, page, setPage } = useStore();
  const { defaultDelay, defaultDuration } = useMotionStore();

  const { data, isLoading } = usePokemonList<PokemonApiResponse>(type.name);

  const filteredPokemon = useMemo(() => filterPokemonByName(data, search), [search, data]);

  const wasInView = useRef(false);

  useEffect(() => {
    // nur beim Übergang false → true ausführen
    if (isInView && !wasInView.current) {
      setPage(page + 1);
    }
    // aktuellen Zustand für den nächsten Render merken
    wasInView.current = isInView;
  }, [isInView, page, setPage]);

  return (
    <section className={`p-4 flex flex-col`}>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-6 gap-4  ">
        {isLoading && Array.from(Array(PAGE_SIZE).keys()).map((index) => <SkeletonPokeCard key={index} />)}
        {data &&
          filteredPokemon &&
          filteredPokemon.slice(0, page * PAGE_SIZE).map((pokemon: Pokemon, index: number) => (
            <>
              {/* <SkeletonPokeCard /> */}
              <motion.div
                key={pokemon.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: defaultDuration,
                  delay: defaultDelay + (index > 30 ? 0 : index * 0.005),
                  y: { type: "spring", visualDuration: defaultDuration, delay: defaultDelay + (index > 30 ? 0 : index * 0.005), bounce: 0.5 },
                }}>
                <PokeCard key={pokemon.name} name={pokemon.name} />
              </motion.div>
            </>
          ))}

        {filteredPokemon && filteredPokemon.length === 0 && !isLoading && (
          <h1 className="col-span-full text-center text-gray-500 dark:text-gray-400 scroll-m-20 text-2xl font-semibold tracking-tight mt-64">Es wurden keine Pokemon gefunden.</h1>
        )}
      </div>

      <div ref={ref} className="bg-none w-full flex items-center justify-center mx-auto  py-4 gap-4 ">
        {/* <Button variant={"outline"} className="md:w-28 w-full " size={"lg"} onClick={() => setPage(page + 1)} disabled={page * PAGE_SIZE >= filteredPokemon?.length}>
          More
          <ChevronRightIcon />
        </Button> */}
      </div>
    </section>
  );
};

export default Pokelist;
