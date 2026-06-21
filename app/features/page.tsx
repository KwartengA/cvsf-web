import { features, sportCards } from "@/constants/features";

export default function FeaturesPage() {
  return (
    <div className="max-w-2xl mx-auto px-8 pt-20 pb-40">

      
      <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
        Features
      </p>
      <h1 className="text-4xl font-semibold tracking-tight mb-4">
        Everything you need to move better
      </h1>
      <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mb-20">
        Built around one idea — you should know when your form breaks down,
        not after the session.
      </p>

      
      <div className="flex flex-col gap-20">

        
        {features.slice(0, 2).map((f) => (
          <div key={f.tag}>
            <div
              className="w-full h-72 bg-zinc-900 rounded-3xl"
              style={{ transform: `rotate(${f.tilt}deg)` }}
            >
              
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20" />
              </div>
            </div>
            <div className="mt-6 px-1">
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
                {f.tag}
              </p>
              <h2 className="text-xl font-semibold text-black mb-2">{f.title}</h2>
              <p className="text-sm text-zinc-500 leading-relaxed">{f.description}</p>
            </div>
          </div>
        ))}

        
        <div>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
            03 — Sports
          </p>
          <h2 className="text-xl font-semibold text-black mb-2">Multi-sport profiles</h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-8">
            Purpose-built form rules per discipline. A squat is not a swim
            stroke — each sport has its own keypoint weights and benchmarks.
          </p>

          
          <div className="grid grid-cols-2 gap-4">
            {sportCards.map((s, i) => {
              const tilts = [-2, 1.5, -1.5, 2];
              return (
                <div key={s.name}>
                  <div
                    className="w-full h-48 bg-zinc-900 rounded-2xl"
                    style={{ transform: `rotate(${tilts[i]}deg)` }}
                  >
                    
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20" />
                    </div>
                  </div>
                  <div className="mt-3 px-1">
                    <h3 className="text-sm font-semibold text-black mb-0.5">{s.name}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">{s.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        
        {features.slice(2).map((f) => (
          <div key={f.tag}>
            <div
              className="w-full h-72 bg-zinc-900 rounded-3xl"
              style={{ transform: `rotate(${f.tilt}deg)` }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20" />
              </div>
            </div>
            <div className="mt-6 px-1">
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
                {f.tag}
              </p>
              <h2 className="text-xl font-semibold text-black mb-2">{f.title}</h2>
              <p className="text-sm text-zinc-500 leading-relaxed">{f.description}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
