export function ExperienceSkeleton() {
  return (
    <section className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="h-3 w-20 bg-forest/10 rounded-full mb-3 animate-pulse" />
          <div className="h-10 w-72 bg-forest/10 rounded-lg animate-pulse" />
        </div>
        <div className="flex flex-col gap-12">
          {[1, 2].map(i => (
            <div key={i} className="relative pl-16 md:pl-24">
              <div className="absolute left-4 md:left-6 top-1 w-5 h-5 bg-forest/10 rounded-full animate-pulse" />
              <div className="rounded-2xl p-6 border border-forest/5">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="space-y-2 flex-1">
                    <div className="h-5 w-64 bg-forest/10 rounded animate-pulse" />
                    <div className="h-4 w-32 bg-forest/10 rounded animate-pulse" />
                  </div>
                  <div className="h-6 w-28 bg-forest/10 rounded-full animate-pulse" />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-3 w-full bg-forest/10 rounded animate-pulse" />
                  <div className="h-3 w-3/4 bg-forest/10 rounded animate-pulse" />
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map(j => <div key={j} className="h-6 w-16 bg-forest/10 rounded-full animate-pulse" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SkillsSkeleton() {
  return (
    <section className="py-24 px-8 md:px-16 bg-forest">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="h-3 w-16 bg-cream/20 rounded-full mb-3 animate-pulse" />
          <div className="h-10 w-80 bg-cream/20 rounded-lg animate-pulse" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="border border-cream/10 p-6 rounded-xl">
              <div className="w-12 h-12 bg-cream/20 rounded-lg mb-4 animate-pulse" />
              <div className="h-4 w-20 bg-cream/20 rounded animate-pulse mb-2" />
              <div className="h-3 w-full bg-cream/10 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProjectsSkeleton() {
  return (
    <section className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="h-3 w-20 bg-forest/10 rounded-full mb-3 animate-pulse" />
            <div className="h-10 w-64 bg-forest/10 rounded-lg animate-pulse" />
          </div>
          <div className="h-9 w-36 bg-forest/10 rounded-full animate-pulse hidden md:block" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-2xl overflow-hidden">
              <div className="w-full h-72 bg-forest/10 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSkeleton() {
  return (
    <section className="py-24 px-8 md:px-16 bg-canopy">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="h-3 w-16 bg-cream/20 rounded-full mx-auto mb-3 animate-pulse" />
          <div className="h-10 w-96 bg-cream/20 rounded-lg mx-auto mb-3 animate-pulse" />
          <div className="h-4 w-64 bg-cream/10 rounded mx-auto animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[1, 2].map(i => (
            <div key={i} className="flex items-center gap-4 bg-white/50 border border-cream/15 rounded-2xl px-5 py-4">
              <div className="w-11 h-11 bg-cream/20 rounded-full animate-pulse" />
              <div className="space-y-2 flex-1">
                <div className="h-3 w-16 bg-cream/20 rounded animate-pulse" />
                <div className="h-4 w-40 bg-cream/20 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white/50 rounded-3xl p-8 border border-cream/15 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <div className="h-3 w-12 bg-cream/20 rounded animate-pulse" />
              <div className="h-11 w-full bg-cream/20 rounded-xl animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-3 w-12 bg-cream/20 rounded animate-pulse" />
              <div className="h-11 w-full bg-cream/20 rounded-xl animate-pulse" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-3 w-16 bg-cream/20 rounded animate-pulse" />
            <div className="h-11 w-full bg-cream/20 rounded-xl animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-20 bg-cream/20 rounded animate-pulse" />
            <div className="h-32 w-full bg-cream/20 rounded-xl animate-pulse" />
          </div>
          <div className="h-12 w-full bg-cream/20 rounded-xl animate-pulse" />
        </div>
      </div>
    </section>
  )
}
