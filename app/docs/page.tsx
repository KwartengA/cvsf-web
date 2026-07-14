"use client";

import { useState, useRef, useEffect } from "react";
import {
  Camera,
  Zap,
  Activity,
  Trophy,
  ShieldCheck,
  Terminal,
  BookOpen,
  BadgeDollarSign,
  ChevronRight,
  Search,
} from "lucide-react";
import { docNav } from "@/constants/docs";

const sections = [
  {
    id: "introducing",
    icon: BookOpen,
    title: "Introducing CVSF",
    body: "CVSF is a computer vision fitness platform that gives real-time posture and form feedback using your camera — no gym trainer required. It runs entirely on-device, meaning no video ever leaves your local network.",
    headings: [
      { id: "introducing-overview", label: "Overview" },
      { id: "introducing-how-it-works", label: "How it works" },
      { id: "introducing-privacy", label: "Privacy" },
    ],
  },
  {
    id: "setup",
    icon: Terminal,
    title: "Setup",
    body: "Getting started takes under ten minutes. You need a camera-equipped device running Linux (or macOS for development), Node.js 18+, and a modern browser. Clone the repo, run the install script, and point your camera at yourself.",
    code: "git clone https://github.com/cvsf/cvsf\ncd cvsf\nnpm install\nnpm run dev",
    headings: [
      { id: "setup-requirements", label: "Requirements" },
      { id: "setup-installation", label: "Installation" },
      { id: "setup-first-run", label: "First run" },
    ],
  },
  {
    id: "camera",
    icon: Camera,
    title: "Camera",
    body: "Any USB or IP camera works. The reference hardware is a Raspberry Pi 4 with the official Camera Module 3. Resolution of 720p or above is recommended for accurate keypoint detection.",
    headings: [
      { id: "camera-supported", label: "Supported cameras" },
      { id: "camera-resolution", label: "Resolution" },
      { id: "camera-placement", label: "Placement tips" },
    ],
  },
  {
    id: "analysis",
    icon: Zap,
    title: "Analysis",
    body: "The analysis engine tracks 33 body keypoints per frame using MediaPipe Pose. Joint angles and alignment are calculated locally and compared against sport-specific form benchmarks. Corrections are surfaced one at a time — the most critical fix first.",
    headings: [
      { id: "analysis-keypoints", label: "Keypoints" },
      { id: "analysis-benchmarks", label: "Benchmarks" },
      { id: "analysis-feedback", label: "Feedback model" },
    ],
  },
  {
    id: "sports",
    icon: Trophy,
    title: "Sports",
    body: "Each sport ships with its own keypoint weights and form rules. Supported disciplines: Gym & strength training, Swimming, Tennis, Basketball. More sports are added with each release.",
    headings: [
      { id: "sports-gym", label: "Gym & strength" },
      { id: "sports-swimming", label: "Swimming" },
      { id: "sports-racket", label: "Tennis" },
      { id: "sports-basketball", label: "Basketball" },
    ],
  },
  {
    id: "sessions",
    icon: Activity,
    title: "Session logs",
    body: "Every session is automatically logged with a timestamp, rep count, and per-rep form score. You can review your trend in the dashboard or export raw data as CSV for external analysis.",
    headings: [
      { id: "sessions-logging", label: "Logging" },
      { id: "sessions-dashboard", label: "Dashboard" },
      { id: "sessions-export", label: "CSV export" },
    ],
  },
  {
    id: "deployment",
    icon: ShieldCheck,
    title: "Deployment",
    body: "CVSF is designed to run on a local network. Deploy to a Raspberry Pi, a mini PC, or any Linux server reachable by your devices. A Docker image is provided for one-command setup.",
    code: "docker run -p 3000:3000 ghcr.io/cvsf/cvsf:latest",
    headings: [
      { id: "deployment-local", label: "Local network" },
      { id: "deployment-docker", label: "Docker" },
      { id: "deployment-hardware", label: "Hardware options" },
    ],
  },
  {
    id: "environment",
    icon: Terminal,
    title: "Environment Variables",
    body: "Configuration is handled through a .env file at the project root. Copy .env.example to .env and fill in your values.",
    code: "NEXT_PUBLIC_CAMERA_ID=0\nNEXT_PUBLIC_MODEL_PATH=/models/pose\nPORT=3000",
    headings: [
      { id: "environment-camera", label: "Camera" },
      { id: "environment-model", label: "Model path" },
      { id: "environment-port", label: "Port" },
    ],
  },
];

