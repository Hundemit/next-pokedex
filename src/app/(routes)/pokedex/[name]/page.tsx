"use client";

import { Fragment, use } from "react";
import Link from "next/link";

import { usePokemon } from "@/lib/utils";
import { Pokemon } from "@/types/pokemon";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { pokemonTypeIcons } from "@/lib/pokemon-type-icons";
import { motion } from "framer-motion";
import Countdown from "react-countdown";
import { useRouter } from "next/navigation";
import { PokeChart } from "./poke-chart";
import { PokemonDetailsLoading, PokemonDetails } from "./poke-details";

interface Params {
  params: {
    name: string;
  };
}

export default function PokemonDetailPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = use(params);
  const { data: pokemon, isLoading } = usePokemon<Pokemon>(name);
  const router = useRouter();
  return (
    <div className="min-h-[70vh] h-full">
      <div className="flex flex-col gap-10 my-12 mx-auto md:px-4 max-w-7xl  w-full">
        {/* Back button */}
        {(isLoading || pokemon) && (
          <Link
            href={"/pokedex/"}
            className="w-fit flex gap-2 justify-center items-center px-3 py-2 text-sm font-medium text-center dark:text-gray-100 dark:bg-gray-700 rounded-r md:rounded bg-gray-100 text-gray-800">
            <svg className="w-3.5 h-3.5 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
            <span>Zurück</span>
          </Link>
        )}
        {/* Loading */}
        {isLoading && <PokemonDetailsLoading />}
        {/* Pokemon details */}
        {pokemon && <PokemonDetails pokemon={pokemon} />}
      </div>
      {/* Not found */}
      {!isLoading && !pokemon && (
        <div className="flex flex-col items-center justify-center mt-10 ">
          <h1 className="text-2xl font-bold">Pokemon not found!</h1>

          <Countdown
            date={Date.now() + 5000}
            intervalDelay={0}
            precision={1}
            renderer={({ seconds }) => (
              <Button className="mt-4" asChild>
                <Link href="/pokedex">
                  Go back to home in {seconds} Sekunde{seconds === 1 ? "" : "n"}
                </Link>
              </Button>
            )}
            onComplete={() => router.push("/pokedex")}
          />
        </div>
      )}
    </div>
  );
}
