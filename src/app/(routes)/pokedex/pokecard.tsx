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
        <Fragment>
          <div className=" bg-white rounded-lg  dark:bg-sidebar border border-gray-200 dark:border-gray-800 flex flex-col h-full">
            <div className="h-full flex items-center justify-center p-2">
              <Image width={128} height={128} className=" rounded-t-lg  m-2  my-auto object-cover	" src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
              <Link
                href={"/pokemon/" + pokemon.name}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full flex justify-center items-center px-3 py-2 text-sm font-medium text-center  dark:text-blue-100 dark:bg-gray-500 rounded bg-blue-50  text-blue-700">
                <span>Info</span>
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>
        </Fragment>
      )}
    </>
  );
};

function LoadingPokeCard() {
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

export default PokeCard;
