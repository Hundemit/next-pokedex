"use client";

import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Pokelist from "./poke-list";
import PokedexHeader from "./(ui)/pokedex-header";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <PokedexHeader className="p-4 bg-background z-10 sticky top-0 border-b border-gray-200 dark:border-gray-800 rounded-t-lg" />
        <Pokelist className="p-4 flex flex-col " />
      </SidebarInset>
    </SidebarProvider>
  );
}
