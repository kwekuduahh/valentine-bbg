import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useGsapScrollTrigger(selector = "[data-story-section]") {
  useEffect(() => {
    // Small delay to allow preloader and DOM to settle
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    const context = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(selector)

      sections.forEach((section, index) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              once: true,
              fastScrollEnd: true,
            },
            delay: index === 0 ? 0.15 : 0,
          },
        )
      })
    })

    return () => {
      cancelAnimationFrame(raf)
      context.revert()
    }
  }, [selector])
}
