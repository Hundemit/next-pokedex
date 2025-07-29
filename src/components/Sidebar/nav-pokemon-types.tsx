"use client";

import { X } from "lucide-react";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useStore } from "@/store/store";
import { PokemonType } from "@/lib/pokemon-type-icons";
import Link from "next/link";

export function NavPokemonTypes({ pokemonTypes }: { pokemonTypes: PokemonType[] }) {
  const { type, setType, setSearch, setPokemonName, setPage } = useStore();
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Pokemon Types</SidebarGroupLabel>
      <SidebarMenu>
        {pokemonTypes.map((t) => (
          <SidebarMenuItem key={t.buttonName}>
            {/* TYPE BUTTON */}
            <SidebarMenuButton asChild>
              <Link
                href={`/pokedex`}
                role="button"
                onClick={() => {
                  setType(t);
                  setSearch("");
                  setPokemonName("");
                  setPage(1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                style={{ "--type-color": `${t.color}26` } as React.CSSProperties}
                className={`flex items-center gap-2 rounded transition-colors duration-200 ${type.name === t.name ? "bg-[var(--type-color)]!" : "hover:bg-[var(--type-color)]!"}`}>
                <t.icon />
                <span>{t.buttonName}</span>
                {/* CLOSE BUTTON */}
                {/* {type === t.name && t.name !== "" && (
                  <div
                    className="flex items-center gap-2 ml-auto cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setType("");
                      setSearch("");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}>
                    <X style={{ "--type-color": t.color } as React.CSSProperties} color="var(--type-color)" className="size-4 " />
                  </div>
                )} */}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
