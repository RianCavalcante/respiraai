import { cn } from "@/shared/utils/cn";
import { ComponentPropsWithoutRef } from "react";

export function BorderBeam({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 dark:border-white/10 dark:bg-white/5",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(122,92,255,0.35),transparent)] opacity-70" />
      <div className="pointer-events-none absolute inset-0 animate-[pulse_8s_ease-in-out_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.45)_0deg,rgba(255,255,255,0.0)_140deg,rgba(255,255,255,0.45)_320deg)]" />
      <div className="relative z-10 h-full w-full">{props.children}</div>
    </div>
  );
}
