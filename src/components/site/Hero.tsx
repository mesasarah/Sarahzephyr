import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/lib/resume";
import { MagneticButton } from "./MagneticButton";
import { SakuraBranch } from "./BackgroundFX";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";

import { TbWorld } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineIdentification } from "react-icons/hi2";

function useTypedRole(roles: readonly string[]) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const delay = deleting ? 35 : 75;
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIdx((i) => (i + 1) % roles.length);
      return;
    }
    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
      );
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, idx, roles]);

  return text;
}

export function Hero() {
  const role = useTypedRole(profile.roles);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden pt-32 md:pt-40"
    >
      {/* Decorative branches */}
      <SakuraBranch className="pointer-events-none absolute -top-4 -left-6 w-[280px] opacity-70 md:w-[380px]" />
      <SakuraBranch
        flip
        className="pointer-events-none absolute -bottom-8 -right-8 w-[300px] opacity-60 md:w-[420px]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 md:px-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs uppercase tracking-[0.22em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--sakura-deep)]" />
            Open to opportunities 
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            <span className="block">Mesa Sarah</span>
            <span className="block italic text-gradient-sakura">Zephyr.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 flex items-center gap-2 font-mono text-base text-muted-foreground sm:text-lg"
          >
            <span className="text-[color:var(--sakura-deep)]">{"›"}</span>
            <span className="min-h-[1.6em] text-foreground/85">{role}</span>
            <span className="ml-0.5 inline-block h-4 w-[2px] bg-[color:var(--sakura-deep)] animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#projects" variant="primary">
              View Projects <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              Contact Me <Mail className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              href="/Sarah SDE.pdf"
              variant="ghost"
              download
              ariaLabel="Download resume PDF"
            >
              <Download className="h-4 w-4" /> Resume
            </MagneticButton>
          </motion.div>

          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.7 }}
  className="mt-10 flex flex-wrap items-center gap-3"
>
  <SocialIcon href={profile.github} label="GitHub">
    <Github className="h-4 w-4" />
  </SocialIcon>

  <SocialIcon href={profile.linkedin} label="LinkedIn">
    <Linkedin className="h-4 w-4" />
  </SocialIcon>

  <SocialIcon href={`mailto:${profile.email}`} label="Email">
    <Mail className="h-4 w-4" />
  </SocialIcon>

  <SocialIcon
    href="https://own.page/sarahzephyr"
    label="OwnPage"
  >
    <TbWorld className="h-4 w-4" />
  </SocialIcon>

  <SocialIcon
    href="https://leetcode.com/u/Vzx2Z2nqrg/"
    label="LeetCode"
  >
    <SiLeetcode className="h-4 w-4" />
  </SocialIcon>

  <SocialIcon
    href="https://codolio.com/profile/sarahzephyr"
    label="Codolio"
  >
    <HiOutlineIdentification className="h-4 w-4" />
  </SocialIcon>
</motion.div>
        </div>

        {/* Editorial "card" — no orbit spinner, professional */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glass-sakura relative overflow-hidden rounded-3xl p-8">
            <SakuraBranch className="pointer-events-none absolute -right-8 -top-6 w-52 opacity-80" />
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--sakura-deep)]">
              Portfolio · MMXXVI
            </div>
            <div className="mt-6 font-display text-2xl leading-tight text-foreground">
              “I like turning research prototypes into products people actually use.”
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[color:var(--glass-border)] pt-6">
              <MiniStat k="Latency ↓" v="70%" />
              <MiniStat k="APIs shipped" v="6+" />
              <MiniStat k="OCR 60→" v="90%" />
              <MiniStat k="Users served" v="500+" />
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Currently available
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function MiniStat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-2xl text-gradient-sakura">{v}</div>
      <div className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {k}
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group grid h-10 w-10 place-items-center rounded-full glass text-foreground/80 transition-all hover:text-foreground hover:border-[color:var(--sakura)]"
    >
      <span className="transition-transform group-hover:scale-110">{children}</span>
    </a>
  );
}
