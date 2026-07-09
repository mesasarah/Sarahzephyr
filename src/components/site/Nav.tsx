import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certs" },
  { id: "publications", label: "Papers" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.15, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-lg tracking-tight text-foreground"
        >
          <SakuraMark />
          <span>
            <span className="font-medium">Sarah</span>{" "}
            <span className="text-muted-foreground">Zephyr</span>
          </span>
        </a>

        <nav
          className={`hidden lg:flex items-center gap-0.5 rounded-full px-1.5 py-1 transition-all ${
            scrolled ? "glass" : ""
          }`}
        >
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-[color:color-mix(in_oklch,var(--sakura)_10%,transparent)] transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden grid h-9 w-9 place-items-center rounded-full glass"
          >
            <div className="flex flex-col gap-1">
              <span
                className={`h-0.5 w-4 bg-foreground transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 bg-foreground transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 bg-foreground transition-transform ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden mx-5 mt-3 rounded-2xl glass p-3"
          >
            <div className="grid grid-cols-2 gap-1">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm text-foreground/85 hover:bg-[color:color-mix(in_oklch,var(--sakura)_12%,transparent)]"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function SakuraMark() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5">
      <g transform="translate(10 10)">
        {[0, 72, 144, 216, 288].map((a) => (
          <ellipse
            key={a}
            rx="4.2"
            ry="2.4"
            cx="2.8"
            cy="0"
            transform={`rotate(${a})`}
            fill="var(--sakura)"
            opacity="0.9"
          />
        ))}
        <circle r="1.3" fill="#fff6b0" />
      </g>
    </svg>
  );
}
