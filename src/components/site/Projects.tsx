import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { projects, type Project } from "@/lib/resume";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const FILTERS = ["AI", "Machine Learning", "Full Stack", "React", "FastAPI", "Python"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number] | null>(null);

  const filtered = useMemo(() => {
    const sorted = [...projects].sort((a, b) => b.order - a.order);
    return filter ? sorted.filter((p) => p.tags.includes(filter)) : sorted;
  }, [filter]);

  return (
    <Section
      id="projects"
      eyebrow="03 · Selected Work"
      title={
        <>
          Projects that went{" "}
          <span className="italic text-gradient-sakura">from idea to production.</span>
        </>
      }
      intro="Tap a chip to filter by stack. Every card is a real project — deployed, tested, and used by real people."
    >
      <div className="mb-10 flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              onClick={() => setFilter(active ? null : f)}
              className={`relative rounded-full px-4 py-1.5 text-sm transition-all ${
                active
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground hover:bg-[color:color-mix(in_oklch,var(--sakura)_10%,transparent)]"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="filter-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-[color:var(--sakura-deep)]"
                />
              )}
              <span className="relative">{f}</span>
            </button>
          );
        })}
        {filter && (
          <button
            onClick={() => setFilter(null)}
            className="ml-1 text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Clear
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl glass transition-colors hover:border-[color:var(--sakura)]"
    >
      {/* Editorial header */}
      <div className="relative h-40 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}
        />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6) 0.5px, transparent 1.5px), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.4) 0.5px, transparent 1.5px)",
            backgroundSize: "22px 22px, 38px 38px",
          }}
        />
        {/* sakura silhouette */}
        <svg
          viewBox="0 0 200 120"
          className="absolute inset-0 h-full w-full opacity-30 mix-blend-screen"
          preserveAspectRatio="none"
        >
          <g fill="#fff">
            {[
              [20, 30, 5],
              [55, 70, 6],
              [95, 40, 4],
              [140, 80, 5],
              [175, 35, 6],
            ].map(([cx, cy, r], i) => (
              <g key={i} transform={`translate(${cx} ${cy})`} opacity="0.85">
                {[0, 72, 144, 216, 288].map((a) => (
                  <ellipse
                    key={a}
                    rx={r}
                    ry={r * 0.55}
                    cx={r * 0.7}
                    transform={`rotate(${a})`}
                  />
                ))}
              </g>
            ))}
          </g>
        </svg>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-white/90">
              {project.period}
            </div>
            <h3 className="mt-1 font-display text-2xl text-white drop-shadow">
              {project.title}
            </h3>
            <div className="text-sm text-white/85">{project.subtitle}</div>
          </div>
          <div className="rounded-full bg-black/40 p-2 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm leading-relaxed text-foreground/80">{project.description}</p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[color:var(--sakura-deep)]" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-[color:var(--glass-border)] bg-[color:color-mix(in_oklch,var(--sakura)_6%,transparent)] px-2.5 py-0.5 text-[11px] font-medium text-foreground/75"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-[color:var(--glass-border)] pt-5 text-sm">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-foreground/80 hover:text-foreground"
            >
              <Github className="h-4 w-4" /> Code
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-muted-foreground/70">
              <Github className="h-4 w-4" /> Private repo
            </span>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[color:var(--sakura-deep)] hover:opacity-80"
            >
              <ExternalLink className="h-4 w-4" /> Live demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-muted-foreground/70">
              <ExternalLink className="h-4 w-4" /> Demo on request
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
