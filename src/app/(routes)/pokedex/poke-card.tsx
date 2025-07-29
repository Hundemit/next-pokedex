import { Fragment, useState } from "react";

import { usePokemon } from "@/lib/utils";

import { Pokemon } from "@/types/pokemon";
import Link from "next/link";
import Image from "next/image";
import { useStore } from "@/store/store";
const PokeCard = ({ name }: { name: string }) => {
  const { data, isLoading, mutate } = usePokemon<Pokemon>(name);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { setPokemonName } = useStore();
  return (
    <>
      <Link
        href={"/pokedex/" + name}
        onClick={() => {
          setPokemonName(name.charAt(0).toUpperCase() + name.slice(1));
        }}
        className="bg-white rounded-lg dark:bg-sidebar border border-gray-100 dark:border-gray-900 flex-col aspect-square flex items-center justify-center p-2  dark:hover:bg-gray-800 hover:bg-gray-100 hover:scale-101 dark:hover:scale-101 transition-all duration-300">
        <div className="relative w-32 h-32 mx-auto mt-5">
          {!imageLoaded && <div className="absolute inset-0 animate-pulse bg-accent dark:bg-muted rounded-full" />}
          <Image
            onLoad={() => setImageLoaded(true)}
            width={128}
            height={128}
            className={`object-cover transition-opacity duration-700 w-32 h-32 ${imageLoaded ? "opacity-100 " : "opacity-0 h-0 w-0"}`}
            src={data?.sprites.other["official-artwork"].front_default || "/"}
            alt=""
          />
        </div>

        <h5 className="truncate text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white py-5 w-full  ">{name.charAt(0).toUpperCase() + name.slice(1)}</h5>
      </Link>
    </>
  );
};

const LoadingPokeCard = () => {
  return (
    <div className="bg-white rounded-lg dark:bg-sidebar border border-gray-100 dark:border-gray-900 flex-col aspect-square flex items-center justify-center p-2 animate-pulse transition-all duration-300">
      <div className="relative w-32 h-32 mx-auto mt-5">
        <div className="absolute inset-0 bg-accent dark:bg-muted rounded-full" />
      </div>
      <div className="h-8 w-24 bg-accent dark:bg-muted rounded mt-5 mb-2" />
    </div>
  );
};

export { PokeCard, LoadingPokeCard };
