import Link from "next/link";
import { footerGroups, socialLinks } from "@/constants/footer";

function TwitterIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const iconMap = {
  twitter: TwitterIcon,
};

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-100 bg-white">
      <div className="max-w-5xl mx-auto px-8 pt-12 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-12">
          {/* Brand col */}
          <div className="col-span-2 sm:col-span-1">
            <Link
              href="/"
              className="font-semibold text-sm text-black tracking-tight"
            >
              CVSF
            </Link>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed max-w-[160px]">
              Accessible movement analysis for everyone.
            </p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="text-zinc-400 hover:text-black transition-colors duration-200"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link groups */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-medium text-black mb-3">
                {group.title}
              </p>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-zinc-400 hover:text-black transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-100 pt-6 flex items-center justify-between">
          <span className="text-xs text-zinc-400">© 2026 CVSF</span>
          <span className="text-xs text-zinc-400">
            Accessibility and knowledge for all
          </span>
        </div>
      </div>
    </footer>
  );
}
