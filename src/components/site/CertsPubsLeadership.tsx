import { motion } from "framer-motion";
import { Section } from "./Section";
import { certifications, publications, leadership } from "@/lib/resume";
import { Award, BookOpen, Trophy, Sparkles } from "lucide-react";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="05 · Certifications"
      title={
        <>
          Verified{" "}
          <span className="italic text-gradient-sakura">learning.</span>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="glass group relative flex items-start gap-4 rounded-2xl p-6 transition-colors hover:border-[color:var(--sakura)]"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[color:color-mix(in_oklch,var(--sakura)_15%,transparent)] text-[color:var(--sakura-deep)]">
              <Award className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {c.org}
              </div>
              <h3 className="mt-1 font-display text-base leading-snug text-foreground">
                {c.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Publications() {
  return (
    <Section
      id="publications"
      eyebrow="06 · Publications"
      title={
        <>
          Research on the{" "}
          <span className="italic text-gradient-sakura">record.</span>
        </>
      }
    >
      <div className="space-y-5">
        {publications.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass-sakura relative overflow-hidden rounded-2xl p-7"
          >
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:color-mix(in_oklch,var(--sakura)_15%,transparent)] px-2.5 py-1 text-[color:var(--sakura-deep)]">
                <BookOpen className="h-3.5 w-3.5" /> Conference paper
              </span>
              <span className="font-mono text-muted-foreground">{p.date}</span>
            </div>
            <h3 className="font-display text-xl text-foreground">{p.title}</h3>
            <div className="mt-2 text-[color:var(--sakura-deep)]">
              {p.venue}
            </div>
            <div className="text-sm text-muted-foreground">{p.org}</div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              {p.note}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

export function Leadership() {
  const icons = [Trophy, Sparkles, Award, Trophy];
  return (
    <Section
      id="leadership"
      eyebrow="07 · Leadership & Awards"
      title={
        <>
          Beyond the{" "}
          <span className="italic text-gradient-sakura">codebase.</span>
        </>
      }
      intro="Hackathons, community-building and curiosity that started well before college."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {leadership.map((l, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all hover:border-[color:var(--sakura)] hover:-translate-y-0.5"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[color:color-mix(in_oklch,var(--sakura)_15%,transparent)] text-[color:var(--sakura-deep)]">
                <Icon className="h-4 w-4" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {l.year}
              </div>
              <h3 className="mt-1 font-display text-lg leading-snug text-foreground">
                {l.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {l.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
