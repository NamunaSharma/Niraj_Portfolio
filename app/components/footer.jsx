import React from "react";
import Link from "next/link";
import { Mail, Phone, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative bg-[#1a0d07] text-zinc-400 px-6 md:px-20 py-24 overflow-hidden border-t border-white/5"
    >
      {/* Subtle Background Watermark */}
      <div className="absolute bottom-[-10%] left-[-5%] text-[15rem] font-serif font-bold text-white/[0.02] select-none pointer-events-none uppercase">
        Katha
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 md:gap-12">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-2 space-y-8">
            <Image
              src="/assets/11.png"
              alt="Katha Ghar Logo"
              width={180}
              height={120}
              unoptimized
              className="brightness-110 contrast-125"
            />
            <p className="max-w-sm leading-relaxed text-sm tracking-wide">
              We specialize in the art of visual storytelling, preserving the
              heritage of your most precious moments through the intersection of
              tradition and modern elegance.
            </p>
            <div className="flex gap-4">
              <SocialButton icon={<Instagram size={18} />} link="#" />
              <SocialButton icon={<Facebook size={18} />} link="#" />
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-white text-xs uppercase tracking-[0.4em] font-bold mb-8 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#DAA520]"></span> Navigation
            </h3>
            <ul className="space-y-4">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About Me" />
              <FooterLink href="/portfolio" label="Portfolio" />
              <FooterLink href="/packages" label="Investment" />
              <FooterLink href="/contact" label="Contact" />
            </ul>
          </div>

          {/* Column 3: Inquiries */}
          <div>
            <h3 className="text-white text-xs uppercase tracking-[0.4em] font-bold mb-8 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#DAA520]"></span> Connect
            </h3>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
                  Email Us
                </p>
                <div className="flex items-center gap-2 text-white group-hover:text-[#DAA520] transition-colors">
                  <Mail size={14} className="text-[#9A1E2A]" />
                  <span className="text-sm font-serif italic">
                    ckemeke@gmail.com
                  </span>
                </div>
              </div>

              <div className="group cursor-pointer">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
                  Call Us
                </p>
                <div className="flex items-center gap-2 text-white group-hover:text-[#DAA520] transition-colors">
                  <Phone size={14} className="text-[#9A1E2A]" />
                  <span className="text-sm font-serif italic">
                    +977 9861196616
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            © {currentYear} Katha Ghar Studio. Crafted for capturing legends.
          </p>

          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 hover:text-[#DAA520] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 hover:text-[#DAA520] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- HELPER COMPONENTS (NO TYPES) ---

function FooterLink({ href, label }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm hover:text-[#DAA520] transition-all duration-300 flex items-center gap-2 group"
      >
        <ArrowUpRight
          size={12}
          className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
        />
        {label}
      </Link>
    </li>
  );
}

function SocialButton({ icon, link }) {
  return (
    <a
      href={link}
      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-[#DAA520] hover:border-[#DAA520] transition-all duration-500"
    >
      {icon}
    </a>
  );
}
