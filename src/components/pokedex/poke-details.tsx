"use client";

import { motion } from "framer-motion";
import { Pokemon } from "@/types/pokemon";
import { pokemonTypeIcons } from "@/lib/pokemon-type-icons";
import Image from "next/image";
import { PokeChart } from "./poke-chart";
import Link from "next/link";
import { useStore } from "@/store/store";

export function PokemonDetails({ pokemon }: { pokemon: Pokemon }) {
  const { setType, setPokemonName } = useStore();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: 0,
        y: { type: "spring", visualDuration: 0.4, delay: 0, bounce: 0.5 },
      }}
      id="pokemon-details"
      className="sm:px-12 px-4 py-6 flex flex-col md:flex-row  items-center  md:gap-20 justify-center  rounded-xl mx-4 md:mx-0  ">
      <div id="pokemon-details-left" className="flex flex-col gap-4 max-w-sm w-full items-center">
        <Image
          className={`object-contain ${!pokemon.sprites.other["official-artwork"].front_default && "rounded-full bg-gray-200 dark:bg-sidebar w-64 h-64"}`}
          src={pokemon.sprites.other["official-artwork"].front_default || ""}
          alt={pokemon.name}
          width={280}
          height={280}
        />
        <div className="px-4 sm:px-0 w-full">
          <div className="flex gap-2 items-center">
            <h3 className="text-2xl font-semibold leading-7 text-gray-900 dark:text-white">{pokemon && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
            <div className="flex items-center justify-center h-5 w-10 border-1 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-sm ">
              <p className="text-xs font-medium">#{pokemon?.id}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mt-4">
            {pokemon.types.map((type: { type: { name: string } }) => (
              <Link
                href={`/pokedex`}
                onClick={() => {
                  setType(pokemonTypeIcons[type.type.name]);
                  setPokemonName("");
                }}
                style={{
                  backgroundColor: `${pokemonTypeIcons[type.type.name].color}28`,
                  color: `${pokemonTypeIcons[type.type.name].color}`,
                  border: `1px solid ${pokemonTypeIcons[type.type.name].color}`,
                }}
                className="text-xs font-medium px-2.5 py-0.5 rounded-md hover:-translate-y-1 transition-all duration-300"
                key={type.type.name}>
                {type.type.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6 border-t border-gray-100 w-full">
          <dl className="divide-y divide-gray-300">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Height</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">{((pokemon.height || 0) * 0.1).toFixed(2)} m</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
              <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Weight</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">{((pokemon.weight || 0) * 0.1).toFixed(2)} kg</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Height</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">{((pokemon.height || 0) * 0.1).toFixed(2)} m</dd>
            </div>
          </dl>
        </div>
      </div>

      <div id="pokemon-details-right" className="max-w-xl w-full">
        <PokeChart pokemon={pokemon} />
      </div>
    </motion.div>
  );
}

export function PokemonDetailsLoading() {
  return (
    <div className="p-12 flex flex-col items-center md:flex-row gap-20 justify-between  border dark:border-gray-700 rounded-xl mx-4 md:mx-0 ">
      {/* PICTURE */}
      <div className="w-80 h-80 p-4  flex justify-center items-center  object-contain">
        <div className="animate-pulse dark:text-blue-100 dark:bg-slate-700  bg-blue-50  text-blue-700 rounded-full h-64 w-64"></div>
      </div>
      <div className="max-w-lg w-full px-4 ">
        <div className="px-4 sm:px-0">
          <div className="flex gap-2 items-center">
            <h3 className="text-2xl font-semibold leading-7 text-gray-900 dark:text-white"></h3>
            <span className="bg-gray-300 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 h-fit rounded dark:bg-gray-700 dark:text-gray-300"></span>
          </div>
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
  );
}
