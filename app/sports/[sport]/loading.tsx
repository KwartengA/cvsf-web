export default function SportLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="h-[50vh] min-h-80 bg-zinc-100" />

      {/* Intro skeleton */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-14 sm:py-20 border-b border-zinc-100 space-y-4">
        <div className="h-6 w-96 bg-zinc-100 rounded" />
        <div className="h-4 w-full max-w-2xl bg-zinc-100 rounded" />
        <div className="h-4 w-5/6 max-w-2xl bg-zinc-100 rounded" />
        <div className="flex gap-8 pt-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-10 w-10 bg-zinc-100 rounded" />
              <div className="h-3 w-20 bg-zinc-100 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Technique explorer skeleton */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-14 sm:py-20 border-b border-zinc-100">
        <div className="h-3 w-24 bg-zinc-100 rounded mb-3" />
        <div className="h-8 w-52 bg-zinc-100 rounded mb-10" />
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-9 w-24 bg-zinc-100 rounded" />
          ))}
        </div>
        {/* Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-px bg-zinc-100 border border-zinc-100">
          <div className="bg-white p-8 space-y-3">
            <div className="h-8 w-36 bg-zinc-100 rounded" />
            <div className="h-3 w-full bg-zinc-100 rounded" />
            <div className="h-3 w-5/6 bg-zinc-100 rounded" />
            <div className="h-3 w-4/6 bg-zinc-100 rounded" />
          </div>
          <div className="bg-white p-8 space-y-3 border-l border-zinc-100">
            <div className="h-3 w-24 bg-zinc-100 rounded" />
            <div className="h-3 w-full bg-zinc-100 rounded" />
            <div className="h-3 w-full bg-zinc-100 rounded" />
            <div className="h-3 w-3/4 bg-zinc-100 rounded" />
            <div className="h-64 w-full bg-zinc-100 rounded mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
