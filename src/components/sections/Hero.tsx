"use client";

import { ChipRow } from "@/components/ui/Chip";
import { FadeInView } from "@/components/motion/FadeInView";
import { copy } from "@/config/copy";

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative bg-chartreuse text-dark overflow-hidden px-5 min-h-dvh flex flex-col items-center justify-center">
      <div className="relative mx-auto max-w-4xl text-center">
        <FadeInView delay={0.1}>
          <h1 id="hero-heading" className="text-hero text-dark">
            {copy.hero.h1Line1}<br />{copy.hero.h1Line2}
          </h1>
        </FadeInView>

        <FadeInView delay={0.25}>
          <p className="text-hero text-cyan mt-2">{copy.hero.h1Accent}</p>
        </FadeInView>

        <FadeInView delay={0.4}>
          <p className="mt-6 text-lg md:text-xl text-dark/60 max-w-2xl mx-auto leading-relaxed">{copy.hero.subhead}</p>
        </FadeInView>

        <FadeInView delay={0.5}>
          <div className="mt-8">
            <a href={copy.hero.ctaLink} className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-base text-dark transition-all duration-300 cursor-pointer hover:bg-white/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]">
              {copy.hero.cta}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </FadeInView>
      </div>

      {/* Bottom trust chips */}
      <FadeInView delay={0.6}>
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2">
          <ChipRow items={copy.hero.trustChips} variant="dark" />
        </div>
      </FadeInView>
    </section>
  );
}
