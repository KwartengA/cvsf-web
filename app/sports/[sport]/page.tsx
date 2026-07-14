import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sportBySlug, sports } from "@/constants/sports";
import TechniqueExplorer from "@/app/components/TechniqueExplorer";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ sport: string }>;
};

export async function generateStaticParams() {
  return sports.map((s) => ({ sport: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sport: slug } = await params;
  const sport = sportBySlug[slug];
  if (!sport) return {};
  return {
    title: `${sport.name} Fundamentals — CVSF`,
    description: sport.description,
  };
}

const resourceTypeLabel: Record<string, string> = {
  book: "Book",
  video: "Channel",
  article: "Article",
  guide: "Guide",
};

export default async function SportPage({ params }: Props) {
  const { sport: slug } = await params;
  const sport = sportBySlug[slug];

  if (!sport) notFound();

  const totalVideos = sport.techniques.reduce((n, t) => n + t.videos.length, 0);

  return (
    <div className="bg-white text-black">

      {/* Hero — full bleed image, text anchored bottom-left */}
      <div className="relative h-[55vh] min-h-96 overflow-hidden">
        <Image
          src={sport.heroImage}
          alt={sport.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/10" />

        <div className="relative z-10 h-full flex flex-col justify-end max-w-6xl mx-auto px-6 sm:px-8 pb-10 sm:pb-14">
          <Link
            href="/sports"
            className="mb-6 inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-white/40 hover:text-white/80 transition-colors duration-150 w-fit"
          >
            ← All sports
          </Link>
          <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
            Fundamentals
          </p>
          <h1 className="text-6xl sm:text-8xl font-black uppercase leading-none tracking-tight text-white">
            {sport.name}
          </h1>
        </div>
      </div>

      {/* Intro + stats */}
      <div className="border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-start">
          <div>
            <p className="text-lg sm:text-xl font-semibold tracking-tight leading-snug mb-3 max-w-2xl">
              {sport.tagline}
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xl">
              {sport.description}
            </p>
          </div>

          {/* Stats — right-aligned on desktop, inline on mobile */}
          <div className="flex gap-10 lg:flex-col lg:gap-6 lg:text-right shrink-0">
            {[
              { value: sport.techniques.length, label: "Techniques" },
              { value: totalVideos, label: "Videos" },
              { value: sport.resources.length, label: "Resources" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-4xl font-black leading-none">{value}</p>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mt-1.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technique explorer */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-14 sm:py-20 border-b border-zinc-100">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <p className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest mb-2">
              Techniques
            </p>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
              Core mechanics
            </h2>
          </div>
        </div>
        <TechniqueExplorer techniques={sport.techniques} />
      </section>

      {/* Resources */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-14 sm:py-20 border-b border-zinc-100">
        <p className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest mb-2">
          Resources
        </p>
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2">
          Go deeper
        </h2>
        <p className="text-sm text-zinc-500 leading-relaxed max-w-md mb-10">
          Books, channels, and guides worth your time if you want to understand the sport beyond the basics.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100">
          {sport.resources.map((r) => (
            <a
              key={r.title}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-6 sm:p-8 flex flex-col justify-between hover:bg-zinc-50 transition-colors duration-200 cursor-pointer"
            >
              <div>
                <span className="inline-block text-[9px] font-mono uppercase tracking-widest text-zinc-400 border border-zinc-100 px-2 py-0.5 mb-5">
                  {resourceTypeLabel[r.type] ?? r.type}
                </span>
                <h3 className="text-sm font-semibold tracking-tight mb-2.5 group-hover:underline leading-snug">
                  {r.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {r.description}
                </p>
              </div>
              <p className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest mt-6 group-hover:text-black transition-colors duration-150">
                Open →
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest mb-2">Keep learning</p>
          <p className="text-lg font-semibold tracking-tight">More sports coming soon.</p>
        </div>
        <Link
          href="/sports"
          className="shrink-0 px-7 py-3 border border-zinc-900 text-xs font-mono uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors duration-200"
        >
          ← All sports
        </Link>
      </div>
    </div>
  );
}
