"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";
import { cn } from "@/shared/utils/cn";

interface ShineBorderProps extends HTMLMotionProps<"button"> {
  active?: boolean;
  children: ReactNode;
}

export const ShineBorder = forwardRef<HTMLButtonElement, ShineBorderProps>(
  ({ className, active = false, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold text-primary-700 transition hover:scale-[1.02] dark:border-white/10 dark:bg-white/5 dark:text-primary-100",
          active && "border-primary-500/60 shadow-[0_12px_35px_-20px_rgba(96,72,240,0.75)]",
          className,
        )}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/35 to-white/0 opacity-0 transition-opacity duration-500 hover:opacity-60" />
      </motion.button>
    );
  },
);

ShineBorder.displayName = "ShineBorder";
