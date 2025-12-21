"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLink = (path) =>
    `relative transition ${
      pathname === path
        ? "text-sky-600 font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-sky-600"
        : "text-gray-700 hover:text-sky-600"
    }`;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Sai Jagruti Nagari Patsanstha Logo"
                className="h-10 w-10"
              />
              <div>
                <h1 className="text-sky-600 font-bold text-base sm:text-lg">
                  साई जागृती नागरी पतसंस्था
                </h1>
                <p className="text-xs text-red-600">(मर्या.) मुंबई</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 font-medium">
              <li>
                <Link href="/" className={navLink("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/About" className={navLink("/About")}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/Services" className={navLink("/Services")}>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/Deposit-loans"
                  className={navLink("/Deposit-loans")}
                >
                  Deposits & Loans
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className={navLink("/Contact") + " text-red-600"}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-[5px]"
              aria-label="Toggle menu"
            >
              <span
                className={`h-[2px] w-6 bg-sky-600 transition ${
                  open && "rotate-45 translate-y-[7px]"
                }`}
              ></span>
              <span
                className={`h-[2px] w-6 bg-sky-600 transition ${
                  open && "opacity-0"
                }`}
              ></span>
              <span
                className={`h-[2px] w-6 bg-sky-600 transition ${
                  open && "-rotate-45 -translate-y-[7px]"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ${
          open
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col divide-y">
          <Link
            onClick={() => setOpen(false)}
            href="/"
            className={`px-6 py-4 ${navLink("/")}`}
          >
            Home
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/about"
            className={`px-6 py-4 ${navLink("/about")}`}
          >
            About
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/services"
            className={`px-6 py-4 ${navLink("/services")}`}
          >
            Services
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/deposits-loans"
            className={`px-6 py-4 ${navLink("/deposits-loans")}`}
          >
            Deposits & Loans
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/contact"
            className="px-6 py-4 text-red-600"
          >
            Contact
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
