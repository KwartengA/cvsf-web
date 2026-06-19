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
        className="w-full flex items-center justify-between py-4 text-left transition-colors duration-200"
      >
        <span
          className="text-sm font-medium transition-colors duration-200"
          style={{ color: open ? "#000" : "#3f3f46" }}
        >
          {question}
        </span>
        <span
          className="ml-6 shrink-0 text-base transition-all duration-300 ease-in-out"
          style={{
            color: "#a1a1aa",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
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
          <p className="pb-4 text-sm text-zinc-400 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-8 pt-20 pb-32">
      <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
        About
      </p>
      <h1 className="text-3xl font-semibold tracking-tight mb-3">
        What we are building and why
      </h1>
      <p className="text-sm text-zinc-500 leading-relaxed mb-16 max-w-lg">
        CVSF started from a simple frustration ; good movement coaching as well as learning sports is
        expensive and inaccessible. We are fixing that with software you already own and models that run locally.
        A hardware setup is available for those who want a dedicated device, but the software runs on most computers.
        We are in early access and will be expanding to more devices and platforms over time.
      </p>

      <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
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
