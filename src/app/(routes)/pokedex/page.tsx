"use client";

import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import { Darkmodebutton } from "@/components/darkmodebutton";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Pokelist from "./pokelist";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SearchForm } from "@/components/Sidebar/search-form";
import { useStore } from "@/store/store";

export default function Page() {
  const { type, setType } = useStore();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="p-4 top-0 bg-background z-10 fixed md:static w-full ">
          <div className="flex flex-wrap items-center gap-4 w-full">
            <SidebarTrigger className="" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="">
                  <BreadcrumbLink
                    className="cursor-pointer hover:underline"
                    onClick={() => {
                      setType("");
                    }}>
                    Pokedèx
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {type && (
                  <>
                    <BreadcrumbSeparator className="" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{type}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
            <div className="relative md:ml-auto ml-0 order-3 md:order-2 w-full md:max-w-60 md:flex-1">
              <SearchForm />
            </div>
            <div className="order-2 md:order-3 ml-auto md:ml-0 md:w-auto">
              <Darkmodebutton />
            </div>
          </div>
        </header>
        <section className="p-4 pt-32 md:pt-0 flex flex-col ">
          <Pokelist />
        </section>
      </SidebarInset>
    </SidebarProvider>
  );
}
