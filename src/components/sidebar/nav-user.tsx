"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useSidebarStore } from "@/store/store";
import Link from "next/link";
import { useState } from "react";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
    link: string;
  };
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className="animate-pulse" asChild>
          <Link target="_blank" href={user.link}>
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage className="hover:animate-spin" src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
