"use client";

import { FadeInView } from "@/components/motion/FadeInView";
import { copy } from "@/config/copy";

export function Problem() {
  return (
    <section id="problem" className="bg-dark text-white px-5 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl">
        <FadeInView>
          <p className="text-sm uppercase tracking-wider text-cyan font-medium">{copy.problem.eyebrow}</p>
        </FadeInView>
        <FadeInView delay={0.1}>
          <h2 className="text-h2 mt-4 text-white">{copy.problem.h2}</h2>
        </FadeInView>
        <FadeInView delay={0.2}>
          <p className="mt-6 text-xl text-white/40 leading-relaxed max-w-3xl">{copy.problem.body}</p>
        </FadeInView>
        <FadeInView delay={0.3}>
          <p className="mt-8 text-2xl md:text-3xl font-bold text-cyan leading-snug">{copy.problem.punchline}</p>
        </FadeInView>
      </div>
    </section>
  );
}
