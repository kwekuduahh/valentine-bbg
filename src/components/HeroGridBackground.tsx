import { useMemo } from "react"

const HERO_GRID_IMAGE = "/hero-grid-title.jpg"

/** Fisher–Yates shuffle; mutates and returns the array */
function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

/** Returns a Set of indices that should show the image (~2/3 of total cells) */
function randomFillIndices(total: number, fillRatio: number = 2 / 3): Set<number> {
  const indices = Array.from({ length: total }, (_, i) => i)
  shuffle(indices)
  const count = Math.round(total * fillRatio)
  return new Set(indices.slice(0, count))
}

export function HeroGridBackground() {
  const mobileFill = useMemo(() => randomFillIndices(4 * 4), [])
  const desktopFill = useMemo(() => randomFillIndices(8 * 8), [])

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* Full-section background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_GRID_IMAGE})` }}
      />
      {/* Mobile: 4×4 grid — subtle border so grid is visible even without image */}
      <div className="relative grid h-full w-full grid-cols-4 grid-rows-4 gap-px sm:hidden">
        {Array.from({ length: 16 }, (_, i) => (
          <div
            key={`m-${i}`}
            className="border border-[#e8ddd4] bg-[#fff8f0]"
          >
            {mobileFill.has(i) && (
              <div
                className="h-full w-full bg-cover bg-center bg-no-repeat opacity-90"
                style={{ backgroundImage: `url(${HERO_GRID_IMAGE})` }}
              />
            )}
          </div>
        ))}
      </div>
      {/* Desktop: 8×8 grid */}
      <div className="relative hidden h-full w-full grid-cols-8 grid-rows-8 gap-px sm:grid">
        {Array.from({ length: 64 }, (_, i) => (
          <div
            key={`d-${i}`}
            className="border border-[#e8ddd4] bg-[#fff8f0]"
          >
            {desktopFill.has(i) && (
              <div
                className="h-full w-full bg-cover bg-center bg-no-repeat opacity-90"
                style={{ backgroundImage: `url(${HERO_GRID_IMAGE})` }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
