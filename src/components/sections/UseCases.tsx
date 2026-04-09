"use client";

import { m, LazyMotion, domAnimation, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeInView } from "@/components/motion/FadeInView";
import { copy } from "@/config/copy";

function CaseCard({ title, body, index }: { title: string; body: string; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <m.div ref={ref} style={{ opacity, y }} className="relative pl-8 md:pl-12 border-l-2 border-cyan/20 pb-12 last:pb-0">
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyan" />
      <p className="text-xs uppercase tracking-wider text-cyan font-medium mb-2">Scenario {index + 1}</p>
      <h3 className="text-2xl md:text-3xl font-bold text-dark">{title}</h3>
      <p className="mt-3 text-dark/50 text-lg leading-relaxed max-w-2xl">{body}</p>
    </m.div>
  );
}

export function UseCases() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="use-cases" className="bg-chartreuse text-dark px-5 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <FadeInView>
            <p className="text-sm uppercase tracking-wider text-cyan font-medium">{copy.useCases.eyebrow}</p>
          </FadeInView>

          <div className="mt-14 space-y-0">
            {copy.useCases.cases.map((c, i) => (
              <CaseCard key={c.title} title={c.title} body={c.body} index={i} />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
