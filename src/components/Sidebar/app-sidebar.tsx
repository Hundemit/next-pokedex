"use client";

import * as React from "react";
import { Frame, Map, PieChart, LoaderPinwheel } from "lucide-react";

import { NavPokemonTypes } from "@/components/sidebar/nav-pokemon-types";
import { NavUser } from "@/components/sidebar/nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";
import { getAllPokemonTypes } from "@/lib/pokemon-type-icons";

const data = {
  user: {
    name: "Jan Hindemit",
    email: "janhindemit1@gmail.com",
    avatar: "/avatars/shadcn.jpg",
    link: "https://janhindemit.de",
  },

  pokemonTypes: getAllPokemonTypes().map((type) => ({
    name: type.name,
    url: `/pokedex/types/${type.name.toLowerCase()}`,
    icon: type.icon,
    color: type.color,
  })),
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/landing">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <LoaderPinwheel className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Pokedèx</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavPokemonTypes pokemonTypes={getAllPokemonTypes()} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
