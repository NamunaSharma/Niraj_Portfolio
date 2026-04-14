"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";

const weddingPackages = [
  {
    title: "Mehendi",
    price: "NRS 40,000",
    features: [
      "2 Professional Photographers (Candid & Traditional)",
      "2 Videographers (Cinematic & Documentary)",
      "300+ Professionally Edited Photos",
      "Full-Day Event Coverage",
      "20-Page Premium Photobook",
    ],
  },
  {
    title: "Premium Wedding",
    price: "NRS 2,35,000",
    popular: true,
    features: [
      "Includes Both the bride side and groom side coverage",
      "Lead Photographer + Candid Specialist",
      "2 Videographers (Cinematic & Event Coverage)",
      "1000+ Professionally Edited Photos",
      "High-Quality Wedding Album",
      "Full-Day Event Coverage",
      "Drone Photography Coverage",
      "Reception Coverage Included",
      "Post-Wedding Editorial Shoot (Optional)",
      "Engagement Shoot Included",
    ],
  },
  {
    title: "Luxury Wedding",
    price: "NRS 2,10,000",
    features: [
      "Includes Both the bride side and groom side coverage",
      "4 Expert Photographers (Candid & Traditional)",
      "4 Cinematographers (Cinematic & Documentary)",
      "Dedicated Reel Creator (Social Media)",
      "2000+ Professionally Edited Photos",
      "Video Highlights: 5-7 minute cinematic film",
      "Premium Designer Wedding Album",
      "Drone Coverage (4K)",
      "Reception Coverage Included",
      "Post-Wedding Editorial Shoot",
    ],
  },
];

// const receptionPackages = [
//   {
//     title: "Reception (Premium)",
//     price: "NRS 75,000",
//     popular: true,
//     features: [
//       "2 Professional Photographers",
//       "2 Videographers (Cinematic)",
//       "300+ Edited Photos",
//       "Full-Day Coverage",
//       "20-Page Premium Photobook",
//     ],
//   },
//   {
//     title: "Portfolio Shoot",
//     price: "NRS 25,000",
//     features: [
//       "Multiple outfit changes",
//       "100+ edited photos",
//       "Advanced retouching",
//       "Branding consultation",
//     ],
//   },
// ];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function PricingCard({ pkg }) {
  return (
    <motion.div
      variants={cardVariants}
      className={`relative p-10 flex flex-col h-full border ${
        pkg.popular
          ? "border-[#DAA520] bg-[#221008]/60 shadow-[0_0_40px_rgba(218,165,32,0.1)]"
          : "border-white/10 bg-white/[0.02] hover:border-[#DAA520]/40"
      } transition-all duration-700`}
    >
      {pkg.popular && (
        <div className="absolute top-0 left-0 w-full flex justify-center -translate-y-1/2">
          <div className="bg-[#DAA520] text-black text-[10px] px-6 py-2 font-bold uppercase tracking-[0.3em] flex items-center gap-2">
            <Sparkles size={12} /> Selection of the Season
          </div>
        </div>
      )}

      <div className="mb-10 text-center md:text-left">
        <h3 className="text-[#DAA520] text-xs uppercase tracking-[0.4em] font-bold mb-4">
          {pkg.title}
        </h3>
        <div className="flex items-baseline justify-center md:justify-start gap-1">
          <p className="text-white text-4xl md:text-5xl font-serif italic">
            {pkg.price.split(" ")[1]}
          </p>
          <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest ml-2">
            {pkg.price.split(" ")[0]}
          </span>
        </div>
      </div>

      <div className="w-12 h-[1px] bg-[#DAA520] mb-8 mx-auto md:mx-0"></div>

      <ul className="space-y-5 text-zinc-400 mb-12 flex-grow">
        {pkg.features.map((feature, i) => (
          <li
            key={i}
            className="flex items-start gap-4 text-xs tracking-wide leading-relaxed"
          >
            <Check size={14} className="text-[#DAA520] mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`relative group overflow-hidden w-full py-5 text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-500 ${
          pkg.popular
            ? "bg-[#9A1E2A] text-white"
            : "border border-white/20 text-white hover:border-[#DAA520]"
        }`}
      >
        <span className="relative z-10">Reserve This Story</span>
        {pkg.popular && (
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 mix-blend-difference" />
        )}
      </button>
    </motion.div>
  );
}

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-[#1a0d07] text-white px-6 md:px-20 py-32 relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-[-10%] text-[20rem] font-serif font-bold text-white/[0.01] select-none pointer-events-none">
        Katha
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-[#DAA520] uppercase tracking-[0.5em] text-[10px] font-bold block mb-4">
            Investment Portfolio
          </span>
          <h2 className="text-6xl md:text-8xl font-serif italic">
            Packages <span className="text-[#9A1E2A] not-italic">&</span>{" "}
            Collections
          </h2>
          <div className="h-[2px] w-24 bg-[#9A1E2A] mx-auto mt-8"></div>
        </motion.div>

        {/* Wedding Collection */}
        <div className="mb-40">
          <div className="flex items-center gap-6 mb-16">
            <h3 className="text-xl font-serif italic text-white whitespace-nowrap italic">
              The Wedding <span className="text-[#DAA520]">Archive</span>
            </h3>
            <div className="h-[1px] w-full bg-white/10"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {weddingPackages.map((pkg, index) => (
              <PricingCard key={index} pkg={pkg} />
            ))}
          </motion.div>
        </div>

        {/* Reception/Fashion Collection */}
        {/* <div>
          <div className="flex items-center gap-6 mb-16">
            <h3 className="text-xl font-serif italic text-white whitespace-nowrap italic">
              Social <span className="text-[#DAA520]">&</span> Editorial
            </h3>
            <div className="h-[1px] w-full bg-white/10"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {receptionPackages.map((pkg, index) => (
              <PricingCard key={index} pkg={pkg} />
            ))}
          </motion.div>
        </div> */}
      </div>
    </section>
  );
}
