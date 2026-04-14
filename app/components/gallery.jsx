"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, X, Expand, ArrowRight } from "lucide-react";

// 1. Generate the 20 images based on your naming convention
const PHOTOS = Array.from({ length: 43 }, (_, i) => ({
  id: i + 1,
  src: `/assets/image${i + 1}.jpeg`,
  title: i % 2 === 0 ? "Traditional Union" : "Contemporary Elegance",

  category:
    i < 26
      ? "Weddings"
      : i >= 26 && i < 30
        ? "Fashion & Models"
        : i >= 31 && i < 42
          ? "Maternity & Family"
          : "Other",

  span: i % 7 === 0 ? "md:col-span-2 md:row-span-2" : "col-span-1",
}));

const CATEGORIES = [
  "All Work",
  "Weddings",
  "Fashion & Models",
  "Maternity & Family",
  "Rice Feeding",
  "Bratamanda",
  "Birthday & Anniversary",
  "Gunyo Cholo",
  "Editorial & Portraits",
  "Ads & Commercials",
  "Music Videos",
];

export default function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState("All Work");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = useMemo(() => {
    if (activeTab === "All Work") {
      const weddings = PHOTOS.filter((p) => p.category === "Weddings").slice(
        0,
        6,
      );
      const maternity = PHOTOS.filter(
        (p) => p.category === "Maternity & Family",
      ).slice(0, 6);

      return [...weddings, ...maternity];
    }

    return PHOTOS.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <div
      id="gallery"
      className="min-h-screen bg-[#1a0d07] text-white py-24 px-6 relative overflow-hidden"
    >
      {/* Background Subtle Text */}
      <div className="absolute top-20 left-[-5%] text-[12rem] font-serif font-bold text-white/[0.02] select-none pointer-events-none uppercase">
        Gallery
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <span className="flex items-center gap-2 text-[#DAA520] uppercase tracking-[0.5em] text-[10px] font-bold">
              <span className="h-[1px] w-12 bg-[#DAA520]"></span>
              Portfolio
            </span>
            <h2 className="text-5xl md:text-7xl font-serif italic">
              Selected <span className="text-[#9A1E2A] not-italic">Works</span>
            </h2>
          </div>

          {/* Custom Styled Tabs */}
          <Tabs
            defaultValue="All Work"
            onValueChange={setActiveTab}
            className="w-full md:w-auto overflow-auto no-scrollbar "
          >
            <TabsList className="flex whitespace-nowrap bg-white/5 border border-white/10 rounded-none h-auto p-1 backdrop-blur-md">
              {CATEGORIES.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="px-6 py-3 text-[10px] uppercase tracking-widest text-zinc-400 data-[state=active]:bg-[#9A1E2A] data-[state=active]:text-white transition-all rounded-none flex-shrink-0"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </header>

        {/* Dynamic Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`${photo.span} relative overflow-hidden group cursor-pointer border border-white/5`}
                onClick={() => setSelectedPhoto(photo)}
              >
                {/* Image */}
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:grayscale"
                />

                {/* Editorial Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0d07] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="flex justify-end">
                    <div className="p-2 bg-[#DAA520] text-black">
                      <Expand size={16} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[#DAA520] text-[10px] uppercase tracking-[0.3em] font-bold">
                      {photo.category}
                    </p>
                    <h3 className="text-xl font-serif italic text-white">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Link */}
        <div className="mt-16 text-center">
          <button className="group flex items-center gap-4 mx-auto text-zinc-500 hover:text-[#DAA520] transition-colors">
            <span className="uppercase tracking-[0.4em] text-xs font-bold">
              Load More Stories
            </span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-2 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a0d07]/98 backdrop-blur-xl p-4 md:p-12"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative max-w-6xl w-full h-full flex flex-col justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white/50 hover:text-[#DAA520] flex items-center gap-2 uppercase tracking-widest text-[10px]"
              >
                Close <X size={20} />
              </button>

              <div className="relative w-full h-[70vh]">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-8 text-center space-y-2">
                <h2 className="text-4xl font-serif italic text-white">
                  {selectedPhoto.title}
                </h2>
                <div className="flex items-center justify-center gap-4 text-[#DAA520] uppercase tracking-[0.3em] text-[10px] font-bold">
                  <span className="h-[1px] w-8 bg-[#DAA520]"></span>
                  {selectedPhoto.category}
                  <span className="h-[1px] w-8 bg-[#DAA520]"></span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
