import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Pokemon } from "@/types/pokemon";
import { pokemonTypeIcons } from "@/lib/pokemon-type-icons";
import Image from "next/image";
import { PokeChart } from "../poke-chart";

export function PokemonDetails({ pokemon }: { pokemon: Pokemon }) {
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
      className="px-12 py-6 grid grid-cols-1 md:grid-cols-2 rid-flow-row items-center md:flex-row gap-20 justify-center w-full border dark:border-gray-700 rounded-xl mx-4 md:mx-0  ">
      <div id="pokemon-details-left" className="flex flex-col gap-4 max-w-sm items-center">
        <Image
          src={pokemon.sprites.other["official-artwork"].front_default || "https://janhindemit.de/wp-content/themes/PortfolioPage/Assests/pokedex-app/assets/img/pokeball.png"}
          className=" object-contain"
          alt={pokemon.name}
          width={280}
          height={280}
        />
        <div className="px-4 sm:px-0 w-full">
          <div className="flex gap-2 items-center">
            <h3 className="text-2xl font-semibold leading-7 text-gray-900 dark:text-white">{pokemon && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
            <span className="bg-gray-300 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 h-fit rounded dark:bg-gray-700 dark:text-gray-300">#{pokemon.id}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {pokemon.types.map((type: Pokemon["types"][0]) => (
              <Badge
                style={{
                  backgroundColor: `${pokemonTypeIcons[type.type.name].color}28`,
                  color: `${pokemonTypeIcons[type.type.name].color}`,
                  border: `1px solid ${pokemonTypeIcons[type.type.name].color}`,
                }}
                key={type.type.name}
                variant={"secondary"}>
                {type.type.name}
              </Badge>
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

      <div id="pokemon-details-right" className="w-full h-full ">
        <PokeChart pokemon={pokemon} />
      </div>
    </motion.div>
  );
}
