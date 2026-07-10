import Link from "next/link";
import { footerGroups } from "@/constants/footer";

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-14 sm:pt-16 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-14 sm:mb-16">

          {/* Newsletter col */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block font-black text-sm tracking-widest uppercase text-black mb-8">
              CVSF
            </Link>
            <p className="text-xs font-black uppercase tracking-widest text-black mb-4">
              Sign up for our newsletter
            </p>
            <form className="flex items-center border border-zinc-300 hover:border-black transition-colors duration-200 mb-3">
              <input
                type="email"
                placeholder="Drop your email"
                className="flex-1 bg-transparent text-sm text-black placeholder-zinc-400 px-4 py-3 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="px-4 py-3 text-black hover:text-zinc-500 transition-colors cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
            <p className="text-[11px] text-zinc-400 leading-relaxed mb-8">
              Accessible movement analysis for everyone.
            </p>

            {/* Follow us */}
            <p className="text-xs font-black uppercase tracking-widest text-black mb-4">Follow us</p>
            <div className="flex gap-4">
              <a href="#" aria-label="X (Twitter)" className="text-zinc-400 hover:text-black transition-colors duration-200">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="Instagram" className="text-zinc-400 hover:text-black transition-colors duration-200">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Link groups */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-black uppercase tracking-widest text-black mb-6">
                {group.title}
              </p>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="border-t border-zinc-100 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-[11px] text-zinc-500">© 2026 CVSF</span>
          <span className="text-[11px] text-zinc-500 max-w-xl leading-relaxed">
            Results may vary. Consult a healthcare professional before starting any new fitness program.
          </span>
        </div>

      </div>
    </footer>
  );
}
