import { profile } from "@/lib/resume";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--glass-border)] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 md:flex-row md:px-10">
        <div className="flex items-center gap-2 font-display text-sm text-foreground/75">
          <svg viewBox="0 0 20 20" className="h-4 w-4">
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
            </g>
          </svg>
          <span className="font-medium text-foreground">Mesa Zephyr</span>
        </div>
        <div className="text-xs text-muted-foreground">
          Hyderabad · Bengaluru, India
        </div>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full glass hover:border-[color:var(--sakura)]"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full glass hover:border-[color:var(--sakura)]"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full glass hover:border-[color:var(--sakura)]"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
