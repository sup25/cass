"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { NavLinks } from "./navLinks";
import Button from "../button";
import MobileMenu from "./mobile";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="section bg-white">
      <div className="container">
        <div className="w-full flex items-center justify-between  py-6  ">
          <Link href={"/"} className="flex items-center gap-4">
            <Image src="/logo.jpg" height={200} width={200} alt="logo" />
          </Link>
          <div className="w-full justify-end  gap-6 items-center hidden lg:flex">
            {NavLinks.map((navLink) => (
              <Link
                href={navLink.href}
                key={navLink.title}
                className={`cursor-pointer ${
                  pathname === navLink.path
                    ? "text-teal-600 font-semibold "
                    : "text-black"
                }`}
              >
                {navLink.title}
              </Link>
            ))}
            <Button
              onClick={() => router.push("/contact")}
              className="hover:bg-teal-700 bg-teal-600 text-white  "
            >
              Contact Us
            </Button>
          </div>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
