"use client";

import * as React from "react";

import { NavPokemonTypes } from "@/components/Sidebar/nav-pokemon-types";
import { NavUser } from "@/components/Sidebar/nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";
import { getAllPokemonTypes } from "@/lib/pokemon-type-icons";
import Image from "next/image";

const data = {
  user: {
    name: "Jan Hindemit",
    email: "janhindemit1@gmail.com",
    avatar: "/img/me.png",
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
                <Image src="/favicon.ico" alt="Pokedèx" width={24} height={24} />
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
