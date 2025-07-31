"use client";

import { X } from "lucide-react";

import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton } from "@/components/ui/sidebar";
import { pokemonTypeIcons } from "@/lib/pokemon-type-icons";
import { useSidebarStore, useStore } from "@/store/store";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "motion/react";
import { log } from "console";

export function NavPokemonTypes() {
  const router = useRouter();
  const { type, setType, setSearch, setPokemonName, setPage } = useStore();
  const { isSidebarOpen } = useSidebarStore();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {Object.values(pokemonTypeIcons).map((t, index) => (
          <SidebarMenuItem key={t.buttonName}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.02,
                y: {
                  type: "spring",
                  delay: index * 0.02,
                  duration: 0.5,
                  bounce: 0.5,
                },
              }}>
              <SidebarMenuButton
                onClick={() => {
                  router.push(`/pokedex`);
                  // if the sidebar is closed and the type is the same as the current type, set the type to all
                  if (!isSidebarOpen && type.name === t.name && t.name !== "all") {
                    setType(pokemonTypeIcons["all"]);
                    setSearch("");
                  } else {
                    setType(t);
                    setSearch("");
                    setPokemonName("");
                    setPage(1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                tooltip={t.buttonName}
                style={{ "--type-color": `${t.color}80` } as React.CSSProperties}
                className={`transition-colors duration-500 ease-in-out ${type.name === t.name ? "bg-[var(--type-color)]!" : "hover:bg-[var(--type-color)]!"} `}>
                <t.icon />
                <span className="mr-auto">{t.buttonName}</span>

                {type.name === t.name && t.name !== "all" && (
                  <div
                    className="flex items-center gap-2 p-1 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setType(pokemonTypeIcons["all"]);
                      setSearch("");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}>
                    <X style={{ "--type-color": t.color } as React.CSSProperties} color="var(--type-color)" className="size-4 " />
                  </div>
                )}
              </SidebarMenuButton>
            </motion.div>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
