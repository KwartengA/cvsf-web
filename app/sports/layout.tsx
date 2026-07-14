import type { ReactNode } from "react";

export default function SportsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white text-black min-h-screen">
      {children}
    </div>
  );
}
