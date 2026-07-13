import { motion } from "framer-motion";
import { Section } from "./Section";
import { experience } from "@/lib/resume";
import { Briefcase, MapPin, Calendar } from "lucide-react";

/**
 * Compact side-by-side experience — fits on one screen on desktop.
 * No vertical timeline; each role is a self-contained card.
 */
export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02"
      title={
        <>
          Experience<span className="text-gradient-sakura">.</span>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {experience.map((exp, idx) => (
          <motion.article
            key={exp.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: idx * 0.08 }}
            className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 md:p-7 transition-all hover:border-[color:var(--sakura)]"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--sakura-deep)]">
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase className="h-3 w-3" /> {exp.role}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-2xl leading-tight text-foreground">
                  {exp.company}
                </h3>
              </div>
              <div className="shrink-0 rounded-full bg-[color:color-mix(in_oklch,var(--sakura)_12%,transparent)] px-3 py-1 text-[11px] font-medium text-[color:var(--sakura-deep)] whitespace-nowrap">
                {exp.period}
              </div>
            </div>

            <div className="mb-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" /> {exp.location}
              <span className="mx-2 h-1 w-1 rounded-full bg-muted-foreground/40" />
              <Calendar className="h-3 w-3" /> {exp.period}
            </div>

            <ul className="space-y-2">
              {exp.achievements.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/80"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[color:var(--sakura-deep)]" />
                  {a}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
