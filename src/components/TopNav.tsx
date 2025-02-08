"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

export type NavLinkType = {
  title: string;
  path: string;
};

const navLinks: NavLinkType[] = [
  {
    title: "About",
    path: "#about-me",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Skills",
    path: "#skills",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F]  border-l-transparent border-r-transparent border-t-transparent top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-12 py-2">
        <Link
          href={"/"}
          className="flex items-center align-bottom"
        >
            <Image
                src={"/icons/logo-round.png"}
                alt={"LR-Projects Logo" }
                width={64}
                height={64}
                className="h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16" 
                />
            <span className="pl-4 text-2xl md:text-5xl text-white font-semibold">Stick-It Map</span>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink link={link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;