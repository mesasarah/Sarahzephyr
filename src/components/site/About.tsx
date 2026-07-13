import { motion } from "framer-motion";
import { Section } from "./Section";
import { profile, education } from "@/lib/resume";
import { GraduationCap, MapPin, Sparkles, Rocket } from "lucide-react";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · About"
      title={
        <>
          Software engineer building{" "}
          <span className="italic text-gradient-sakura">
            full-stack, backend & AI systems.
          </span>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass relative overflow-hidden rounded-2xl p-7 lg:col-span-2"
        >
          <p className="text-lg leading-relaxed text-foreground/85">
            {profile.summary}
          </p>
          <p className="mt-5 text-muted-foreground">
            Recent work spans building enterprise document-intelligence
            platforms at TCS, an offline RAG system for DRDO researchers, and
            shipping personal products like{" "}
            <span className="text-[color:var(--sakura-deep)] font-medium">
              Nova
            </span>
            ,{" "}
            <span className="text-[color:var(--sakura-deep)] font-medium">
              GraphMind AI
            </span>{" "}
            and{" "}
            <span className="text-[color:var(--sakura-deep)] font-medium">
              ChessMeet India
            </span>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-sakura rounded-2xl p-7"
        >
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:color-mix(in_oklch,var(--sakura)_20%,transparent)] text-[color:var(--sakura-deep)]">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--sakura-deep)]">
            Education
          </div>
          <h3 className="mt-2 font-display text-xl text-foreground">
            {education.degree}
          </h3>
          <p className="mt-1 text-muted-foreground">{education.school}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm"></div>
          <div className="mt-5 border-t border-[color:var(--glass-border)] pt-4">
            <div className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground">
              Relevant Coursework
            </div>
            <ul className="space-y-1.5 text-sm text-foreground/80">
              {education.coursework.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="mt-1 h-1 w-1 rounded-full bg-[color:var(--sakura-deep)]" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Highlight
          icon={<Sparkles className="h-4 w-4" />}
          title="Full-stack fluent"
        >
          React, TypeScript, FastAPI, Python, SQL and Neo4j — schema to UI.
        </Highlight>
        <Highlight
          icon={<Rocket className="h-4 w-4" />}
          title="Production instincts"
        >
          CI/CD, Docker, 85%+ test coverage, air-gapped deployments, real-time
          monitoring.
        </Highlight>
        <Highlight
          icon={<MapPin className="h-4 w-4" />}
          title="Available worldwide"
        >
          Remote-first. Open to full-time, contract and interesting
          collaborations.
        </Highlight>
      </div>
    </Section>
  );
}

function Highlight({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass group rounded-2xl p-6 transition-all hover:border-[color:var(--sakura)]">
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[color:color-mix(in_oklch,var(--sakura)_15%,transparent)] text-[color:var(--sakura-deep)]">
        {icon}
      </div>
      <div className="font-display text-lg text-foreground">{title}</div>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {children}
      </p>
    </div>
  );
}
