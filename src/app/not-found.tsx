"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Darkmodebutton } from "@/components/darkmodebutton";

export default function NotFound() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.4,
          y: { type: "spring", visualDuration: 0.4, delay: 0.4, bounce: 0.5 },
        }}
        className="w-full flex justify-end p-4">
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
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900 dark:text-white">404 - Page Not Found</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">The page you&apos;re looking for doesn&apos;t exist.</p>
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
                  <Link href="/pokedex">Go to Pokédex</Link>
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
                  <Link href="/landing">
                    Back to Home <span aria-hidden="true">→</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