export default function DocsPage() {
  const [active, setActive] = useState("introducing");
  const [query, setQuery] = useState("");
  const [activeHeading, setActiveHeading] = useState<string>("");
  const mainRef = useRef<HTMLElement>(null);

  const current = sections.find((s) => s.id === active) ?? sections[0];

  // reset active heading when section changes
  useEffect(() => {
    setActiveHeading(current.headings[0]?.id ?? "");
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, [active]);

  // scroll spy — watches heading elements inside the scrollable main
  useEffect(() => {
    const container = mainRef.current;
    if (!container) return;

    const onScroll = () => {
      const headingEls = current.headings
        .map((h) => document.getElementById(h.id))
        .filter(Boolean) as HTMLElement[];

      let current_heading = headingEls[0]?.id ?? "";
      for (const el of headingEls) {
        const rect = el.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        if (rect.top - containerRect.top <= 80) {
          current_heading = el.id;
        }
      }
      setActiveHeading(current_heading);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [current]);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    const container = mainRef.current;
    if (!el || !container) return;
    const offset = el.offsetTop - 48;
    container.scrollTo({ top: offset, behavior: "smooth" });
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-[calc(100vh-57px)] relative">

      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 bg-black text-white w-12 h-12 flex items-center justify-center shadow-lg"
        aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
      >
        {sidebarOpen ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
        )}
      </button>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-40
        w-64 shrink-0 border-r border-zinc-100 flex flex-col bg-white overflow-y-auto
        transition-transform duration-200
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        {/* search */}
        <div className="px-4 py-4 border-b border-zinc-100">
          <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2">
            <Search size={13} className="text-zinc-400 shrink-0" />
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="text-xs bg-transparent outline-none w-full text-zinc-700 placeholder:text-zinc-400"
            />
            <span className="text-[10px] text-zinc-300 font-mono shrink-0">⌘K</span>
          </div>
        </div>

        {/* nav */}
        <nav className="flex-1 px-3 py-4 space-y-6">
          {docNav.map((group) => (
            <div key={group.title}>
              <button
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  group.items.length === 0
                    ? "text-zinc-400 cursor-default"
                    : "text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                <span className="flex items-center gap-2">
                  {group.title === "Documentation" ? (
                    <BookOpen size={14} className="text-zinc-400" />
                  ) : (
                    <BadgeDollarSign size={14} className="text-zinc-400" />
                  )}
                  {group.title}
                </span>
                {group.items.length > 0 && (
                  <ChevronRight size={13} className="text-zinc-300" />
                )}
              </button>

              {group.items
                .filter((item) =>
                  query ? item.label.toLowerCase().includes(query.toLowerCase()) : true
                )
                .map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActive(item.id);
                    setQuery("");
                    setSidebarOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 ml-2 rounded-lg text-xs transition-colors duration-150 ${
                    active === item.id
                      ? "bg-zinc-100 text-black font-medium"
                      : "text-zinc-500 hover:text-black hover:bg-zinc-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      {/* main content */}
      <main ref={mainRef} className="flex-1 overflow-y-auto px-6 sm:px-12 py-8 sm:py-12">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
              <current.icon size={16} className="text-zinc-600" />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">{current.title}</h1>
          </div>

          <p className="text-sm text-zinc-500 leading-relaxed mb-8">{current.body}</p>

          {current.code && (
            <div className="bg-zinc-950 rounded-2xl px-5 py-4 mb-8">
              <pre className="text-xs text-zinc-300 font-mono leading-relaxed whitespace-pre">
                {current.code}
              </pre>
            </div>
          )}

          {/* section sub-headings with content placeholders */}
          {current.headings.map((h) => (
            <div key={h.id} id={h.id} className="mb-10">
              <h2 className="text-base font-semibold tracking-tight mb-3">{h.label}</h2>
              <div className="border border-zinc-100 rounded-2xl p-6 bg-zinc-50">
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                  Coming soon
                </p>
                <p className="text-sm text-zinc-400">
                  Full documentation for this section is being written. Check back
                  soon or{" "}
                  <a
                    href="/contact"
                    className="underline underline-offset-2 hover:text-black transition-colors"
                  >
                    reach out
                  </a>{" "}
                  if you need help now.
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* on this page — right ToC */}
      <aside className="w-52 shrink-0 px-5 py-10 hidden lg:block">
        <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="text-base leading-none">☰</span> On this page
        </p>
        <ul className="space-y-1">
          {current.headings.map((h) => {
            const isActive = activeHeading === h.id;
            return (
              <li key={h.id} className="flex items-stretch">
                <span
                  className={`w-0.5 rounded-full mr-3 transition-colors duration-200 ${
                    isActive ? "bg-black" : "bg-transparent"
                  }`}
                />
                <button
                  onClick={() => scrollToHeading(h.id)}
                  className={`text-xs text-left transition-colors duration-200 ${
                    isActive ? "text-black font-medium" : "text-zinc-400 hover:text-zinc-700"
                  }`}
                >
                  {h.label}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}
