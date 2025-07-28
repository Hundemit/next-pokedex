"use client";

import { X, type LucideIcon } from "lucide-react";

import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { log } from "console";
import { useStore } from "@/store/store";
import { useState } from "react";

export function NavPokemonTypes({
  pokemonTypes,
}: {
  pokemonTypes: {
    name: string;
    icon: LucideIcon;
    color: string;
  }[];
}) {
  const { type, setType } = useStore();
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Pokemon Types</SidebarGroupLabel>
      <SidebarMenu>
        {pokemonTypes.map((t) => (
          <SidebarMenuItem key={t.name}>
            <SidebarMenuButton asChild>
              <div
                role="button"
                onClick={() => {
                  setType(t.name);
                }}
                style={{ "--type-color": t.color } as React.CSSProperties}
                className={`flex items-center gap-2 rounded transition-colors duration-200 ${type === t.name ? "bg-[var(--type-color)]!" : "hover:bg-[var(--type-color)]!"}`}>
                <t.icon />
                <span>{t.name}</span>
                {type === t.name && (
                  <div
                    className="flex items-center gap-2 ml-auto cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setType("");
                    }}>
                    <X className="size-4 " />
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
