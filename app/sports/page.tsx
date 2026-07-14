import Image from "next/image";
import Link from "next/link";
import { sports } from "@/constants/sports";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports — CVSF",
  description:
    "Learn the fundamentals of each sport. Technique guides, curated videos, and resources for every discipline CVSF covers.",
};

export default function SportsIndexPage() {
  return (
    <div>
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 pt-14 sm:pt-20 pb-14 sm:pb-16">
        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
          Learn the game
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
          Sport fundamentals
        </h1>
        <p className="text-base text-zinc-600 leading-relaxed max-w-md">
          Each sport has its own biomechanical blueprint. Pick a discipline to explore
          the techniques, videos, and resources behind it.
        </p>
      </div>

      {/* Sport cards grid */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100">
          {sports.map((sport) => (
            <Link
              key={sport.slug}
              href={`/sports/${sport.slug}`}
              className="group relative bg-white overflow-hidden block"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={sport.heroImage}
                  alt={sport.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              {/* Text */}
              <div className="p-6 sm:p-8 border-t border-zinc-100">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-2xl font-black uppercase tracking-tight">
                    {sport.name}
                  </h2>
                  <span className="text-zinc-300 text-lg mt-0.5 group-hover:text-black transition-colors duration-200">
                    →
                  </span>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">
                  {sport.tagline}
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    {sport.techniques.length} techniques
                  </span>
                  <span className="text-zinc-200">·</span>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    {sport.resources.length} resources
                  </span>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}
