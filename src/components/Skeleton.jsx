export function ExperienceSkeleton() {
  return (
    <section className="py-24 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="h-3 w-20 bg-dark-box rounded-full mb-3 animate-pulse" />
          <div className="h-10 w-72 bg-dark-box rounded-lg animate-pulse" />
        </div>
        <div className="flex flex-col gap-12">
          {[1, 2].map(i => (
            <div key={i} className="relative pl-16 md:pl-24">
              <div className="absolute left-4 md:left-6 top-1 w-5 h-5 bg-dark-box rounded-full animate-pulse" />
              <div className="rounded-2xl p-6 border border-dark-box">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="space-y-2 flex-1">
                    <div className="h-5 w-64 bg-dark-box rounded animate-pulse" />
                    <div className="h-4 w-32 bg-dark-box rounded animate-pulse" />
                  </div>
                  <div className="h-6 w-28 bg-dark-box rounded-full animate-pulse" />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-3 w-full bg-dark-box rounded animate-pulse" />
                  <div className="h-3 w-3/4 bg-dark-box rounded animate-pulse" />
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map(j => <div key={j} className="h-6 w-16 bg-dark-box rounded-full animate-pulse" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProjectsSkeleton() {
  return (
    <section className="py-24 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="h-3 w-20 bg-dark-box rounded-full mb-3 animate-pulse" />
            <div className="h-10 w-64 bg-dark-box rounded-lg animate-pulse" />
          </div>
          <div className="h-9 w-36 bg-dark-box rounded-full animate-pulse hidden md:block" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-2xl overflow-hidden">
              <div className="w-full h-72 bg-dark-box animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSkeleton() {
  return (
    <section className="py-24 px-8 md:px-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="h-3 w-16 bg-dark-box rounded-full mx-auto mb-3 animate-pulse" />
          <div className="h-10 w-96 bg-dark-box rounded-lg mx-auto mb-3 animate-pulse" />
          <div className="h-4 w-64 bg-dark-box rounded mx-auto animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[1, 2].map(i => (
            <div key={i} className="flex items-center gap-4 bg-dark-card border border-dark-box rounded-2xl px-5 py-4">
              <div className="w-11 h-11 bg-dark-box rounded-full animate-pulse" />
              <div className="space-y-2 flex-1">
                <div className="h-3 w-16 bg-dark-box rounded animate-pulse" />
                <div className="h-4 w-40 bg-dark-box rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-dark-card rounded-3xl p-8 border border-dark-box space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <div className="h-3 w-12 bg-dark-box rounded animate-pulse" />
              <div className="h-11 w-full bg-dark-box rounded-xl animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-3 w-12 bg-dark-box rounded animate-pulse" />
              <div className="h-11 w-full bg-dark-box rounded-xl animate-pulse" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-3 w-16 bg-dark-box rounded animate-pulse" />
            <div className="h-11 w-full bg-dark-box rounded-xl animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-20 bg-dark-box rounded animate-pulse" />
            <div className="h-32 w-full bg-dark-box rounded-xl animate-pulse" />
          </div>
          <div className="h-12 w-full bg-dark-box rounded-xl animate-pulse" />
        </div>
      </div>
    </section>
  )
}
