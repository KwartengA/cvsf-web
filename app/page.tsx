import Image from "next/image";
import AudienceSection from "@/app/components/AudienceSection";

export default function Home() {
  return (
    <div className="bg-white text-black font-sans">
      <section className="relative w-full h-[85vh] min-h-120 flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/pose_estimation_001.png"
          alt="Athlete in motion"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 text-center px-6 sm:px-10 max-w-5xl mx-auto">
          <p className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-white/70 mb-4 sm:mb-6">
            AI-powered movement analysis
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight text-white">
            Real-time posture.<br />Zero guesswork.
          </h1>
        </div>
      </section>

      <section id="how" className="bg-white py-20 sm:py-28 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-16">
            From camera to correction<br className="hidden sm:block" /> in under a second.
          </h2>

          <div className="flex flex-col divide-y divide-zinc-100">
            {[
              {
                step: "1",
                title: "Point your camera",
                desc: "Set up any USB or IP camera — or use your laptop's built-in one. The app starts tracking the moment it sees you.",
              },
              {
                step: "2",
                title: "AI maps your body",
                desc: "33 keypoints are tracked at up to 30 frames per second, entirely on your device. No video is ever sent to a server.",
              },
              {
                step: "3",
                title: "Get the one fix that matters",
                desc: "One correction surfaces at a time — the most important one, right when your form breaks. No noise, no overwhelm.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-8 sm:gap-12 py-10">
                <span className="text-4xl sm:text-5xl font-black text-zinc-100 leading-none shrink-0 w-10 sm:w-14 select-none">
                  {step}
                </span>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
                  <p className="text-base text-zinc-600 leading-relaxed max-w-md">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AudienceSection />

      <section className="border-t border-zinc-100 bg-zinc-50 py-20 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Move better, starting today.</h2>
        <p className="text-zinc-500 mb-8 text-sm">Join the waitlist for early access.</p>
        <a href="#" className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
          Request early access
        </a>
      </section>
    </div>
  );
}
