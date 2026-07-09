import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[200] grid place-items-center bg-[var(--bg-base)]"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.svg
              viewBox="0 0 60 60"
              className="h-14 w-14"
              initial={{ scale: 0.6, opacity: 0, rotate: -30 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <g transform="translate(30 30)">
                {[0, 72, 144, 216, 288].map((a) => (
                  <ellipse
                    key={a}
                    rx="12"
                    ry="7"
                    cx="8"
                    cy="0"
                    transform={`rotate(${a})`}
                    fill="var(--sakura)"
                    opacity="0.92"
                  />
                ))}
                <circle r="3" fill="#fff6b0" />
              </g>
            </motion.svg>
            <div className="relative h-[2px] w-40 overflow-hidden rounded-full bg-[color:var(--glass-border)]">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[color:var(--sakura-deep)] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
