export default function SportsLoading() {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-6 sm:px-8 pt-14 sm:pt-20 pb-14 sm:pb-16 animate-pulse">
        <div className="h-3 w-24 bg-zinc-100 rounded mb-5" />
        <div className="h-10 w-72 bg-zinc-100 rounded mb-4" />
        <div className="h-4 w-96 bg-zinc-100 rounded" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 pb-24 animate-pulse">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white">
              <div className="h-56 sm:h-64 bg-zinc-100" />
              <div className="p-6 sm:p-8 border-t border-zinc-100 space-y-3">
                <div className="h-7 w-32 bg-zinc-100 rounded" />
                <div className="h-3 w-full bg-zinc-100 rounded" />
                <div className="h-3 w-3/4 bg-zinc-100 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
