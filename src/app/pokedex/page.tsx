"use client";

import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import { Darkmodebutton } from "@/components/darkmodebutton";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Pokelist from "./pokelist";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

export default function Page() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const handleTypeChange = (value: string) => {
    setType(value);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="p-4 top-0 bg-background z-10 fixed md:static w-full ">
          <div className="flex flex-wrap items-center gap-4 w-full">
            <SidebarTrigger className="" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <h1 className="text-2xl font-bold">Pokedèx</h1>
            <div className="md:ml-auto ml-0 order-3 md:order-2 w-full md:w-auto">
              <div className="relative">
                <Label htmlFor="search" className="sr-only">
                  Search
                </Label>
                <Input id="search" placeholder="Search the Pokedex..." className="pl-8 md:w-56 w-full" value={search} onChange={(e) => setSearch(e.target.value)} />
                <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
              </div>
            </div>
            <div className="order-2 md:order-3 ml-auto md:ml-0 md:w-auto">
              <Darkmodebutton />
            </div>
          </div>
        </header>
        <section className="p-4 pt-32 md:pt-0 flex flex-col ">
          <Pokelist type={type} search={search} onTypeChange={handleTypeChange} />
        </section>
      </SidebarInset>
    </SidebarProvider>
  );
}
