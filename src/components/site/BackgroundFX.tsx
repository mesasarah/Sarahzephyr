import { useEffect, useRef } from "react";

/**
 * Lightweight cherry-blossom background.
 * - CSS gradient wash (no heavy blur animations)
 * - Canvas with ~12 petals, throttled to ~40fps
 * - Pauses when tab hidden or `prefers-reduced-motion`
 */
export function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0,
      h = 0;
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    type Petal = {
      x: number;
      y: number;
      s: number;
      vx: number;
      vy: number;
      rot: number;
      vr: number;
      sway: number;
      swaySpeed: number;
      t: number;
      hue: number;
    };
    const isDark = () => document.documentElement.classList.contains("dark");
    const COUNT = window.innerWidth < 640 ? 8 : 14;
    const spawn = (initial = false): Petal => ({
      x: Math.random() * w,
      y: initial ? Math.random() * h : -30,
      s: 5 + Math.random() * 8,
      vx: 0.15 + Math.random() * 0.35,
      vy: 0.25 + Math.random() * 0.5,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.015,
      sway: 15 + Math.random() * 25,
      swaySpeed: 0.004 + Math.random() * 0.006,
      t: Math.random() * 1000,
      hue: 340 + Math.random() * 15,
    });
    const petals: Petal[] = Array.from({ length: COUNT }, () => spawn(true));

    let raf = 0;
    let last = 0;
    const FRAME_MS = 1000 / 40; // ~40fps cap
    let paused = document.hidden;
    const onVis = () => {
      paused = document.hidden;
    };
    document.addEventListener("visibilitychange", onVis);

    const draw = (ts: number) => {
      raf = requestAnimationFrame(draw);
      if (paused) return;
      if (ts - last < FRAME_MS) return;
      last = ts;

      ctx.clearRect(0, 0, w, h);
      const dark = isDark();
      for (const p of petals) {
        p.t += 1;
        p.x += p.vx + Math.sin(p.t * p.swaySpeed) * 0.35;
        p.y += p.vy;
        p.rot += p.vr;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        const grad = ctx.createLinearGradient(-p.s, -p.s, p.s, p.s);
        if (dark) {
          grad.addColorStop(0, `hsla(${p.hue}, 90%, 88%, 0.9)`);
          grad.addColorStop(1, `hsla(${p.hue}, 80%, 72%, 0.55)`);
        } else {
          grad.addColorStop(0, `hsla(${p.hue}, 85%, 82%, 0.95)`);
          grad.addColorStop(1, `hsla(${p.hue}, 70%, 62%, 0.7)`);
        }
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(0, -p.s);
        ctx.bezierCurveTo(p.s * 0.9, -p.s * 0.3, p.s * 0.9, p.s * 0.3, 0, p.s);
        ctx.bezierCurveTo(
          -p.s * 0.9,
          p.s * 0.3,
          -p.s * 0.9,
          -p.s * 0.3,
          0,
          -p.s,
        );
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        if (p.y - p.s > h || p.x - p.s > w) {
          Object.assign(p, spawn(false));
        }
      }
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-[var(--bg-base)]" />
      {/* soft radial washes (static, no animation to keep perf smooth) */}
      <div
        className="absolute inset-0 opacity-70 dark:opacity-60"
        style={{
          background:
            "radial-gradient(1200px 700px at 15% -10%, color-mix(in oklch, var(--sakura-soft) 55%, transparent), transparent 60%), radial-gradient(900px 600px at 90% 20%, color-mix(in oklch, var(--sakura) 25%, transparent), transparent 65%), radial-gradient(1000px 700px at 50% 110%, color-mix(in oklch, var(--sakura-soft) 40%, transparent), transparent 60%)",
        }}
      />
      {/* subtle noise-free grid */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--sakura) 1px, transparent 1px), linear-gradient(90deg, var(--sakura) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}

/** Decorative sakura branch SVG — pure CSS, no assets */
export function SakuraBranch({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 320 200"
      className={className}
      aria-hidden
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <defs>
        <linearGradient id="branch" x1="0" x2="1">
          <stop offset="0" stopColor="#6b4a3a" stopOpacity="0.85" />
          <stop offset="1" stopColor="#3a2a22" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="petal" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#ffe4ec" />
          <stop offset="60%" stopColor="#f2a5b8" />
          <stop offset="100%" stopColor="#b4436c" />
        </radialGradient>
      </defs>
      <path
        d="M0,140 C60,120 110,110 160,90 C210,72 250,55 320,30"
        stroke="url(#branch)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M60,128 C80,100 100,90 130,80"
        stroke="url(#branch)"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M180,84 C200,60 220,50 245,42"
        stroke="url(#branch)"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
      {[
        [50, 132, 9],
        [95, 118, 10],
        [130, 78, 11],
        [175, 88, 9],
        [220, 62, 10],
        [255, 38, 12],
        [285, 30, 9],
        [200, 45, 8],
        [75, 108, 7],
      ].map(([cx, cy, r], i) => (
        <g key={i} transform={`translate(${cx} ${cy})`}>
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse
              key={a}
              rx={r}
              ry={r * 0.6}
              cx={r * 0.7}
              cy="0"
              transform={`rotate(${a})`}
              fill="url(#petal)"
              opacity="0.92"
            />
          ))}
          <circle r={r * 0.35} fill="#fff6b0" opacity="0.85" />
        </g>
      ))}
    </svg>
  );
}
