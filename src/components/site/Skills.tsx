import { motion } from "framer-motion";
import { Section } from "./Section";
import { skills } from "@/lib/resume";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="04 · Toolkit"
      title={
        <>
          The stack I{" "}
          <span className="italic text-gradient-sakura">reach for.</span>
        </>
      }
      intro="Languages, frameworks and infrastructure I've used in production or serious personal projects."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.slice(0, 6).map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition-colors hover:border-[color:var(--sakura)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-lg text-foreground">{group.category}</h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-[color:var(--glass-border)] bg-[color:color-mix(in_oklch,var(--sakura)_6%,transparent)] px-2.5 py-1 text-xs text-foreground/85 transition-colors hover:border-[color:var(--sakura)] hover:bg-[color:color-mix(in_oklch,var(--sakura)_14%,transparent)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
