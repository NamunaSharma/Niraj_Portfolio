"use client";

import React, { useState } from "react";
import { Menu, X, Camera, Instagram, PlayCircle } from "lucide-react";
import Image from "next/image";

/**
 * Premium Hero Component for Katha Ghar Studio
 * Optimized with Deep Maroon (#9A1E2A) and Royal Gold (#DAA520)
 */
export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Portfolio", href: "#gallery" },
    { name: "The Studio", href: "#about" },
    { name: "Investment", href: "#pricing" },
    { name: "Contact", href: "#form" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col bg-[#1a0d07] overflow-hidden"
    >
      {/* Background Texture & Gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#221008] via-[#1a0d07] to-black z-0" />

      {/* Animated Light Spotlight */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#DAA520]/10 blur-[120px] rounded-full z-0 animate-pulse" />

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 flex items-center justify-between backdrop-blur-md border-b border-white/5 transition-all duration-500">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/11.png"
            alt="Katha Ghar Logo"
            width={120}
            height={80}
            className="hover:scale-105 transition-transform duration-300"
            unoptimized
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.3em] text-white/70 hover:text-[#DAA520] transition-all duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#form"
            className="px-5 py-2 border border-[#DAA520] text-[#DAA520] text-[10px] uppercase tracking-widest hover:bg-[#DAA520] hover:text-black transition-all"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Main Content Area */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center gap-16 max-w-7xl mx-auto px-6 pt-32 pb-12 grow w-full">
        {/* LEFT: The Artist/Studio Visual */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 text-[#DAA520]/20 hidden lg:block">
            <Camera size={120} strokeWidth={0.5} />
          </div>

          <div className="relative z-10">
            {/* The "Golden Frame" */}
            <div className="absolute -inset-4 border border-[#DAA520]/40 rounded-sm translate-x-3 translate-y-3 z-0"></div>

            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
              <Image
                src="/assets/11.png" // User's requested placement
                alt="Lead Photographer"
                width={450}
                height={600}
                className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-6 -right-8 bg-[#9A1E2A] p-4 shadow-xl hidden sm:block animate-bounce-slow">
              <p className="text-[#DAA520] text-[10px] tracking-[0.2em] uppercase font-bold">
                Lifestyle & Wedding
              </p>
              <p className="text-white text-xs font-serif italic">
                Nepal Edition
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: The Narrative Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="space-y-1 mb-6">
            <span className="flex items-center gap-2 text-[#DAA520] uppercase tracking-[0.6em] text-[10px] font-bold">
              <span className="h-[1px] w-8 bg-[#DAA520]"></span>
              Katha Ghar Studio
            </span>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif text-white tracking-tighter leading-[0.8] mt-2">
              Katha <span className="text-[#9A1E2A]">Ghar</span>
            </h1>
          </div>

          <div className="space-y-6 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-serif italic text-[#ccbf9f] leading-relaxed">
              Every home has a story; we make yours{" "}
              <span className="text-[#DAA520]">eternal</span>.
            </h2>

            <p className="text-zinc-400 text-sm md:text-base leading-relaxed tracking-wide font-light">
              Premium cinematography and photography tailored to the soul of
              Nepali traditions. From royal weddings to intimate fashion
              portraits, we capture the art of being you.
            </p>

            {/* Interactive Stats/Features */}
            <div className="flex gap-8 py-4 border-y border-white/5">
              <div>
                <p className="text-[#DAA520] font-bold text-xl">500+</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                  Stories Told
                </p>
              </div>
              <div className="border-l border-white/10 pl-8">
                <p className="text-[#DAA520] font-bold text-xl">Premium</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                  Equipment
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <a
                href="#gallery"
                className="group relative px-10 py-4 bg-[#DAA520] overflow-hidden"
              >
                <span className="relative z-10 text-black font-bold uppercase tracking-widest text-sm">
                  Explore Gallery
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <button className="flex items-center gap-3 text-white hover:text-[#DAA520] transition-colors group">
                <PlayCircle className="group-hover:scale-110 transition-transform" />
                <span className="uppercase tracking-[0.2em] text-xs font-bold">
                  Watch Film
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Sidebar (Desktop) */}
      <div className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-6 z-30 after:content-[''] after:w-[1px] after:h-24 after:bg-[#DAA520]/30 after:mt-4">
        <a
          href="#"
          className="text-zinc-500 hover:text-[#DAA520] transition-colors"
        >
          <Instagram size={20} />
        </a>
        <p className="rotate-90 origin-left translate-x-3 translate-y-[-60px] text-[10px] tracking-[0.5em] uppercase text-zinc-500 whitespace-nowrap">
          Follow Our Story
        </p>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
