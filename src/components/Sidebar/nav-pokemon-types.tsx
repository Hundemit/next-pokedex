"use client";

import { type LucideIcon } from "lucide-react";

import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { log } from "console";

export function NavPokemonTypes({
  pokemonTypes,
}: {
  pokemonTypes: {
    name: string;
    url: string;
    icon: LucideIcon;
    color: string;
  }[];
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Pokemon Types</SidebarGroupLabel>
      <SidebarMenu>
        {pokemonTypes.map((type) => (
          <SidebarMenuItem key={type.name}>
            <SidebarMenuButton asChild>
              <a
                href={type.url}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = type.color)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                style={{ transition: "background-color 0.2s" }}>
                <type.icon />
                <span>{type.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
