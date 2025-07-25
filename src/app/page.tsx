"use client";

import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Darkmodebutton } from "@/components/darkmodebutton";

export default function Page() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center ">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5, delay: 0.4 },
          delay: 0.4,
        }}
        className=" w-full flex justify-end p-4">
        <Darkmodebutton />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 px-4">
          <div className=" mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 dark:text-white ring-gray-900/10 dark:ring-gray-700 dark:hover:ring-gray-300 hover:ring-gray-900/20">
              Here are more of my projects.{" "}
              <a href="https://janhindemit.de/" target="_blank" className="font-semibold text-blue-600">
                <span className="absolute inset-0" aria-hidden="true"></span>Link <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl text-gray-900 dark:text-white">A simple and easy Pokédex.</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">The project was built using Next.js and the PokéAPI.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.4,
                  y: { type: "spring", visualDuration: 0.4, delay: 0.4, bounce: 0.5 },
                }}>
                <Button variant="outline" asChild>
                  <Link href={"/pokedex"}>Pokédex</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6,
                  y: { type: "spring", visualDuration: 0.4, delay: 0.6, bounce: 0.5 },
                }}>
                <Button variant="ghost" asChild>
                  <a href="https://janhindemit.de/" target="_blank">
                    About me <span aria-hidden="true">→</span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
