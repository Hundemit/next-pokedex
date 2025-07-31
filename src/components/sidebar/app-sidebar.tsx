"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarRail } from "@/components/ui/sidebar";
import { NavPokemonTypes } from "./nav-pokemon-types";
import { NavUser } from "./nav-user";

// This is sample data.
const data = {
  user: {
    name: "Jan Hindemit",
    email: "janhindemit1@gmail.com",
    avatar: "/img/me.png",
    link: "https://janhindemit.de",
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/landing">
                <Image src="/favicon.ico" alt="Pokedèx" width={32} height={32} />
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Pokedèx</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavPokemonTypes />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
