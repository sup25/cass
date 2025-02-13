"use client";
import React from "react";

import MobileMenu from "./mobile";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between  py-10 z-[99999] ">
      <Link href={"/"} className="flex items-center gap-4">
        <Image src="/logo.jpg" height={200} width={200} alt="logo" />
      </Link>

      <MobileMenu />
    </div>
  );
};

export default Navbar;
