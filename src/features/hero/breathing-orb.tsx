"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const PHASES = [
  { label: "Inspire", helper: "Encha os pulmões por 4s", duration: 4 },
  { label: "Segure", helper: "Sustente com leveza por 7s", duration: 7 },
  { label: "Expire", helper: "Solte devagar em 8s", duration: 8 },
];

export function BreathingOrb() {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let index = 0;
    const loop = () => {
      const currentPhase = PHASES[index];
      timeoutRef.current = setTimeout(() => {
        index = (index + 1) % PHASES.length;
        setPhaseIndex(index);
        loop();
      }, currentPhase.duration * 1000);
    };

    loop();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const totalDuration = useMemo(() => PHASES.reduce((acc, phase) => acc + phase.duration, 0), []);
  const timeline = useMemo(() => {
    let acc = 0;
    return PHASES.map((phase) => {
      acc += phase.duration;
      return acc / totalDuration;
    });
  }, [totalDuration]);

  const currentPhase = PHASES[phaseIndex];

  return (
    <div className="relative isolate flex flex-col gap-6 rounded-[32px] border border-white/15 bg-white/70 p-8 text-center shadow-[0_30px_120px_-60px_rgba(35,24,83,0.55)] backdrop-blur dark:border-white/10 dark:bg-white/5">
      <motion.div
        className="mx-auto grid h-52 w-52 place-items-center rounded-full bg-gradient-to-br from-primary-200 via-primary-500/60 to-primary-700 text-white shadow-[0_15px_45px_-25px_rgba(78,58,186,0.8)] dark:from-primary-400/40 dark:via-primary-500/60 dark:to-primary-900"
        animate={{
          scale: [0.84, 1.12, 1.02, 0.84],
          opacity: [0.85, 1, 0.95, 0.85],
          boxShadow: [
            "0 25px 60px -40px rgba(78,58,186,0.55)",
            "0 35px 80px -45px rgba(78,58,186,0.75)",
            "0 25px 60px -40px rgba(78,58,186,0.65)",
            "0 20px 55px -45px rgba(78,58,186,0.55)",
          ],
        }}
        transition={{
          duration: totalDuration,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, timeline[0], timeline[1], 1],
        }}
      >
        <div className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">{currentPhase.label}</div>
      </motion.div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-primary-700 dark:text-primary-100">{currentPhase.helper}</p>
        <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-700 dark:text-muted-200">
          {PHASES.map((phase, index) => (
            <span key={phase.label} className={index === phaseIndex ? "text-primary-600 dark:text-primary-200" : ""}>
              {phase.duration}s
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
