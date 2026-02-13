import BlurText from "@/components/BlurText"
import { heroIntro } from "@/lib/data"
import { FloatingHearts } from "@/components/FloatingHearts"
import { RevealOnScroll } from "../../components/gsap/reveal-on-scroll"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/hero-grid-title.avif)",
          maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
        }}
      />
      <FloatingHearts />
      <RevealOnScroll effect="fadeIn" className="mx-auto w-full max-w-3xl text-center">
        <p className="font-heading text-xs uppercase tracking-[0.35em] text-[#9b1b30]">Our beginning</p>
        <h1 className="font-heading mt-4 text-4xl font-bold text-[#dc143c] sm:text-6xl">{heroIntro.heading}</h1>
        <BlurText
          text={heroIntro.subheading}
          className="mx-auto mt-8 max-w-2xl text-3xl text-white sm:text-4xl"
          animateBy="words"
          direction="bottom"
        />
      </RevealOnScroll>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#9b1b30]">
        <div className="animate-bounce text-xs tracking-[0.3em] uppercase">Scroll</div>
      </div>
    </section>
  )
}
