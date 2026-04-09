"use client";

import { VeLogo } from "@/components/icons/VeLogo";
import { copy } from "@/config/copy";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-8 py-4 bg-chartreuse/90 backdrop-blur-md" aria-label="Main navigation">
      <a href="/" aria-label="Ve home">
        <VeLogo className="h-10" variant="blue" />
      </a>
      <div className="flex items-center gap-6">
        <a href="#problem" className="hidden md:inline text-sm font-medium text-cyan hover:text-cyan/80 transition-colors">The problem</a>
        <a href="#comparison" className="hidden md:inline text-sm font-medium text-cyan hover:text-cyan/80 transition-colors">Why Ve</a>
        <a href="#features" className="hidden md:inline text-sm font-medium text-cyan hover:text-cyan/80 transition-colors">Features</a>
        <a href={copy.hero.ctaLink} className="inline-flex items-center rounded-full bg-cyan px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-cyan/90 hover:scale-[1.02] active:scale-[0.98]">{copy.hero.cta}</a>
      </div>
    </nav>
  );
}
