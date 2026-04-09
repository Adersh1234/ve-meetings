"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import { FadeInView } from "@/components/motion/FadeInView";
import { StaggerChildren, staggerItem } from "@/components/motion/StaggerChildren";
import { copy } from "@/config/copy";

export function Comparison() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="comparison" className="bg-[#060e0e] text-white px-5 py-24 md:py-32 lg:py-40">
        {/* Top accent line */}
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />

        <div className="mx-auto max-w-6xl">
          <FadeInView>
            <p className="text-sm uppercase tracking-wider text-cyan font-medium">{copy.comparison.eyebrow}</p>
            <h2 className="text-h2 mt-4 text-white max-w-3xl">{copy.comparison.h2}</h2>
          </FadeInView>

          <div className="mt-16 space-y-8">
            {copy.comparison.items.map((item, i) => (
              <StaggerChildren key={i} className="grid gap-5 md:grid-cols-2" stagger={0.15}>
                {/* Them */}
                <m.div variants={staggerItem} className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 md:p-10">
                  <p className="text-xs uppercase tracking-wider text-white/30 font-medium mb-4">{item.them.label}</p>
                  <h3 className="text-xl md:text-2xl font-bold text-white/60">{item.them.title}</h3>
                  <p className="mt-3 text-white/30 leading-relaxed">{item.them.body}</p>
                </m.div>
                {/* Ve */}
                <m.div variants={staggerItem} className="rounded-2xl bg-cyan/5 border border-cyan/15 p-8 md:p-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://us.images.ve.ai/public/dashboard/image.png" alt="Ve" className="h-6 w-auto object-contain mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold text-white">{item.ve.title}</h3>
                  <p className="mt-3 text-white/50 leading-relaxed">{item.ve.body}</p>
                </m.div>
              </StaggerChildren>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
