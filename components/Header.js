import React from "react";
import { ChevronDownIcon, MenuAlt2Icon } from "@heroicons/react/solid";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" flex items-center  justify-between p-5 sticky top-0 z-30 bg-yellow-400 ">
      {/* Logo  */}
      <h1 className="font-extrabold text-xl md:text-2xl lg:text-3xl">
        Bonfire Adventures
      </h1>

      {/* nav-links appear on screens >= medium */}
      <div className="space-x-2 hidden md:inline-flex">
        <Link href="/">
          <a className="text-xs lg:text-sm font-normal">HOME</a>
        </Link>
        <Link href="/">
          <a className="text-xs lg:text-sm">DESTINATIONS</a>
        </Link>
        <Link href="/">
          <a className="text-xs lg:text-sm">HOTELS</a>
        </Link>
        <Link href="/">
          <a className="text-xs lg:text-sm">CAR RENTALS</a>
        </Link>
        <Link href="/">
          <a className="text-xs lg:text-sm">EVENTS</a>
        </Link>
        <Link href="/">
          <a className="text-xs lg:text-sm">ABOUT US</a>
        </Link>
      </div>

      {/* Clickable hamburger Icon to display navigation on mobile devices */}
      <MenuAlt2Icon className="h-6 font-extrabold md:hidden " />

      {/* user profile */}
      <div className="items-center space-x-1 hidden md:flex ">
        <div className="rounded-full border border-black bg-white h-9 w-9" />
      </div>
    </div>
  );
};

export default Header;
