"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "How it works", href: "/#how" },
  { label: "Features", href: "/features" },
  { label: "Sports", href: "/sports" },
  { label: "Analytics", href: "/analytics" },
  { label: "About", href: "/about" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-zinc-100 relative z-50">
      <div className="flex items-center justify-between px-6 sm:px-8 py-5">
        <Link href="/" className="font-semibold text-sm tracking-widest uppercase text-black">
          CVSF
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 text-xs items-center">
          {links.map(({ label, href }) => {
            const active = href === "/#how" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`uppercase tracking-widest transition-colors duration-200 ${
                  active ? "text-black font-medium" : "text-zinc-400 hover:text-black"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="uppercase tracking-widest text-xs border border-zinc-300 text-black px-5 py-2 hover:border-black transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            href="/docs"
            className="uppercase tracking-widest text-xs bg-zinc-900 text-white px-5 py-2 hover:bg-black transition-colors duration-200"
          >
            Get started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
        >
          <span className={`block w-5 h-px bg-black transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-black transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-black transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-100 bg-white px-6 py-6 flex flex-col gap-5">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest text-zinc-600 hover:text-black transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-zinc-100">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-center uppercase tracking-widest text-xs border border-zinc-300 text-black px-5 py-3 hover:border-black transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/docs"
              onClick={() => setOpen(false)}
              className="text-center uppercase tracking-widest text-xs bg-zinc-900 text-white px-5 py-3 hover:bg-black transition-colors duration-200"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
