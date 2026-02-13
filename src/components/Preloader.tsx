import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import CountUp from "@/components/CountUp"

type PreloaderProps = {
  onFinished: () => void
}

export function Preloader({ onFinished }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      if (!containerRef.current) {
        setIsVisible(false)
        onFinished()
        return
      }

      gsap.to(containerRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power3.inOut",
        onComplete: () => {
          setIsVisible(false)
          onFinished()
        },
      })
    }, 10000)

    return () => window.clearTimeout(exitTimer)
  }, [onFinished])

  if (!isVisible) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-end justify-end bg-[#fff8f0] p-6 sm:p-8"
    >
      <div className="text-right">
        <p className="font-heading text-xs uppercase tracking-[0.3em] text-[#9b1b30]">Loading story</p>
        <p className="font-heading mt-2 text-4xl font-bold leading-none text-[#dc143c] sm:text-6xl">
          <CountUp to={100} from={0} duration={10} className="tabular-nums" />%
        </p>
      </div>
    </div>
  )
}
