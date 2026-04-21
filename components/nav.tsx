import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function Nav() {
  return (
    <nav className="flex items-center justify-between h-16 px-10">
      <Link href="/" className="text-lg font-bold tracking-tight">
        <span>YCF</span>
      </Link>

      <ModeToggle />
    </nav>
  );
}
