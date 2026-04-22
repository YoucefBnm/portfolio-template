import { cn } from "@/lib/utils";
import React from "react";

export function Pulse({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("relative flex size-1.5", className)} {...props}>
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400" />
      <span className="relative inline-flex rounded-full size-full bg-green-300" />
    </div>
  );
}
