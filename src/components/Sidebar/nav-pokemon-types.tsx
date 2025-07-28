"use client";

import { X } from "lucide-react";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useStore } from "@/store/store";
import { PokemonType } from "@/lib/pokemon-type-icons";

export function NavPokemonTypes({ pokemonTypes }: { pokemonTypes: PokemonType[] }) {
  const { type, setType } = useStore();
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Pokemon Types</SidebarGroupLabel>
      <SidebarMenu>
        {pokemonTypes.map((t) => (
          <SidebarMenuItem key={t.buttonName}>
            {/* TYPE BUTTON */}
            <SidebarMenuButton asChild>
              <div
                role="button"
                onClick={() => {
                  setType(t.name);
                }}
                style={{ "--type-color": `${t.color}26` } as React.CSSProperties}
                className={`flex items-center gap-2 rounded transition-colors duration-200 ${type === t.name ? "bg-[var(--type-color)]!" : "hover:bg-[var(--type-color)]!"}`}>
                <t.icon />
                <span>{t.buttonName}</span>
                {/* CLOSE BUTTON */}
                {type === t.name && t.name !== "" && (
                  <div
                    className="flex items-center gap-2 ml-auto cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setType("");
                    }}>
                    <X style={{ "--type-color": t.color } as React.CSSProperties} color="var(--type-color)" className="size-4 " />
                  </div>
                )}
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
