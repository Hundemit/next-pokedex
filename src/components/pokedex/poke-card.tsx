"use client";

import { useState } from "react";
import { usePokemon } from "@/lib/utils";

import { Pokemon } from "@/types/pokemon";
import Link from "next/link";
import Image from "next/image";
import { useStore } from "@/store/store";
import { pokemonTypeIcons } from "@/lib/pokemon-type-icons";
import { Skeleton } from "../ui/skeleton";

const PokeCard = ({ name }: { name: string }) => {
  const { data: pokemon, isLoading } = usePokemon<Pokemon>(name);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { setPokemonName, setType } = useStore();
  return (
    <>
      <Link
        href={"/pokedex/" + name}
        onClick={() => {
          setPokemonName(name.charAt(0).toUpperCase() + name.slice(1));
        }}
        className=" w-full h-full flex-col flex  gap-4  mx-auto items-center justify-center  p-4 bg-white rounded-lg  dark:bg-sidebar border border-gray-100 dark:border-gray-900    dark:hover:bg-gray-800 hover:bg-gray-100 hover:scale-101 dark:hover:scale-101 transition-all duration-300">
        {!imageLoaded && (
          <div className="w-32 h-32 mx-auto flex flex-col items-center justify-center">
            <Skeleton className="rounded-full w-28 h-28 " />
          </div>
        )}
        <Image
          onLoad={() => setImageLoaded(true)}
          width={128}
          height={128}
          className={`transition-opacity duration-700 sm:w-32 w-64 my-auto ${imageLoaded ? "opacity-100 " : "opacity-0 h-0 w-0"}`}
          src={pokemon?.sprites.other["official-artwork"].front_default || "/nothing.png"}
          alt=""
        />

        <div className="flex flex-col items-center justify-center w-full">
          {/* Title and ID */}
          <div className="flex items-center justify-center gap-2 w-full">
            <h5 className="truncate text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white wrap-normal overflow-ellipsis ">{name.charAt(0).toUpperCase() + name.slice(1)}</h5>

            {isLoading ? (
              <Skeleton className="h-5 w-10 rounded-md " />
            ) : (
              <>
                <div className="flex items-center justify-center h-5 px-2.5 border-1 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-sm ">
                  <p className="text-xs font-medium">#{pokemon?.id}</p>
                </div>
              </>
            )}
          </div>

          {/* Types */}
          <div className="flex flex-wrap gap-1 my-2">
            {isLoading ? (
              <>
                <Skeleton className="h-5 w-16 rounded-md" />
              </>
            ) : (
              <>
                {pokemon?.types.map((type: { type: { name: string } }) => (
                  <button
                    type="button"
                    onClick={(e) => {
                      setType(pokemonTypeIcons[type.type.name]);
                      setPokemonName("");
                      e.stopPropagation();
                      e.preventDefault();
                      e.nativeEvent.stopImmediatePropagation();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    style={{
                      backgroundColor: `${pokemonTypeIcons[type.type.name].color}28`,
                      color: `${pokemonTypeIcons[type.type.name].color}`,
                      border: `1px solid ${pokemonTypeIcons[type.type.name].color}`,
                    }}
                    className="text-xs h-fit font-medium px-2.5 py-0.5 rounded-md cursor-pointer hover:-translate-y-1 transition-all duration-300"
                    key={type.type.name}>
                    {type.type.name}
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

const SkeletonPokeCard = () => {
  return (
    <div className="bg-white dark:bg-sidebar border border-gray-100 dark:border-gray-900 rounded-lg  animate-pulse  w-full flex-col flex gap-0 mx-auto items-center justify-center p-2">
      {/* Image Placeholder */}
      <div className=" w-32 h-32 flex flex-col items-center justify-center">
        <Skeleton className="rounded-full w-28 h-28 " />
      </div>

      <div className="flex flex-col items-center justify-center">
        {/* Name and ID Placeholder */}
        <div className="flex items-center justify-center gap-2 ">
          <Skeleton className="h-5 w-24 rounded-md" />
          <Skeleton className="w-10 h-5 rounded-md " />
        </div>

        {/* Types Placeholder */}
        <div className="flex flex-wrap gap-2 mt-3 justify-center">
          <Skeleton className="h-5 w-16 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export { PokeCard, SkeletonPokeCard };
