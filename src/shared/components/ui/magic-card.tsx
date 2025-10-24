import { cn } from "@/shared/utils/cn";
import { ComponentPropsWithoutRef, forwardRef } from "react";

interface MagicCardProps extends ComponentPropsWithoutRef<"div"> {
  glowColor?: string;
}

export const MagicCard = forwardRef<HTMLDivElement, MagicCardProps>(
  ({ className, glowColor = "rgba(96, 72, 240, 0.35)", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-3xl border border-white/15 bg-white/70 p-6 shadow-[0_24px_60px_-40px_rgba(35,24,83,0.6)] backdrop-blur dark:border-white/10 dark:bg-white/5",
          className,
        )}
        {...props}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(120% 140% at 50% 0%, ${glowColor}, transparent 65%)`,
            opacity: 0.65,
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    );
  },
);

MagicCard.displayName = "MagicCard";
