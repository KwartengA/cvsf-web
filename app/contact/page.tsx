"use client";

import { useState } from "react";

type Field = "name" | "email" | "subject" | "message";

const subjects = [
  "General enquiry",
  "Bug report",
  "Feature request",
  "Billing",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState<Record<Field, string>>({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="max-w-xl mx-auto w-full px-8 pt-20 pb-32">
      <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
        Support
      </p>
      <h1 className="text-3xl font-semibold tracking-tight mb-2">
        Get in touch
      </h1>
      <p className="text-sm text-zinc-400 mb-10">
        Have a question, complaint, or idea? We read every message.
      </p>

      {sent ? (
        <div className="border border-zinc-100 rounded-xl px-8 py-10 text-center">
          <p className="text-sm font-medium mb-1">Message received</p>
          <p className="text-sm text-zinc-400">
            We will get back to you within 1–2 business days.
          </p>
          <button
            onClick={() => setSent(false)}
            className="mt-6 text-xs text-zinc-400 underline underline-offset-2 hover:text-black transition-colors"
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs text-zinc-500">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className="border border-zinc-200 rounded-lg px-3.5 py-2.5 text-sm placeholder:text-zinc-300 focus:outline-none focus:border-zinc-400 transition-colors duration-200"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs text-zinc-500">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="border border-zinc-200 rounded-lg px-3.5 py-2.5 text-sm placeholder:text-zinc-300 focus:outline-none focus:border-zinc-400 transition-colors duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="subject" className="text-xs text-zinc-500">Subject</label>
            <select
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="border border-zinc-200 rounded-lg px-3.5 py-2.5 text-sm text-zinc-700 focus:outline-none focus:border-zinc-400 transition-colors duration-200 bg-white"
            >
              {subjects.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs text-zinc-500">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Describe your issue or question..."
              className="border border-zinc-200 rounded-lg px-3.5 py-2.5 text-sm placeholder:text-zinc-300 focus:outline-none focus:border-zinc-400 transition-colors duration-200 resize-none"
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            <p className="text-xs text-zinc-400">
              Or email us at{" "}
              <a
                href="mailto:support@cvsf.io"
                className="underline underline-offset-2 hover:text-black transition-colors"
              >
                support@cvsf.io
              </a>
            </p>
            <button
              type="submit"
              className="bg-black text-white text-sm px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors duration-200"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
