"use client";

import { use, useEffect } from "react";
import Link from "next/link";
import { usePokemon } from "@/lib/utils";
import { Pokemon } from "@/types/pokemon";
import { Button } from "@/components/ui/button";
import Countdown from "react-countdown";
import { useRouter } from "next/navigation";
import { PokemonDetailsLoading, PokemonDetails } from "./poke-details";
import { useStore } from "@/store/store";

export default function PokemonDetailPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = use(params);
  const { data: pokemon, isLoading } = usePokemon<Pokemon>(name);
  const router = useRouter();
  const { setPokemonName } = useStore();

  useEffect(() => {
    setPokemonName(name.charAt(0).toUpperCase() + name.slice(1));
  }, [name]);

  return (
    <div className="min-h-[70vh] h-full">
      <div className="flex flex-col gap-10 my-12 mx-auto md:px-4 max-w-7xl  w-full">
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
            date={Date.now() + 3000}
            intervalDelay={0}
            precision={1}
            renderer={({ seconds }) => (
              <Button className="mt-4" asChild>
                <Link href="/pokedex">
                  Go back to home in {seconds} Sekunde{seconds === 1 ? "" : "n"}
                </Link>
              </Button>
            )}
            onComplete={() => {
              router.push("/pokedex");
              setPokemonName("");
            }}
          />
        </div>
      )}
    </div>
  );
}
