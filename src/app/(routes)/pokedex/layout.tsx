"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import PokedexHeader from "@/components/Pokedex/pokedex-header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <PokedexHeader className="p-4 bg-background z-10 sticky top-0 border-b border-gray-200 dark:border-gray-800 rounded-t-lg" />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
