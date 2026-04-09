"use client";

import { FadeInView } from "@/components/motion/FadeInView";

export function ShowcaseCard() {
  return (
    <section className="bg-dark px-5 md:px-8 py-6 md:py-10">
      <FadeInView>
        <div className="mx-auto max-w-6xl rounded-3xl overflow-hidden bg-[#0c1218] shadow-2xl">
          <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[560px]">
            {/* Left — abstract visual */}
            <div className="relative flex-1 overflow-hidden">
              {/* Layered gradient landscape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#0d3a5c] to-[#0a1a2e]" />

              {/* Glowing orb — like a moon/sun */}
              <div className="absolute top-[20%] left-[30%] w-32 h-32 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-cyan/30 to-cyan/5 blur-2xl" />
              <div className="absolute top-[22%] left-[32%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-md" />

              {/* Abstract connection lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 500" fill="none" preserveAspectRatio="none">
                <circle cx="120" cy="150" r="4" fill="#299FD2" />
                <circle cx="250" cy="200" r="4" fill="#299FD2" />
                <circle cx="180" cy="320" r="4" fill="#299FD2" />
                <circle cx="300" cy="280" r="4" fill="#299FD2" />
                <circle cx="80" cy="350" r="4" fill="#299FD2" />
                <circle cx="320" cy="120" r="3" fill="#299FD2" opacity="0.5" />
                <circle cx="200" cy="420" r="3" fill="#299FD2" opacity="0.5" />
                <line x1="120" y1="150" x2="250" y2="200" stroke="#299FD2" strokeWidth="0.5" opacity="0.4" />
                <line x1="250" y1="200" x2="180" y2="320" stroke="#299FD2" strokeWidth="0.5" opacity="0.4" />
                <line x1="180" y1="320" x2="300" y2="280" stroke="#299FD2" strokeWidth="0.5" opacity="0.4" />
                <line x1="300" y1="280" x2="250" y2="200" stroke="#299FD2" strokeWidth="0.5" opacity="0.3" />
                <line x1="120" y1="150" x2="80" y2="350" stroke="#299FD2" strokeWidth="0.5" opacity="0.3" />
                <line x1="80" y1="350" x2="180" y2="320" stroke="#299FD2" strokeWidth="0.5" opacity="0.3" />
                <line x1="320" y1="120" x2="250" y2="200" stroke="#299FD2" strokeWidth="0.5" opacity="0.2" />
                <line x1="180" y1="320" x2="200" y2="420" stroke="#299FD2" strokeWidth="0.5" opacity="0.2" />
              </svg>

              {/* Floating meeting cards */}
              <div className="absolute top-[15%] left-[10%] bg-white/[0.07] backdrop-blur-sm rounded-xl px-4 py-3 border border-white/[0.08]">
                <p className="text-[11px] text-cyan font-medium">Q3 Planning</p>
                <p className="text-[10px] text-white/30 mt-0.5">Tuesday 2:00 PM</p>
              </div>
              <div className="absolute top-[45%] left-[15%] bg-white/[0.07] backdrop-blur-sm rounded-xl px-4 py-3 border border-white/[0.08]">
                <p className="text-[11px] text-white/60 font-medium">1:1 with Sarah</p>
                <p className="text-[10px] text-white/30 mt-0.5">Weekly</p>
              </div>
              <div className="absolute bottom-[20%] left-[25%] bg-white/[0.07] backdrop-blur-sm rounded-xl px-4 py-3 border border-white/[0.08]">
                <p className="text-[11px] text-white/60 font-medium">Investor update</p>
                <p className="text-[10px] text-white/30 mt-0.5">Friday 10:00 AM</p>
              </div>

              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0c1218] to-transparent" />

              {/* Bottom left tagline */}
              <div className="absolute bottom-6 left-6">
                <p className="text-xl md:text-2xl font-bold text-white/90">
                  Every meeting.<br />Connected.
                </p>
              </div>
            </div>

            {/* Right — text content */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-12 md:py-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Context that<br />carries forward.
              </h2>
              <p className="mt-5 text-white/40 text-base leading-relaxed max-w-sm">
                Every meeting tool gives you a transcript. Ve gives you the full picture, what was said last time, what was emailed in between, and what needs to happen next.
              </p>
              <div className="mt-8">
                <a
                  href="#download"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                >
                  See how it works
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeInView>
    </section>
  );
}
