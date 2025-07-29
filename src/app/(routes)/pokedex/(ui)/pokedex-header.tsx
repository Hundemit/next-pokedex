"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Darkmodebutton } from "@/components/darkmodebutton";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { SearchForm } from "@/app/(routes)/pokedex/(ui)/search-form";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { pokemonTypeIcons } from "@/lib/pokemon-type-icons";

const PokedexHeader = ({ className }: { className?: string }) => {
  const { type, setType, pokemonName, setPokemonName, setPage } = useStore();
  const router = useRouter();
  return (
    <header className={`${className}`}>
      <div className="flex flex-wrap items-center gap-4 w-full">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="cursor-pointer hover:underline"
                onClick={() => {
                  setType(pokemonTypeIcons.all);
                  setPokemonName("");
                  setPage(1);
                  router.push(`/pokedex`);
                }}>
                Pokedèx
              </BreadcrumbLink>
            </BreadcrumbItem>
            {type.name !== "all" && type.name !== undefined && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbLink
                  className="cursor-pointer hover:underline"
                  onClick={() => {
                    setPokemonName("");
                    setPage(1);
                    router.push(`/pokedex`);
                  }}>
                  <BreadcrumbPage>{type.buttonName}</BreadcrumbPage>
                </BreadcrumbLink>
              </>
            )}
            {pokemonName !== "" && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{pokemonName}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="relative md:ml-auto ml-0 order-3 md:order-2 w-full md:max-w-60 md:flex-1">
          <SearchForm />
        </div>
        <div className="order-2 md:order-3 ml-auto md:ml-0 md:w-auto">
          <Darkmodebutton />
        </div>
      </div>
    </header>
  );
};

export default PokedexHeader;
