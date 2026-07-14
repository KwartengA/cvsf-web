"use client";

import { useState } from "react";
import type { Technique } from "@/constants/sports/types";

type Props = {
  techniques: Technique[];
};

export default function TechniqueExplorer({ techniques }: Props) {
  const [activeId, setActiveId] = useState(techniques[0]?.id ?? "");
  const [activeVideo, setActiveVideo] = useState(0);

  const technique = techniques.find((t) => t.id === activeId) ?? techniques[0];
  const activeIndex = techniques.findIndex((t) => t.id === activeId);

  function select(id: string) {
    setActiveId(id);
    setActiveVideo(0);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-px bg-zinc-100 border border-zinc-100">

      {/* Left rail — vertical technique nav */}
      <nav aria-label="Techniques" className="bg-white">
        {/* Mobile: horizontal scroll strip */}
        <div className="flex lg:hidden overflow-x-auto border-b border-zinc-100">
          {techniques.map((t) => (
            <button
              key={t.id}
              onClick={() => select(t.id)}
              className={`shrink-0 px-5 py-3.5 text-xs font-mono uppercase tracking-widest transition-colors duration-150 cursor-pointer border-b-2 ${
                activeId === t.id
                  ? "border-black text-black"
                  : "border-transparent text-zinc-400 hover:text-black"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        {/* Desktop: vertical rail with sliding left border */}
        <div className="hidden lg:flex flex-col divide-y divide-zinc-100">
          {techniques.map((t, i) => (
            <button
              key={t.id}
              onClick={() => select(t.id)}
              className={`group relative text-left px-6 py-5 transition-colors duration-150 cursor-pointer ${
                activeId === t.id ? "bg-zinc-50" : "hover:bg-zinc-50/60"
              }`}
            >
              {/* Sliding left accent */}
              <span
                className={`absolute left-0 top-0 w-0.5 h-full bg-black transition-opacity duration-200 ${
                  activeId === t.id ? "opacity-100" : "opacity-0"
                }`}
              />
              <span className="block text-[10px] font-mono text-zinc-300 uppercase tracking-widest mb-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`block text-sm font-semibold leading-tight transition-colors duration-150 ${
                  activeId === t.id ? "text-black" : "text-zinc-500 group-hover:text-black"
                }`}
              >
                {t.name}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Right — full technique content */}
      <div className="bg-white border-l border-zinc-100 min-w-0">

        {/* Technique header */}
        <div className="px-7 sm:px-10 pt-8 pb-7 border-b border-zinc-100">
          <p className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest mb-2">
            {String(activeIndex + 1).padStart(2, "0")} / {String(techniques.length).padStart(2, "0")}
          </p>
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-3">
            {technique.name}
          </h3>
          <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl">
            {technique.summary}
          </p>
        </div>

        {/* Body + Key points — two columns on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] divide-y lg:divide-y-0 lg:divide-x divide-zinc-100">

          {/* Body text */}
          <div className="px-7 sm:px-10 py-8 space-y-4">
            <p className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest mb-5">
              How it works
            </p>
            {technique.body.map((para, i) => (
              <p key={i} className="text-sm text-zinc-700 leading-[1.75]">
                {para}
              </p>
            ))}
          </div>

          {/* Key points sidebar */}
          <div className="px-7 py-8 lg:py-8 bg-zinc-50/50">
            <p className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest mb-5">
              Key points
            </p>
            <ul className="space-y-4">
              {technique.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 flex items-center justify-center border border-zinc-200 text-[9px] font-mono text-zinc-400 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-zinc-600 leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Videos */}
        <div className="border-t border-zinc-100 px-7 sm:px-10 py-8">
          <p className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest mb-5">
            Watch
          </p>

          {/* Video selector */}
          <div className="flex flex-col sm:flex-row gap-2 mb-6">
            {technique.videos.map((v, i) => (
              <button
                key={v.youtubeId}
                onClick={() => setActiveVideo(i)}
                className={`flex-1 text-left px-4 py-3.5 border transition-all duration-150 cursor-pointer group ${
                  activeVideo === i
                    ? "border-black bg-black text-white"
                    : "border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-black bg-white"
                }`}
              >
                <span className={`block text-[9px] font-mono uppercase tracking-widest mb-1.5 ${activeVideo === i ? "text-white/50" : "text-zinc-300"}`}>
                  {v.channel} · {v.duration}
                </span>
                <span className="text-xs font-medium leading-snug line-clamp-2">{v.title}</span>
              </button>
            ))}
          </div>

          {/* Embed */}
          <div className="relative w-full aspect-video bg-zinc-50 overflow-hidden">
            <iframe
              key={`${technique.id}-${activeVideo}`}
              src={`https://www.youtube-nocookie.com/embed/${technique.videos[activeVideo].youtubeId}?modestbranding=1&rel=0`}
              title={technique.videos[activeVideo].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Prev / next navigation */}
        <div className="border-t border-zinc-100 px-7 sm:px-10 py-5 flex items-center justify-between">
          <button
            onClick={() => {
              const prev = techniques[(activeIndex - 1 + techniques.length) % techniques.length];
              select(prev.id);
            }}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-black transition-colors duration-150 cursor-pointer"
          >
            ← Prev
          </button>
          <span className="text-[10px] font-mono text-zinc-200 uppercase tracking-widest">
            {technique.name}
          </span>
          <button
            onClick={() => {
              const next = techniques[(activeIndex + 1) % techniques.length];
              select(next.id);
            }}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-black transition-colors duration-150 cursor-pointer"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
