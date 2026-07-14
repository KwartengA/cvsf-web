"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

type Joint = {
  id: string;
  label: string;
  x: number;
  y: number;
  score: number;
};

type FeedbackItem = {
  id: string;
  severity: "critical" | "warning" | "good";
  joint: string;
  message: string;
  detail: string;
};

type Session = {
  id: string;
  label: string;
  sport: string;
  date: string;
  overallScore: number;
  repCount: number;
  joints: Joint[];
  feedback: FeedbackItem[];
  repScores: number[];
};

type View = "home" | "record" | "processing" | "results";

// ── Demo data ─────────────────────────────────────────────────────────────────

const SPORTS = ["Gym — Squat", "Gym — Deadlift", "Tennis — Serve", "Tennis — Forehand", "Swimming — Freestyle", "Basketball — Shot"];

const DEMO_SESSION: Session = {
  id: "s1",
  label: "Morning session",
  sport: "Gym — Squat",
  date: "Just now",
  overallScore: 71,
  repCount: 12,
  joints: [
    { id: "j-head", label: "Head",       x: 50, y: 8,  score: 90 },
    { id: "j-lsh",  label: "L Shoulder", x: 38, y: 20, score: 85 },
    { id: "j-rsh",  label: "R Shoulder", x: 62, y: 20, score: 82 },
    { id: "j-lel",  label: "L Elbow",    x: 32, y: 32, score: 78 },
    { id: "j-rel",  label: "R Elbow",    x: 68, y: 32, score: 80 },
    { id: "j-lwr",  label: "L Wrist",    x: 28, y: 43, score: 75 },
    { id: "j-rwr",  label: "R Wrist",    x: 72, y: 43, score: 76 },
    { id: "j-hip",  label: "Hip",        x: 50, y: 50, score: 55 },
    { id: "j-lkn",  label: "L Knee",     x: 41, y: 67, score: 42 },
    { id: "j-rkn",  label: "R Knee",     x: 59, y: 67, score: 48 },
    { id: "j-lank", label: "L Ankle",    x: 41, y: 84, score: 68 },
    { id: "j-rank", label: "R Ankle",    x: 59, y: 84, score: 65 },
  ],
  feedback: [
    {
      id: "f1", severity: "critical", joint: "Knee",
      message: "Knee cave on descent",
      detail: "Both knees are collapsing inward at the bottom of the squat. Drive your knees out in line with your toes throughout the entire descent.",
    },
    {
      id: "f2", severity: "critical", joint: "Hip",
      message: "Hip hinge too early",
      detail: "Your hips are breaking before your knees, shifting load onto the lower back. Initiate the descent with simultaneous knee and hip movement.",
    },
    {
      id: "f3", severity: "warning", joint: "L Shoulder",
      message: "Bar creeping forward",
      detail: "The bar is drifting past mid-foot on reps 6–10. Keep your chest up and brace harder before the descent.",
    },
    {
      id: "f4", severity: "good", joint: "Head",
      message: "Head position consistent",
      detail: "Neutral spine from the neck upward through all reps. Keep it.",
    },
  ],
  repScores: [78, 75, 72, 70, 68, 65, 62, 68, 71, 70, 74, 76],
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function scoreColor(score: number) {
  if (score >= 80) return "#22c55e";
  if (score >= 60) return "#f59e0b";
  return "#ef4444";
}

function scoreLabel(score: number) {
  if (score >= 80) return "Good";
  if (score >= 60) return "Fair";
  return "Needs work";
}

const SEV = {
  critical: { dot: "bg-red-500",   label: "Fix now", border: "border-red-100",   bg: "bg-red-50"    },
  warning:  { dot: "bg-amber-400", label: "Watch",   border: "border-amber-100", bg: "bg-amber-50"  },
  good:     { dot: "bg-green-500", label: "Good",    border: "border-green-100", bg: "bg-green-50"  },
};

const SKELETON_CONNECTIONS: [string, string][] = [
  ["j-head","j-lsh"],["j-head","j-rsh"],["j-lsh","j-rsh"],
  ["j-lsh","j-lel"],["j-lel","j-lwr"],
  ["j-rsh","j-rel"],["j-rel","j-rwr"],
  ["j-lsh","j-hip"],["j-rsh","j-hip"],
  ["j-hip","j-lkn"],["j-lkn","j-lank"],
  ["j-hip","j-rkn"],["j-rkn","j-rank"],
];

// ── Sub-components ────────────────────────────────────────────────────────────

function PoseMap({ joints, activeJoint, onHover }: {
  joints: Joint[];
  activeJoint: string | null;
  onHover: (id: string | null) => void;
}) {
  const byId = Object.fromEntries(joints.map((j) => [j.id, j]));
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" aria-label="Pose map">
      {SKELETON_CONNECTIONS.map(([a, b]) => {
        const ja = byId[a]; const jb = byId[b];
        if (!ja || !jb) return null;
        return <line key={`${a}-${b}`} x1={ja.x} y1={ja.y} x2={jb.x} y2={jb.y} stroke="#e4e4e7" strokeWidth="0.8" />;
      })}
      {joints.map((j) => {
        const isActive = activeJoint === j.id;
        const color = scoreColor(j.score);
        return (
          <g key={j.id} onMouseEnter={() => onHover(j.id)} onMouseLeave={() => onHover(null)} className="cursor-pointer">
            {isActive && <circle cx={j.x} cy={j.y} r="5" fill="none" stroke={color} strokeWidth="0.8" opacity="0.4" />}
            <circle cx={j.x} cy={j.y} r="2.4" fill={color} opacity={isActive ? 1 : 0.8} />
          </g>
        );
      })}
    </svg>
  );
}

