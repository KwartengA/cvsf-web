"use client";

import { useState } from "react";

const audiences = [
  {
    title: "Athletes",
    tagline: "Train smarter, not just harder.",
    desc: "Catch form breakdown before it becomes an injury. Get rep-by-rep scoring and trend data so you can see exactly where your technique is drifting — and fix it before it costs you.",
    stats: [
      { value: "33", label: "keypoints tracked" },
      { value: "30fps", label: "real-time analysis" },
      { value: "1", label: "correction at a time" },
    ],
  },
  {
    title: "Rehab patients",
    tagline: "Know your form is right, every rep.",
    desc: "Exercises done with poor form during recovery can set you back weeks. CVSF gives you a second set of eyes on every movement — and logs your progress so you can show your physio exactly what you've been doing.",
    stats: [
      { value: "100%", label: "on-device, private" },
      { value: "Every", label: "rep scored" },
      { value: "Zero", label: "cloud dependency" },
    ],
  },
  {
    title: "Coaches",
    tagline: "Watch everyone at once.",
    desc: "Monitor multiple athletes in a single session with timestamped form scores and session logs. Spot who needs correction without standing over them — and export data to share with athletes or medical staff.",
    stats: [
      { value: "Multi", label: "athlete support" },
      { value: "CSV", label: "data export" },
      { value: "Full", label: "session history" },
    ],
  },
  {
    title: "Gyms & clinics",
    tagline: "No proprietary hardware required.",
    desc: "Deploy on any device with a camera — a mounted tablet, an existing laptop, or a Raspberry Pi. No expensive setup, no vendor lock-in. Works on your local network with no subscription for the base tier.",
    stats: [
      { value: "Any", label: "camera works" },
      { value: "Local", label: "network only" },
      { value: "Linux", label: "& macOS support" },
    ],
  },
];

export default function AudienceSection() {
  const [active, setActive] = useState(0);
  const current = audiences[active];

  return (
    <section id="features" className="bg-zinc-50 py-20 sm:py-28 px-6 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">Who it's for</p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">
          Built for everyone<br className="hidden sm:block" /> who moves.
        </h2>

        
        <div className="inline-flex flex-wrap gap-1 mb-10 bg-zinc-100 rounded-full p-1.5">
          {audiences.map((a, i) => (
            <button
              key={a.title}
              onClick={() => setActive(i)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                active === i
                  ? "bg-white text-black shadow-sm"
                  : "text-zinc-500 hover:text-black"
              }`}
            >
              {a.title}
            </button>
          ))}
        </div>

        
        <div className="border border-zinc-200 bg-white p-8 sm:p-10">
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
            {current.title}
          </p>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black mb-4">
            {current.tagline}
          </h3>
          <p className="text-base text-zinc-600 leading-relaxed mb-10 max-w-lg">
            {current.desc}
          </p>

          
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-100">
            {current.stats.map((s) => (
              <div key={s.label}>
                <p className="text-xl sm:text-2xl font-black text-black tracking-tight">{s.value}</p>
                <p className="text-xs text-zinc-400 mt-1 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
  