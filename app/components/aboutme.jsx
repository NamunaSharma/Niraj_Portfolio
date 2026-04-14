"use client";

import React from "react";
import { Camera, Award, TrendingUp, Heart, Star } from "lucide-react";

/**
 * AboutSection for Katha Ghar Studio
 * Optimized with cultural premium colors and editorial layout
 */
const stats = [
  {
    icon: <Camera size={28} />,
    title: "500+ Weddings",
    subtitle: "Cultural & Contemporary stories captured across Nepal.",
    id: "01",
  },
  {
    icon: <Award size={28} />,
    title: "Award Winner",
    subtitle: "Recognized for excellence in Cinematography 2024.",
    id: "02",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Editorial",
    subtitle: "Work featured in high-fashion and bridal magazines.",
    id: "03",
  },
  {
    icon: <Heart size={28} />,
    title: "98% Love",
    subtitle: "Client satisfaction rooted in trust and artistic vision.",
    id: "04",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#1a0d07] text-white px-6 md:px-20 py-32 overflow-hidden"
    >
      {/* Background Decorative Text */}
      <div className="absolute top-10 right-[-5%] text-[15rem] font-serif font-bold text-white/[0.02] select-none pointer-events-none uppercase">
        Katha
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="flex items-center gap-2 text-[#DAA520] uppercase tracking-[0.5em] text-[10px] font-bold mb-4">
              <span className="h-[1px] w-12 bg-[#DAA520]"></span>
              Our Philosophy
            </span>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight">
              The Art of{" "}
              <span className="text-[#9A1E2A] italic">Storytelling</span> <br />
              Through the Lens
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base border-l border-[#DAA520]/30 pl-6">
              With over 8 years of weaving visual narratives, Katha Ghar Studio
              specializes in the intersection of tradition and modern elegance.
              We don't just take photos; we preserve heritage.
            </p>
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#221008]/40 p-10 border-r border-b lg:border-b-0 border-white/10 transition-all duration-500 hover:bg-[#9A1E2A]/10 overflow-hidden"
            >
              {/* Subtle Background ID */}
              <span className="absolute top-6 right-8 text-4xl font-serif text-white/5 group-hover:text-[#DAA520]/20 transition-colors">
                {item.id}
              </span>

              {/* Icon with Glowing Effect */}
              <div className="relative mb-8 inline-block">
                <div className="absolute inset-0 bg-[#DAA520]/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative text-[#DAA520] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-serif text-white mb-4 tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                {item.title}
              </h3>

              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                {item.subtitle}
              </p>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#DAA520] group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Closing Signature/CTA */}
        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <div className="h-20 w-[1px] bg-gradient-to-b from-[#DAA520] to-transparent mb-8"></div>
          <p className="font-serif italic text-zinc-400 max-w-lg">
            "We believe every frame should feel like a page from a royal
            archive."
          </p>
          <div className="flex items-center gap-2 mt-4 text-[#DAA520]">
            <Star size={12} fill="#DAA520" />
            <Star size={12} fill="#DAA520" />
            <Star size={12} fill="#DAA520" />
            <Star size={12} fill="#DAA520" />
            <Star size={12} fill="#DAA520" />
          </div>
        </div>
      </div>
    </section>
  );
}