// Live skeleton overlay during recording — animated demo dots
function LiveSkeleton() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 80);
    return () => clearInterval(id);
  }, []);

  // Base keypoints in % of container
  const base: { x: number; y: number }[] = [
    { x: 50, y: 10 }, // head
    { x: 38, y: 22 }, // lsh
    { x: 62, y: 22 }, // rsh
    { x: 30, y: 36 }, // lel
    { x: 70, y: 36 }, // rel
    { x: 25, y: 48 }, // lwr
    { x: 75, y: 48 }, // rwr
    { x: 50, y: 52 }, // hip
    { x: 42, y: 68 }, // lkn
    { x: 58, y: 68 }, // rkn
    { x: 42, y: 84 }, // lank
    { x: 58, y: 84 }, // rank
  ];

  // Gentle breathing oscillation
  const amp = 0.6;
  const pts = base.map((p, i) => ({
    x: p.x + Math.sin(tick * 0.05 + i * 0.4) * amp,
    y: p.y + Math.cos(tick * 0.04 + i * 0.3) * amp * 0.5,
  }));

  const conn = [
    [0,1],[0,2],[1,2],[1,3],[3,5],[2,4],[4,6],[1,7],[2,7],[7,8],[8,10],[7,9],[9,11],
  ];

  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
      {conn.map(([a, b], i) => (
        <line
          key={i}
          x1={pts[a].x} y1={pts[a].y}
          x2={pts[b].x} y2={pts[b].y}
          stroke="rgba(34,197,94,0.7)"
          strokeWidth="0.8"
        />
      ))}
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="1.6" fill="#22c55e" opacity="0.9" />
      ))}
    </svg>
  );
}

function ScoreRing({ score }: { score: number }) {
  const r = 30;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  const color = scoreColor(score);
  return (
    <svg viewBox="0 0 80 80" className="w-16 h-16 shrink-0" aria-label={`Score ${score}`}>
      <circle cx="40" cy="40" r={r} fill="none" stroke="#f4f4f5" strokeWidth="5" />
      <circle cx="40" cy="40" r={r} fill="none" stroke={color} strokeWidth="5"
        strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
        transform="rotate(-90 40 40)" style={{ transition: "stroke-dasharray 800ms ease" }} />
      <text x="40" y="45" textAnchor="middle" fontSize="13" fontWeight="800" fill="#09090b" fontFamily="inherit">{score}</text>
    </svg>
  );
}

