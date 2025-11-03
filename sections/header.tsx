import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed left-0 top-0 w-full mix-blend-difference text-background dark:text-foreground flex justify-center z-50 px-12">
      <div className="container flex h-16 items-center gap-4">
        <Link className="inline-flex items-center gap-1" href="/">
          <Logo />
        </Link>

        <div className="inline-flex items-center gap-2">
          <div className="relative flex size-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500"></span>
            <span className="relative inline-flex rounded-full size-full bg-emerald-300"></span>
          </div>
          <div className="text-xs font-medium text-muted-foreground">
            Available for projects
          </div>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
