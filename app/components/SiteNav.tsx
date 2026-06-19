"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "How it works", href: "/#how" },
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-100 bg-white">
      <Link href="/" className="font-semibold text-lg tracking-tight text-black">
        CVSF
      </Link>
      <div className="flex gap-6 text-sm items-center">
        {links.map(({ label, href }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`transition-colors duration-200 ${
                active ? "text-black font-medium" : "text-zinc-400 hover:text-black"
              }`}
            >
              {label}
            </Link>
          );
        })}
        <Link
          href="/docs"
          className="bg-black text-white px-4 py-1.5 rounded-full hover:bg-zinc-800 transition-colors duration-200"
        >
          Get started
        </Link>
      </div>
    </nav>
  );
}
