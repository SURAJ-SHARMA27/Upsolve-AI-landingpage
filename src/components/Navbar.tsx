'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
  >
    <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item='Home'>
         </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item='Customer Stories'>
        <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/web-dev">Case Study</HoveredLink>
        <HoveredLink href="/web-dev">Signup Today</HoveredLink>
        <HoveredLink href="/web-dev">Development</HoveredLink>
        </div>

         </MenuItem>
         <Link href={"/docs"}>
        <MenuItem setActive={setActive} active={active} item='Docs'>
         </MenuItem>
        </Link>
        <Link href={"/Carrer"}>
        <MenuItem setActive={setActive} active={active} item='Carrer'>
         </MenuItem>
        </Link>
        
        </Menu>        
        </div>
  )
}

export default Navbar