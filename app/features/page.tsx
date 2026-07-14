"use client";

import Image from "next/image";
import Link from "next/link";
import { features, sportCards, sportsSection } from "@/constants/features";
import { useAutoAdvance } from "@/hooks/useAutoAdvance";

const featureHighlights: string[][] = [
  ["33 keypoints per frame", "Up to 30fps on-device", "No internet required", "Works with any camera"],
  ["One correction at a time", "Surfaced at the moment of failure", "Priority-ranked by severity", "No coach needed to interpret"],
  ["Every rep automatically scored", "Session history with trends", "CSV export for coaches", "No manual logging"],
  ["Runs fully offline", "Video never leaves your device", "Works on Raspberry Pi", "No cloud account needed"],
];

export default function FeaturesPage() {
  const { active, visible, progress, goTo } = useAutoAdvance({ count: features.length, interval: 10000 });
  const current = features[active];

  return (
    <div className="bg-white text-black">

      {/* Page header */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 pt-14 sm:pt-20 pb-14 sm:pb-20">
        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
          Features
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
          Everything you need<br className="hidden sm:block" /> to move better
        </h1>
        <p className="text-base text-zinc-600 leading-relaxed max-w-md">
          Built around one idea — you should know when your form breaks down, not after the session.
        </p>
      </div>

      {/* Interactive feature explorer */}
      <section className="border-t border-zinc-100 bg-zinc-50 py-14 sm:py-20 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Feature tabs + progress bar */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 mb-3">
              {features.map((f, i) => (
                <button
                  key={f.tag}
                  onClick={() => goTo(i)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-200 cursor-pointer border ${
                    active === i
                      ? "bg-black text-white border-black"
                      : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400 hover:text-black"
                  }`}
                >
                  {f.tag}
                </button>
              ))}
            </div>
            {/* Auto-advance progress bar */}
            <div className="h-px bg-zinc-200 w-full overflow-hidden">
              <div
                className="h-full bg-black transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Feature panel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border border-zinc-200 bg-white overflow-hidden">

            {/* Image with overlay title — fades on change */}
            <div
              className="relative h-72 sm:h-96 lg:h-auto min-h-72 overflow-hidden group"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 220ms ease",
              }}
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-xs font-mono text-white/50 uppercase tracking-widest mb-2">
                  {current.tag}
                </p>
                <h2 className="text-2xl sm:text-3xl font-black uppercase leading-tight text-white">
                  {current.title}
                </h2>
              </div>
            </div>

            {/* Text panel — slides up on change */}
            <div
              className="flex flex-col justify-between p-8 sm:p-10"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 220ms ease, transform 220ms ease",
              }}
            >
              <div>
                <p className="text-base text-zinc-700 leading-relaxed mb-10">
                  {current.description}
                </p>
                <ul className="space-y-3">
                  {featureHighlights[active].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-zinc-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 pt-8 border-t border-zinc-100 flex items-center justify-between">
                <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono">
                  {active + 1} / {features.length}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => goTo((active - 1 + features.length) % features.length)}
                    aria-label="Previous feature"
                    className="w-8 h-8 flex items-center justify-center border border-zinc-200 text-zinc-400 hover:border-black hover:text-black transition-colors duration-200 cursor-pointer"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => goTo((active + 1) % features.length)}
                    aria-label="Next feature"
                    className="w-8 h-8 flex items-center justify-center border border-zinc-200 text-zinc-400 hover:border-black hover:text-black transition-colors duration-200 cursor-pointer"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports section */}
      <section className="pt-20 sm:pt-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 mb-12">
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
            {sportsSection.tag}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            {sportsSection.title}
          </h2>
          <p className="text-base text-zinc-600 leading-relaxed max-w-lg">
            Purpose-built form rules per discipline. A squat is not a swim stroke — each sport has its own keypoint weights and benchmarks.
          </p>
        </div>

        {/* Sport cards — full bleed alternating */}
        <div>
          {sportCards.map((s, i) => {
            const isEven = i % 2 === 0;
            const panelBg = isEven ? "bg-[#8B9180]" : "bg-[#A09C8E]";
            const slug = s.name.toLowerCase();
            return (
              <Link key={s.name} href={`/sports/${slug}`} className="flex flex-col sm:grid sm:grid-cols-2 sm:h-105 group/card">
                <div className={`relative h-64 sm:h-auto overflow-hidden ${!isEven ? "sm:order-2" : ""}`}>
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                  />
                </div>
                <div className={`flex flex-col justify-center px-8 sm:px-12 py-10 ${panelBg} ${!isEven ? "sm:order-1" : ""}`}>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-white mb-4 sm:mb-5">
                    {s.name}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed max-w-xs mb-6">
                    {s.description}
                  </p>
                  <span className="text-xs font-mono text-white/60 uppercase tracking-widest group-hover/card:text-white transition-colors duration-200">
                    Learn fundamentals →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

    </div>
  );
}
