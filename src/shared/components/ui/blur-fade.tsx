"use client";

import { motion, MotionProps, useInView } from "framer-motion";
import { ComponentPropsWithoutRef, ElementType, useRef } from "react";

interface BlurFadeProps<T extends ElementType> {
  as?: T;
  className?: string;
  delay?: number;
  distance?: number;
  children: React.ReactNode;
}

export function BlurFade<T extends ElementType = "div">({
  as,
  className,
  delay = 0,
  distance = 16,
  children,
  ...rest
}: BlurFadeProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof BlurFadeProps<T>>) {
  const Component = (as ?? "div") as ElementType;
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  const motionProps: MotionProps = {
    initial: { opacity: 0, filter: "blur(12px)", y: distance },
    animate: inView
      ? { opacity: 1, filter: "blur(0px)", y: 0, transition: { delay, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } }
      : undefined,
  };

  return (
    <motion.div ref={ref} {...motionProps} className={className}>
      <Component {...(rest as ComponentPropsWithoutRef<typeof Component>)}>{children}</Component>
    </motion.div>
  );
}
