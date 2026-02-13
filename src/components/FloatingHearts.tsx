import { useMemo } from "react"
import { motion } from "framer-motion"

type FloatingHeartsProps = {
  count?: number
}

/** Deterministic 0–1 from seed; pure so safe during render */
function seeded(seed: number): number {
  const x = Math.sin(seed * 9999) * 10000
  return x - Math.floor(x)
}

export function FloatingHearts({ count = 14 }: FloatingHeartsProps) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        id: index,
        left: seeded(index) * 100,
        delay: seeded(index + 100) * 3,
        duration: 4 + seeded(index + 200) * 4,
        size: 10 + seeded(index + 300) * 18,
        opacity: 0.15 + seeded(index + 400) * 0.3,
      })),
    [count]
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.span
          key={heart.id}
          className="absolute text-[#fdf9f7]"
          style={{
            left: `${heart.left}%`,
            bottom: "-8%",
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
          }}
          animate={{ y: ["0%", "-120%"], x: [0, heart.id % 2 === 0 ? 18 : -18] }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          ❤
        </motion.span>
      ))}
    </div>
  )
}
