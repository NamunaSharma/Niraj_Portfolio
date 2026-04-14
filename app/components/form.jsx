"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  CheckCircle2,
  ArrowLeft,
  Send,
  MessageSquare,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  });

  const TARGET_GMAIL = "ckemeke@gmail.com";
  const WHATSAPP_NUMBER = "9840221056";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, eventType: value }));
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();

    const subject = `Inquiry from ${formData.name} - ${formData.eventType}`;
    const body = `
      New Inquiry for Katha Ghar Studio:
      ---------------------------------
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Event: ${formData.eventType}
      Date: ${formData.date}
      Message: ${formData.message}
    `;

    if (type === "whatsapp") {
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
      window.open(waUrl, "_blank");
    } else {
      // Direct Gmail Frontend Trigger
      const mailtoUrl = `mailto:${TARGET_GMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    }

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-32 px-6 bg-[#1a0d07] text-white min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-8 relative z-10"
        >
          <div className="mx-auto w-24 h-24 bg-[#9A1E2A]/20 rounded-full flex items-center justify-center border border-[#9A1E2A]/50">
            <CheckCircle2 className="text-[#DAA520] w-12 h-12" />
          </div>
          <div className="space-y-4">
            <h2 className="text-5xl font-serif italic">
              Aakhiru, <span className="text-[#DAA520] not-italic">Sent!</span>
            </h2>
            <p className="text-zinc-400 font-light tracking-wide">
              Your story has reached us. We usually respond within 24 hours to
              begin crafting your visual legacy.
            </p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-[#DAA520] uppercase tracking-[0.4em] text-[10px] font-bold flex items-center gap-2 mx-auto hover:gap-4 transition-all"
          >
            <ArrowLeft size={14} /> Send Another Inquiry
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-[#1a0d07] text-white relative overflow-hidden"
    >
      {/* Editorial Background Text */}
      <div className="absolute top-20 left-[-5%] text-[15rem] font-serif font-bold text-white/[0.02] select-none pointer-events-none uppercase">
        Contact
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Left Side: Editorial Content */}
          <div className="space-y-16">
            <div className="space-y-6">
              <span className="flex items-center gap-2 text-[#DAA520] uppercase tracking-[0.5em] text-[10px] font-bold">
                <span className="h-[1px] w-12 bg-[#DAA520]"></span> Available
                Worldwide
              </span>
              <h2 className="text-6xl md:text-8xl font-serif leading-none">
                Let’s Write <br />
                <span className="text-[#9A1E2A] italic">Your Story</span>
              </h2>
              <p className="text-zinc-500 max-w-md leading-relaxed">
                Whether it's a grand wedding in Kathmandu or a boutique
                editorial in Paris, we are ready to capture the soul of your
                moment.
              </p>
            </div>

            <div className="space-y-10">
              <ContactDetail
                icon={<Mail />}
                label="Email Us"
                value="ckemeke@gmail.com"
              />
              <ContactDetail
                icon={<Phone />}
                label="Inquiries"
                value="+977 9840221056"
              />
              <ContactDetail
                icon={<MapPin />}
                label="Studio"
                value="Lalitpur, Nepal"
              />
            </div>

            <div className="flex gap-8 pt-6">
              <SocialLink icon={<Instagram />} link="#" />
              <SocialLink icon={<Facebook />} link="#" />
            </div>
          </div>

          {/* Right Side: The Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/[0.03] backdrop-blur-xl p-10 md:p-16 border border-white/10 relative"
          >
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#DAA520]/40"></div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <FloatingInput
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <FloatingInput
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <FloatingInput
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#DAA520] font-bold">
                    Event Type
                  </label>
                  <Select onValueChange={handleSelectChange}>
                    <SelectTrigger className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus:ring-0 text-white h-10">
                      <SelectValue placeholder="Select Occasion" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a0d07] text-white border-white/10">
                      <SelectItem value="Wedding">Wedding Ceremony</SelectItem>
                      <SelectItem value="Fashion">Fashion Editorial</SelectItem>
                      <SelectItem value="Reception">
                        Wedding Reception
                      </SelectItem>
                      <SelectItem value="Mehendi">Mehendi Night</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <FloatingInput
                label="Preferred Date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleInputChange}
              />

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#DAA520] font-bold">
                  Your Vision
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about the atmosphere you want to capture..."
                  className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#DAA520] min-h-[100px] transition-colors"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="button"
                  onClick={(e) => handleSubmit(e, "email")}
                  className="flex-1 bg-[#9A1E2A] text-white py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#b32432] transition-all flex items-center justify-center gap-3"
                >
                  <Mail size={14} /> Send to Gmail
                </button>
                <button
                  type="button"
                  onClick={(e) => handleSubmit(e, "whatsapp")}
                  className="flex-1 border border-[#DAA520] text-[#DAA520] py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#DAA520] hover:text-black transition-all flex items-center justify-center gap-3"
                >
                  <MessageSquare size={14} /> WhatsApp Us
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENTS ---

function FloatingInput({ label, name, type = "text", value, onChange }) {
  return (
    <div className="space-y-2 group">
      <label className="text-[10px] uppercase tracking-[0.2em] text-[#DAA520] font-bold transition-colors group-focus-within:text-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-transparent border-0 border-b border-white/20 py-2 focus:outline-none focus:border-[#DAA520] transition-colors text-white placeholder:text-zinc-700"
      />
    </div>
  );
}

function ContactDetail({ icon, label, value }) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#DAA520] group-hover:bg-[#DAA520] group-hover:text-black transition-all duration-500">
        {React.cloneElement(icon, { size: 18 })}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
          {label}
        </p>
        <p className="text-lg font-serif italic">{value}</p>
      </div>
    </div>
  );
}

function SocialLink({ icon, link }) {
  return (
    <a
      href={link}
      className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:text-[#DAA520] hover:border-[#DAA520] transition-all duration-300"
    >
      {React.cloneElement(icon, { size: 20 })}
    </a>
  );
}
