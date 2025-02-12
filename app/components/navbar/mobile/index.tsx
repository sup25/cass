"use client";

import { useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { NavLinks } from "../navLinks";
import Button from "../../button";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden relative">
      {!isOpen && (
        <button
          onClick={toggleMenu}
          className="p-2  focus:outline-none bg-transparent rounded-md relative z-50"
          aria-label="Open Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between ">
            <span className="block h-0.5 w-full bg-black" />
            <span className="block h-0.5 w-full bg-black" />
            <span className="block h-0.5 w-full bg-black" />
          </div>
        </button>
      )}

      {/* Sliding Menu Panel */}
      <div
        className={`fixed top-0 left-0 right-0 h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 focus:outline-none bg-transparent rounded-md"
          aria-label="Close Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className="block h-0.5 w-full bg-black transform rotate-45 translate-y-2" />
            <span className="block h-0.5 w-full bg-black opacity-0" />
            <span className="block h-0.5 w-full bg-black transform -rotate-45 -translate-y-2" />
          </div>
        </button>

        {/* Menu Content */}
        <div className="p-6 flex flex-col gap-6">
          {/* Navigation Items */}
          <nav className="flex flex-col gap-4">
            {NavLinks.map((navLink) => (
              <Link
                href={navLink.href}
                onClick={() => {
                  setIsOpen(false);
                }}
                key={navLink.title}
                className={`${
                  pathname === navLink.path ? "text-teal-600" : "text-black"
                }`}
              >
                {navLink.title}
              </Link>
            ))}
          </nav>
          <Button
            onClick={() => {
              router.push("/contact");
              setIsOpen(false);
            }}
            className="hover:bg-teal-500 bg-teal-600 text-white"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Dark Overlay */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/50 z-30"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default MobileMenu;
