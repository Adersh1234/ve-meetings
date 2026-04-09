"use client";

import { m, LazyMotion, domAnimation, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeInView } from "@/components/motion/FadeInView";
import { copy } from "@/config/copy";

const cardData = [
  {
    number: "01.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#299FD2" strokeWidth="1.5" strokeLinejoin="round"/></svg>
    ),
    gradient: "from-cyan/10 via-cyan/5 to-transparent",
    // Abstract wave pattern
    visual: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[120%] h-[60%] rounded-[50%] bg-gradient-to-r from-cyan/[0.08] via-cyan/[0.04] to-transparent blur-xl" />
        <div className="absolute top-[30%] left-[0%] w-[100%] h-[40%] rounded-[50%] bg-gradient-to-r from-cyan/[0.06] to-transparent blur-lg" />
        <div className="absolute top-[40%] left-[10%] w-[80%] h-[30%] rounded-[50%] bg-gradient-to-r from-cyan/[0.04] to-transparent blur-md" />
      </div>
    ),
  },
  {
    number: "02.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#299FD2" strokeWidth="1.5"/><path d="M15 9l-6 6M9 9l6 6" stroke="#299FD2" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
    gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    visual: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] right-[-5%] w-[60%] h-[70%] rounded-full bg-gradient-to-bl from-cyan/[0.06] to-transparent blur-2xl" />
        <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-cyan/[0.04] to-transparent blur-xl" />
      </div>
    ),
  },
  {
    number: "03.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="#299FD2" strokeWidth="1.5" strokeLinecap="round"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="#299FD2" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
    gradient: "from-violet-500/10 via-violet-500/5 to-transparent",
    visual: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-b from-cyan/[0.07] to-transparent blur-2xl" />
      </div>
    ),
  },
  {
    number: "04.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3v6l3 3" stroke="#299FD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9" stroke="#299FD2" strokeWidth="1.5"/></svg>
    ),
    gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
    visual: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-[0%] right-[0%] w-[70%] h-[70%] rounded-full bg-gradient-to-tl from-cyan/[0.06] to-transparent blur-2xl" />
        <div className="absolute top-[5%] left-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-cyan/[0.04] to-transparent blur-xl" />
      </div>
    ),
  },
];

function FeatureCard({
  title,
  body,
  number,
  icon,
  visual,
}: {
  title: string;
  body: string;
  number: string;
  icon: React.ReactNode;
  visual: React.ReactNode;
}) {
  return (
    <div className="group relative rounded-3xl bg-[#111315] border border-white/[0.04] overflow-hidden min-h-[340px] md:min-h-[400px] flex flex-col transition-all duration-300 hover:border-cyan/15">
      {/* Visual area */}
      <div className="relative h-[160px] md:h-[190px] overflow-hidden">
        {visual}
        <span className="absolute top-5 left-7 text-[4.5rem] md:text-[5.5rem] font-black text-white/[0.04] group-hover:text-white/90 leading-none select-none transition-colors duration-300">
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-end p-7 md:p-8">
        <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-cyan/10 border border-cyan/10 mb-4">
          {icon}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{title}</h3>
        <p className="mt-2.5 text-white/35 text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="features" className="bg-dark text-white px-5 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl">
          {/* Header — left-aligned with description on right like reference */}
          <FadeInView>
            <h2 className="text-h2 text-white mb-16 md:mb-20">What&apos;s included.</h2>
          </FadeInView>

          {/* 2x2 grid — cards pop in on scroll */}
          <div className="grid gap-5 md:gap-6 md:grid-cols-2">
            {copy.features.cards.map((card, i) => (
              <FeatureCard
                key={card.title}
                title={card.title}
                body={card.body}
                number={cardData[i].number}
                icon={cardData[i].icon}
                visual={cardData[i].visual}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
