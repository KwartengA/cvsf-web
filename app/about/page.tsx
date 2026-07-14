"use client";

import { faqs, type Faq } from "@/constants/faqs";
import { useRef, useState } from "react";

function Accordion({ question, answer }: Faq) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-zinc-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className={`text-base font-medium transition-colors duration-200 pr-6 ${open ? "text-black" : "text-zinc-700"}`}>
          {question}
        </span>
        <span
          className="shrink-0 text-lg text-zinc-400 transition-transform duration-300 ease-in-out"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 280ms ease",
        }}
      >
        <div ref={contentRef} className="overflow-hidden">
          <p className="pb-6 text-base text-zinc-600 leading-relaxed max-w-lg">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 sm:px-8 pt-14 sm:pt-20 pb-24 sm:pb-32">
      <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
        About
      </p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
        What we are building and why
      </h1>
      <p className="text-base text-zinc-600 leading-relaxed mb-6 max-w-lg">
        CVSF started from a simple frustration — good movement coaching is expensive and out of reach for most people.
      </p>
      <p className="text-base text-zinc-600 leading-relaxed mb-16 max-w-lg">
        We are fixing that with software you already own and models that run entirely on your device. A dedicated hardware setup is available for those who want it, but the software works on most computers with a camera attached. We are in early access and expanding to more devices and sports over time.
      </p>

      <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-5">
        Common questions
      </p>
      <div className="border-t border-zinc-100">
        {faqs.map((faq) => (
          <Accordion key={faq.question} {...faq} />
        ))}
      </div>
    </div>
  );
}
