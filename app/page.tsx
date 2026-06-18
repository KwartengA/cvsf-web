export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      
      <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-200">
        <span className="font-semibold text-lg tracking-tight">CVSF</span>
        <div className="flex gap-6 text-sm text-zinc-500 items-center">
          <a href="#how" className="hover:text-black transition-colors">How it works</a>
          <a href="#features" className="hover:text-black transition-colors">Features</a>
          <a href="#" className="bg-black text-white px-4 py-1.5 rounded-full hover:bg-zinc-800 transition-colors">Get started</a>
        </div>
      </nav>

     
      <section className="max-w-3xl mx-auto px-8 pt-24 pb-20">
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">AI-powered movement analysis</p>
        <h1 className="text-5xl font-semibold leading-tight tracking-tight mb-6">
          Real-time posture<br />feedback, zero guesswork.
        </h1>
        <p className="text-lg text-zinc-500 max-w-xl mb-10">
          A camera and AI analyze your form during exercise, sports, and rehabilitation — giving instant corrective cues before bad habits become injuries.
        </p>
        <div className="flex gap-3">
          <a href="#" className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
            Request early access
          </a>
          <a href="#how" className="px-6 py-3 rounded-full text-sm font-medium border border-zinc-200 hover:bg-zinc-50 transition-colors">
            See how it works
          </a>
        </div>
      </section>

      
      <section className="max-w-3xl mx-auto px-8 pb-24">
        <div className="w-full h-72 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-300 text-sm border border-zinc-200">
          [ live pose demo ]
        </div>
      </section>

      
      <section id="how" className="border-t border-zinc-100 bg-zinc-50 py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-10">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Point the camera", desc: "A Raspberry Pi with an attached camera captures your movement in real time." },
              { step: "02", title: "AI reads your form", desc: "On-device models detect joints, angles, and alignment — no cloud delay." },
              { step: "03", title: "Get instant feedback", desc: "The web dashboard shows corrections and performance data as you move." },
            ].map(({ step, title, desc }) => (
              <div key={step}>
                <p className="text-xs font-mono text-zinc-400 mb-2">{step}</p>
                <h3 className="font-medium mb-1">{title}</h3>
                <p className="text-sm text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <section id="features" className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-10">Built for everyone</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Athletes", desc: "Optimize technique and catch compensations before they cause overuse injuries." },
              { title: "Rehab patients", desc: "Track recovery progress and ensure exercises are done with correct form." },
              { title: "Coaches", desc: "Monitor multiple athletes with timestamped session data and form scores." },
              { title: "Gyms & clinics", desc: "Deploy on any camera-equipped device — no expensive proprietary hardware." },
            ].map(({ title, desc }) => (
              <div key={title} className="p-6 border border-zinc-200 rounded-xl">
                <h3 className="font-medium mb-1">{title}</h3>
                <p className="text-sm text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="border-t border-zinc-100 bg-zinc-50 py-20 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Move better, starting today.</h2>
        <p className="text-zinc-500 mb-8 text-sm">Join the waitlist for early access.</p>
        <a href="#" className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
          Request early access
        </a>
      </section>

      
      <footer className="border-t border-zinc-100 px-8 py-6 text-xs text-zinc-400 flex justify-between">
        <span>© 2026 CVSF</span>
        <span> Accessibilty and knowledge for all </span>
      </footer>
    </div>
  );
}
