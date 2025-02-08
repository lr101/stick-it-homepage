"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
    path: "https://lr-projects.de",
  },
  {
    title: "Our Stickers",
    path: "https://www.etsy.com/shop/MonaSticker",
  },
  {
    title: "Delete Account",
    path: "https://stick-it.lr-projects.de/public/delete-account/code",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-40 w-full pb-5 transition-all duration-300 text-white ${sticky ? " shadow-lg bg-black pt-5" : "shadow-none md:pt-14 pt-5"}`}>
      <div className="flex container flex-wrap items-center justify-between mx-auto px-12 py-2">
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
            <span className="pl-4 text-2xl md:text-5xl font-semibold">Stick-It Map</span>
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