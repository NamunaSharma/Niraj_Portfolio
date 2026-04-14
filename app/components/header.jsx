"use client"; // Required for client-side interactivity in Next.js App Router
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="text-xl font-bold">
        <Image
          src="assets/11/png"
          alt="Logo"
          width={40}
          height={40}
          className="inline-block mr-2"
        />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/packages">Packages</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "Close" : "Menu"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="flex flex-col space-y-2 mt-2 md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/portfolio" onClick={() => setMenuOpen(false)}>
            Portfolio
          </Link>
          <Link href="/packages" onClick={() => setMenuOpen(false)}>
            Packages
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
