import { cn } from "@/shared/utils/cn";
import { ComponentPropsWithoutRef } from "react";

export function NeonGradientCard({ className, children, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 p-6 shadow-[0_24px_80px_-45px_rgba(45,35,120,0.65)] backdrop-blur dark:border-white/10 dark:bg-white/10",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute -inset-1 rounded-[32px] bg-[radial-gradient(circle_at_top_left,rgba(122,92,255,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.25),transparent_60%)] opacity-80" />
      <div className="relative z-10 space-y-3 text-start">
        {children}
      </div>
    </div>
  );
}
