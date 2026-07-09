import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  download?: boolean;
  target?: string;
  ariaLabel?: string;
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  download,
  target,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const rx = e.clientX - (rect.left + rect.width / 2);
    const ry = e.clientY - (rect.top + rect.height / 2);
    x.set(rx * 0.18);
    y.set(ry * 0.22);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 will-change-transform select-none";
  const styles: Record<string, string> = {
    primary:
      "text-white bg-[color:var(--sakura-deep)] hover:bg-[color:var(--sakura)] shadow-[0_10px_30px_-12px_rgba(180,67,108,0.6)] hover:shadow-[0_16px_40px_-14px_rgba(180,67,108,0.7)]",
    outline:
      "text-foreground border border-[color:color-mix(in_oklch,var(--sakura)_45%,transparent)] hover:bg-[color:color-mix(in_oklch,var(--sakura)_10%,transparent)]",
    ghost: "text-foreground/80 hover:text-foreground",
  };

  const cls = `${base} ${styles[variant]} ${className}`;
  const inner = (
    <motion.span
      ref={ref as never}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      className={cls}
      aria-label={ariaLabel}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noreferrer" : undefined}
        download={download}
        className="inline-block"
        aria-label={ariaLabel}
      >
        {inner}
      </a>
    );
  }
  return inner;
}
