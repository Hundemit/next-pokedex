"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import PokedexHeader from "@/components/pokedex/pokedex-header";
import { useSidebarStore } from "@/store/store";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarStore();

  return (
    <SidebarProvider open={isSidebarOpen} onOpenChange={(open) => setIsSidebarOpen(open)}>
      <AppSidebar />
      <SidebarInset>
        <PokedexHeader className="p-4 bg-background z-10 sticky top-0 border-b border-gray-200 dark:border-gray-800 rounded-t-lg" />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
