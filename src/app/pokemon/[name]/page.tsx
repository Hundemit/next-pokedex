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

interface Params {
  params: {
    name: string;
  };
}

export default function PokemonDetailPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = use(params);
  const { data: pokemon, isLoading } = usePokemon<Pokemon>(name);

  return (
    <div className="">
      {isLoading && <PokemonCardLoading />}
      {pokemon && (
        <div id="pokemon-details" className="min-h-[70vh] pt-24">
          <div className="flex flex-col gap-10 md:mt-24 max-w-5xl mx-auto md:px-4">
            <motion.div
              className="w-full "
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.8,
                x: { type: "spring", visualDuration: 0.4, delay: 0.8, bounce: 0.5 },
              }}>
              <Link
                href={"/pokedex/"}
                className="w-fit flex gap-2 justify-center items-center px-3 py-2 text-sm font-medium text-center  dark:text-blue-100 dark:bg-slate-700 rounded-r md:rounded bg-blue-50  text-blue-700">
                <svg className="w-3.5 h-3.5  rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
                <span>Back</span>
              </Link>
            </motion.div>
            <motion.div
              className="w-full "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.4,
                y: { type: "spring", visualDuration: 0.4, delay: 0.4, bounce: 0.5 },
              }}>
              <div className=" flex flex-col items-center md:flex-row gap-20 justify-between  border dark:border-gray-700 rounded-xl mx-4 md:mx-0 ">
                {/* PICTURE */}
                {isLoading && (
                  <div className="w-80 h-80 p-4  flex justify-center items-center  object-contain">
                    <div className="animate-pulse dark:text-blue-100 dark:bg-slate-700  bg-blue-50  text-blue-700 rounded-full h-64 w-64"></div>
                  </div>
                )}
                {!isLoading && (
                  <Image
                    src={pokemon.sprites.other["official-artwork"].front_default || "https://janhindemit.de/wp-content/themes/PortfolioPage/Assests/pokedex-app/assets/img/pokeball.png"}
                    className="w-80 p-4 md:w-full object-contain"
                    alt={pokemon.name}
                    width={320}
                    height={320}
                  />
                )}

                {/* DETAILS */}
                <div className="max-w-lg w-full px-4 ">
                  <div className="px-4 sm:px-0">
                    <div className="flex gap-2 items-center">
                      <h3 className="text-2xl font-semibold leading-7 text-gray-900 dark:text-white">{pokemon && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                      <span className="bg-gray-300 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 h-fit rounded dark:bg-gray-700 dark:text-gray-300">#{pokemon?.id}</span>
                    </div>
                    {/* TYP */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {!isLoading &&
                        pokemon.types.map((type: Pokemon["types"][0]) => (
                          <Badge
                            style={{
                              backgroundColor: `${pokemonTypeIcons[type.type.name].color}B3`,

                              border: `1px solid ${pokemonTypeIcons[type.type.name].color}`,
                            }}
                            key={type.type.name}
                            variant={"secondary"}>
                            {type.type.name}
                          </Badge>
                        ))}
                    </div>
                  </div>
                  <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-300">
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Height</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">{((pokemon?.height || 0) * 0.1).toFixed(2)} m</dd>
                      </div>
                      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                        <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Weight</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">{((pokemon?.weight || 0) * 0.1).toFixed(2)} kg</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
      {!isLoading && !pokemon && (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold">Pokemon not found</h1>
          <Link
            href={{
              pathname: "/",
            }}
            className="font-bold py-3">
            <Button>Go back to home</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

function PokemonCardLoading() {
  return (
    <div id="pokemon-details" className="min-h-[70vh] duration-700">
      <div className="flex flex-col gap-10 md:mt-24 max-w-5xl mx-auto md:px-4">
        <Link
          href={"/pokedex/"}
          className="w-fit flex gap-2 justify-center items-center px-3 py-2 text-sm font-medium text-center  dark:text-blue-100 dark:bg-slate-700 rounded-r md:rounded bg-blue-50  text-blue-700">
          <svg className="w-3.5 h-3.5  rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
          <span>Back</span>
        </Link>
        <div className=" flex flex-col items-center md:flex-row gap-20 justify-between  border dark:border-gray-700 rounded-xl mx-4 md:mx-0 ">
          {/* PICTURE */}

          <div className="w-80 h-80 p-4  flex justify-center items-center  object-contain">
            <div className="animate-pulse dark:text-blue-100 dark:bg-slate-700  bg-blue-50  text-blue-700 rounded-full h-64 w-64"></div>
          </div>

          {/* DETAILS */}
          <div className="max-w-lg w-full px-4 ">
            <div className="px-4 sm:px-0">
              <div className="flex gap-2 items-center">
                <h3 className="text-2xl font-semibold leading-7 text-gray-900 dark:text-white"></h3>
                <span className="bg-gray-300 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 h-fit rounded dark:bg-gray-700 dark:text-gray-300"></span>
              </div>
              {/* TYP */}
              <div className="flex flex-wrap gap-2 mt-4"></div>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-300">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Height</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white"></dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                  <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Weight</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white"></dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
