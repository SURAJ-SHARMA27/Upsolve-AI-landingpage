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
        <MenuItem setActive={setActive} active={active} item='Products'>
        <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/web-dev">Sid</HoveredLink>
        <HoveredLink href="/web-dev">Chi Core</HoveredLink>
        <HoveredLink href="/web-dev">Chi Alan</HoveredLink>
        <HoveredLink href="/web-dev">Chi Nexus</HoveredLink>

        </div>

         </MenuItem>
         <MenuItem setActive={setActive} active={active} item='Industry Reports'>
        <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/web-dev">Hospitality</HoveredLink>
        <HoveredLink href="/web-dev">Energy & Chemicals</HoveredLink>
        <HoveredLink href="/web-dev">Financial Services</HoveredLink>
        <HoveredLink href="/web-dev">Life Sciences</HoveredLink>
        <HoveredLink href="/web-dev">Manufacturing & Distribution</HoveredLink>
        <HoveredLink href="/web-dev">Financial Services</HoveredLink>



        </div>

         </MenuItem>
         <Link href={"/docs"}>
        <MenuItem setActive={setActive} active={active} item='Workshops'>
         </MenuItem>
        </Link>
        <Link href={"/Carrer"}>
        <MenuItem setActive={setActive} active={active} item='Security & Privacy'>
         </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item='Company'>
        <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/web-dev">Carrers</HoveredLink>
        <HoveredLink href="/web-dev">About</HoveredLink>
        <HoveredLink href="/web-dev">News</HoveredLink>
               </div>

         </MenuItem>
        </Menu>        
        </div>
  )
}

export default Navbar