import { useMemo, useState } from "react"
import type { StoryPage } from "@/lib/data"

type FlipBookProps = {
  pages: StoryPage[]
  currentPage: number
  onPageChange: (index: number) => void
}

export function FlipBook({ pages, currentPage, onPageChange }: FlipBookProps) {
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const canGoPrev = currentPage > 0
  const canGoNext = currentPage < pages.length - 1

  const visiblePages = useMemo(() => pages.slice(0, currentPage + 1), [pages, currentPage])

  const goPrev = () => canGoPrev && onPageChange(currentPage - 1)
  const goNext = () => canGoNext && onPageChange(currentPage + 1)

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX)
  }

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return
    const delta = event.changedTouches[0].clientX - touchStartX

    if (delta > 48) goPrev()
    if (delta < -48) goNext()

    setTouchStartX(null)
  }

  return (
    <div className="w-full">
      <div className="mb-5 flex items-center justify-between">
        <button
          className="rounded-full border border-[#eab8b2] px-4 py-2 text-sm text-[#9b1b30] disabled:opacity-40"
          onClick={goPrev}
          disabled={!canGoPrev}
        >
          Previous
        </button>
        <p className="font-heading text-sm tracking-[0.2em] text-[#9b1b30]">
          Page {currentPage + 1} / {pages.length}
        </p>
        <button
          className="rounded-full border border-[#eab8b2] px-4 py-2 text-sm text-[#9b1b30] disabled:opacity-40"
          onClick={goNext}
          disabled={!canGoNext}
        >
          Next
        </button>
      </div>

      <div
        className="flipbook-wrap mx-auto h-[440px] w-full max-w-3xl select-none sm:h-[420px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flipbook">
          {visiblePages.map((page, index) => {
            const isCurrent = index === currentPage

            return (
              <article
                key={page.title}
                className="flipbook-page"
                style={{
                  zIndex: index + 1,
                  transform: isCurrent ? "rotateY(0deg)" : "rotateY(-172deg)",
                }}
              >
                <div className="flipbook-front">
                  <img src={page.image} alt={page.title} className="h-full w-full object-cover" />
                </div>
                <div className="flipbook-back">
                  <img src={page.image} alt={page.title} className="h-full w-full object-cover" />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
