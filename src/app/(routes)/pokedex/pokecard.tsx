import { Fragment } from "react";

import { usePokemon } from "@/lib/utils";

import { Pokemon } from "@/types/pokemon";
import Link from "next/link";
import Image from "next/image";

const PokeCard = ({ name }: { name: string }) => {
  const { data: pokemon } = usePokemon<Pokemon>(name);

  return (
    <>
      {pokemon && (
        <Link
          href={"/pokemon/" + pokemon.name}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="bg-white rounded-lg dark:bg-sidebar border border-gray-100 dark:border-gray-900 flex-col aspect-square flex items-center justify-between p-2  dark:hover:bg-gray-800 hover:bg-gray-100 hover:scale-101 dark:hover:scale-101 transition-all duration-300">
          <Image width={128} height={128} className=" rounded-t-lg m-4 my-auto  object-cover	" src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
          <h5 className="text-xl font-bold tracking-tight text-center text-gray-900 dark:text-white py-5 w-full  ">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
        </Link>
      )}
    </>
  );
};

const LoadingPokeCard = () => {
  return (
    <div className="bg-card border border-border rounded-lg shadow dark:bg-sidebar dark:border-sidebar">
      <div>
        <div className="animate-pulse bg-accent dark:bg-muted rounded-full mx-auto w-32 h-32 mt-5 object-cover"></div>
      </div>
      <div className="p-5">
        <div className="mb-2 animate-pulse bg-accent dark:bg-muted rounded-full mx-auto w-28 h-8 object-cover"></div>
        <button className="animate-pulse w-full flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-primary-foreground dark:text-primary-foreground dark:bg-muted rounded bg-accent h-9"></button>
      </div>
    </div>
  );
};

export { PokeCard, LoadingPokeCard };