function RepChart({ scores }: { scores: number[] }) {
  const w = 100; const h = 40;
  const pts = scores.map((s, i) => `${(i / (scores.length - 1)) * w},${h - (s / 100) * h}`);
  const fill = [`0,${h}`, ...pts, `${w},${h}`].join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-10" preserveAspectRatio="none">
      <polygon points={fill} fill="#09090b" opacity="0.04" />
      <polyline points={pts.join(" ")} fill="none" stroke="#09090b" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" />
      {scores.map((s, i) => {
        const x = (i / (scores.length - 1)) * w;
        const y = h - (s / 100) * h;
        return <circle key={i} cx={x} cy={y} r="1.4" fill={scoreColor(s)} />;
      })}
    </svg>
  );
}

// ── Views ─────────────────────────────────────────────────────────────────────

function HomeView({ onStart }: { onStart: () => void }) {
  const [sport, setSport] = useState(SPORTS[0]);
  return (
    <div className="max-w-2xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
      <p className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest mb-3">Ready to analyse</p>
      <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-2">New session</h2>
      <p className="text-sm text-zinc-500 leading-relaxed mb-12 max-w-sm">
        Point your camera at yourself, select the exercise, and record. CVSF analyses your movement in real time.
      </p>

      {/* Sport picker */}
      <div className="mb-8">
        <label className="block text-[10px] font-mono text-zinc-300 uppercase tracking-widest mb-3">
          Exercise
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100">
          {SPORTS.map((s) => (
            <button
              key={s}
              onClick={() => setSport(s)}
              className={`px-4 py-3 text-xs text-left transition-colors duration-150 cursor-pointer ${
                sport === s
                  ? "bg-black text-white"
                  : "bg-white text-zinc-500 hover:text-black hover:bg-zinc-50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="border border-zinc-100 divide-y divide-zinc-100 mb-10">
        {[
          ["Position", "Stand 2–3 metres from the camera. Your full body should be visible."],
          ["Lighting", "Face a light source. Avoid strong backlight."],
          ["Space", "Clear the area behind you. A plain wall works best."],
        ].map(([title, desc]) => (
          <div key={title} className="flex gap-4 px-5 py-4">
            <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest mt-0.5 w-16 shrink-0">{title}</span>
            <span className="text-xs text-zinc-600 leading-relaxed">{desc}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onStart}
        className="w-full sm:w-auto px-10 py-4 bg-black text-white text-xs font-mono uppercase tracking-widest hover:bg-zinc-800 transition-colors duration-200 cursor-pointer"
      >
        Open camera →
      </button>
    </div>
  );
}

function RecordView({ onDone }: { onDone: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [camState, setCamState] = useState<"requesting" | "live" | "denied">("requesting");
  const [recording, setRecording] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [reps, setReps] = useState(0);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const repTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Request camera
  useEffect(() => {
    navigator.mediaDevices?.getUserMedia({ video: { facingMode: "user" }, audio: false })
      .then((stream) => {
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play().catch(() => {});
        }
        setCamState("live");
      })
      .catch(() => setCamState("denied"));
    return () => { streamRef.current?.getTracks().forEach((t) => t.stop()); };
  }, []);

  // Countdown then record
  const startCountdown = useCallback(() => {
    setCountdown(3);
    const id = setInterval(() => {
      setCountdown((c) => {
        if (c === null || c <= 1) {
          clearInterval(id);
          setCountdown(null);
          setRecording(true);
          return null;
        }
        return c - 1;
      });
    }, 1000);
  }, []);

  // Elapsed timer + fake rep counter
  useEffect(() => {
    if (!recording) return;
    timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    repTimerRef.current = setInterval(() => setReps((r) => r + 1), 4200);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (repTimerRef.current) clearInterval(repTimerRef.current);
    };
  }, [recording]);

  function stopAndAnalyse() {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    onDone();
  }

  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-8">
      <p className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest mb-6">Camera</p>

      {/* Camera viewport */}
      <div className="relative w-full aspect-4/3 sm:aspect-video bg-zinc-950 overflow-hidden border border-zinc-800">

        {camState === "requesting" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <span className="w-5 h-5 rounded-full border-2 border-zinc-600 border-t-white animate-spin" />
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Requesting camera</p>
          </div>
        )}

        {camState === "denied" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-8 text-center">
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Camera access denied</p>
            <p className="text-xs text-zinc-600 leading-relaxed">Allow camera access in your browser settings, then reload the page.</p>
          </div>
        )}

        {camState === "live" && (
          <>
            <video
              ref={videoRef}
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
            />
            {/* Skeleton overlay when recording */}
            {recording && <LiveSkeleton />}

            {/* Countdown overlay */}
            {countdown !== null && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <span className="text-8xl font-black text-white" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {countdown}
                </span>
              </div>
            )}

            {/* Corner guides (frame guides) */}
            {!recording && countdown === null && (
              <>
                {[["top-3 left-3","border-t border-l"],["top-3 right-3","border-t border-r"],
                  ["bottom-3 left-3","border-b border-l"],["bottom-3 right-3","border-b border-r"]].map(([pos, border], i) => (
                  <span key={i} className={`absolute ${pos} w-6 h-6 border-white/40 ${border}`} />
                ))}
                <p className="absolute bottom-4 left-0 right-0 text-center text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  Fit your full body in frame
                </p>
              </>
            )}

            {/* Recording HUD */}
            {recording && (
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-black/60 px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-white uppercase tracking-widest">{fmt(elapsed)}</span>
                </div>
                <div className="bg-black/60 px-3 py-1.5">
                  <span className="text-[10px] font-mono text-white uppercase tracking-widest">{reps} reps</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Controls */}
      <div className="mt-5 flex items-center gap-3">
        {!recording && countdown === null && camState === "live" && (
          <button
            onClick={startCountdown}
            className="flex-1 sm:flex-none px-8 py-3.5 bg-black text-white text-xs font-mono uppercase tracking-widest hover:bg-zinc-800 transition-colors duration-200 cursor-pointer"
          >
            Start recording
          </button>
        )}
        {(recording || countdown !== null) && (
          <button
            onClick={stopAndAnalyse}
            disabled={countdown !== null}
            className="flex-1 sm:flex-none px-8 py-3.5 border border-zinc-900 text-xs font-mono uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Stop & analyse
          </button>
        )}
        <button
          onClick={() => { streamRef.current?.getTracks().forEach((t) => t.stop()); onDone(); }}
          className="px-5 py-3.5 text-xs font-mono text-zinc-400 uppercase tracking-widest hover:text-black transition-colors duration-150 cursor-pointer"
        >
          Cancel
        </button>
      </div>

      {recording && (
        <p className="mt-4 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
          CVSF is tracking your movement — keep going until you finish your set.
        </p>
      )}
    </div>
  );
}

function ProcessingView() {
  const steps = ["Reading keypoints", "Scoring joint angles", "Generating feedback", "Building report"];
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep((s) => Math.min(s + 1, steps.length - 1)), 600);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="max-w-sm mx-auto px-6 sm:px-8 py-24 flex flex-col items-center text-center">
      <div className="w-8 h-8 rounded-full border-2 border-zinc-200 border-t-black animate-spin mb-10" />
      <p className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest mb-8">Analysing session</p>
      <div className="w-full space-y-3">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-3 text-left">
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-300 ${i <= step ? "bg-black" : "bg-zinc-200"}`} />
            <span className={`text-xs font-mono uppercase tracking-widest transition-colors duration-300 ${i <= step ? "text-black" : "text-zinc-300"}`}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultsView({ session, onNew }: { session: Session; onNew: () => void }) {
  const [activeJoint, setActiveJoint] = useState<string | null>(null);
  const [openFeedback, setOpenFeedback] = useState<string | null>(session.feedback[0]?.id ?? null);

  const hoveredJoint = session.joints.find((j) => j.id === activeJoint) ?? null;
  const criticals = session.feedback.filter((f) => f.severity === "critical");
  const warnings  = session.feedback.filter((f) => f.severity === "warning");
  const goods     = session.feedback.filter((f) => f.severity === "good");

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8">

      {/* Results header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 pb-8 border-b border-zinc-100">
        <div>
          <p className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest mb-2">Session complete</p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-1">{session.sport}</h2>
          <p className="text-xs font-mono text-zinc-400">{session.date} · {session.repCount} reps</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <ScoreRing score={session.overallScore} />
            <div>
              <p className="text-[9px] font-mono text-zinc-300 uppercase tracking-widest mb-0.5">Form score</p>
              <p className="text-2xl font-black leading-none">{scoreLabel(session.overallScore)}</p>
            </div>
          </div>
          <button
            onClick={onNew}
            className="px-6 py-3 border border-zinc-200 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:border-black hover:text-black transition-colors duration-200 cursor-pointer"
          >
            New session
          </button>
        </div>
      </div>

      {/* Summary stats row */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-px bg-zinc-100 border border-zinc-100 mb-8">
        {[
          { value: session.repCount, label: "Reps" },
          { value: session.overallScore, label: "Score" },
          { value: criticals.length, label: "Fix now" },
          { value: warnings.length, label: "Watch" },
          { value: goods.length, label: "Strengths" },
          { value: Math.round(session.repScores.reduce((a,b) => a+b,0) / session.repScores.length), label: "Avg rep" },
        ].map(({ value, label }) => (
          <div key={label} className="bg-white px-5 py-4">
            <p className="text-2xl font-black leading-none mb-1">{value}</p>
            <p className="text-[9px] font-mono text-zinc-300 uppercase tracking-widest">{label}</p>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_320px] gap-px bg-zinc-100 border border-zinc-100">

        {/* ── Pose map ── */}
        <div className="bg-white">
          <div className="px-5 py-3.5 border-b border-zinc-100">
            <p className="text-[9px] font-mono text-zinc-300 uppercase tracking-widest">
              {hoveredJoint ? `${hoveredJoint.label} — ${hoveredJoint.score}/100` : "Joint map — hover to inspect"}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-px bg-zinc-100">
            {/* SVG figure */}
            <div className="bg-zinc-50 flex items-center justify-center p-8 sm:p-6">
              <div className="w-32 sm:w-28 lg:w-36">
                <PoseMap joints={session.joints} activeJoint={activeJoint} onHover={setActiveJoint} />
              </div>
            </div>
            {/* Joint rows */}
            <div className="bg-white flex-1">
              <div className="divide-y divide-zinc-50">
                {session.joints.map((j) => (
                  <div
                    key={j.id}
                    onMouseEnter={() => setActiveJoint(j.id)}
                    onMouseLeave={() => setActiveJoint(null)}
                    className={`flex items-center gap-3 px-5 py-2 cursor-default transition-colors duration-100 ${activeJoint === j.id ? "bg-zinc-50" : ""}`}
                  >
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: scoreColor(j.score) }} />
                    <span className="text-xs text-zinc-600 w-20 shrink-0">{j.label}</span>
                    <div className="flex-1 h-px bg-zinc-100 relative">
                      <div className="absolute left-0 top-0 h-full" style={{ width: `${j.score}%`, backgroundColor: scoreColor(j.score), transition: "width 600ms ease" }} />
                    </div>
                    <span className="text-xs font-mono text-zinc-400 w-8 text-right shrink-0">{j.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Rep chart ── */}
        <div className="bg-white">
          <div className="px-5 py-3.5 border-b border-zinc-100 flex items-center justify-between">
            <p className="text-[9px] font-mono text-zinc-300 uppercase tracking-widest">Rep quality</p>
            <div className="flex gap-3">
              {[["#22c55e","Good"],["#f59e0b","Fair"],["#ef4444","Poor"]].map(([c,l]) => (
                <span key={l} className="flex items-center gap-1 text-[9px] font-mono text-zinc-300 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: c }} />{l}
                </span>
              ))}
            </div>
          </div>
          <div className="px-5 pt-6 pb-4">
            <RepChart scores={session.repScores} />
            <div className="flex justify-between mt-2">
              <span className="text-[9px] font-mono text-zinc-300">Rep 1</span>
              <span className="text-[9px] font-mono text-zinc-300">Rep {session.repCount}</span>
            </div>
          </div>

          {/* Best / worst reps */}
          <div className="mx-5 mb-5 grid grid-cols-2 gap-px bg-zinc-100 border border-zinc-100">
            {[
              { label: "Best rep", value: Math.max(...session.repScores), color: "#22c55e" },
              { label: "Worst rep", value: Math.min(...session.repScores), color: "#ef4444" },
            ].map(({ label, value, color }) => (
              <div key={label} className="bg-white px-4 py-3">
                <p className="text-[9px] font-mono text-zinc-300 uppercase tracking-widest mb-1">{label}</p>
                <p className="text-xl font-black" style={{ color }}>{value}</p>
              </div>
            ))}
          </div>

          {/* Trend note */}
          <div className="mx-5 mb-5 px-4 py-3 bg-zinc-50 border border-zinc-100">
            <p className="text-[9px] font-mono text-zinc-300 uppercase tracking-widest mb-1">Trend</p>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Form drops on reps 5–8 then partially recovers. Fatigue is causing the knee cave to worsen mid-set.
            </p>
          </div>
        </div>

        {/* ── Feedback panel ── */}
        <div className="bg-white flex flex-col">
          <div className="px-5 py-3.5 border-b border-zinc-100">
            <p className="text-[9px] font-mono text-zinc-300 uppercase tracking-widest mb-1">Feedback</p>
            <p className="text-xs font-semibold">
              {criticals.length} to fix · {warnings.length} to watch · {goods.length} strengths
            </p>
          </div>

          {/* Critical first */}
          {[...criticals, ...warnings, ...goods].map((f) => {
            const meta = SEV[f.severity];
            const isOpen = openFeedback === f.id;
            return (
              <div key={f.id} className={`border-b border-zinc-50 last:border-0 ${isOpen ? meta.bg : ""}`}>
                <button
                  onClick={() => setOpenFeedback(isOpen ? null : f.id)}
                  className={`w-full text-left px-5 py-4 flex items-start gap-3 cursor-pointer transition-colors duration-150 ${!isOpen ? "hover:bg-zinc-50" : ""}`}
                >
                  <span className={`shrink-0 w-1.5 h-1.5 rounded-full mt-1.5 ${meta.dot}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2 mb-0.5">
                      <span className="text-xs font-semibold leading-snug">{f.message}</span>
                      <span className={`text-[9px] font-mono uppercase tracking-widest shrink-0 ${
                        f.severity === "critical" ? "text-red-400" :
                        f.severity === "warning"  ? "text-amber-400" : "text-green-500"
                      }`}>{meta.label}</span>
                    </div>
                    <span className="text-[9px] font-mono text-zinc-300 uppercase tracking-widest">{f.joint}</span>
                  </div>
                  <span className={`text-zinc-300 text-xs shrink-0 mt-0.5 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}>→</span>
                </button>
                {isOpen && (
                  <div className={`px-5 pb-4 border-t ${meta.border}`}>
                    <p className="text-xs text-zinc-600 leading-relaxed pt-3">{f.detail}</p>
                  </div>
                )}
              </div>
            );
          })}

          <div className="px-5 py-4 border-t border-zinc-100 mt-auto">
            <p className="text-[9px] font-mono text-zinc-300 uppercase tracking-widest leading-relaxed">
              Fix critical items first — they carry the highest impact on your score.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Root page ─────────────────────────────────────────────────────────────────

export default function AnalyticsPage() {
  const [view, setView] = useState<View>("home");

  function handleRecordDone() {
    setView("processing");
    setTimeout(() => setView("results"), 2800);
  }

  return (
    <div className="bg-white text-black min-h-screen">

      {/* Page header */}
      <div className="border-b border-zinc-100 px-6 sm:px-8 py-7 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div>
            <p className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest mb-1">Movement analysis</p>
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none">Analytics</h1>
          </div>
        </div>

        {/* View pills */}
        <div className="hidden sm:flex gap-1">
          {(["home","record","results"] as const).map((v) => (
            <button
              key={v}
              onClick={() => v !== "record" ? setView(v) : setView("record")}
              className={`px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest border transition-colors duration-150 cursor-pointer ${
                view === v || (view === "processing" && v === "record")
                  ? "bg-black text-white border-black"
                  : "border-zinc-200 text-zinc-400 hover:border-zinc-400 hover:text-black"
              }`}
            >
              {v === "home" ? "Start" : v === "record" ? "Record" : "Results"}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {view === "home"       && <HomeView onStart={() => setView("record")} />}
      {view === "record"     && <RecordView onDone={handleRecordDone} />}
      {view === "processing" && <ProcessingView />}
      {view === "results"    && <ResultsView session={DEMO_SESSION} onNew={() => setView("home")} />}
    </div>
  );
}
