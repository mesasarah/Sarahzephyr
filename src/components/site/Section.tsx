import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative w-full py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_oklch,var(--sakura)_35%,transparent)] bg-[color:color-mix(in_oklch,var(--sakura)_8%,transparent)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--sakura-deep)]">
            <span className="h-1 w-1 rounded-full bg-[color:var(--sakura-deep)]" />
            {eyebrow}
          </div>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {title}
          </h2>
          {intro && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {intro}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
