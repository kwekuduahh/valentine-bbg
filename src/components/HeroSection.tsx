// import BlurText from "@/components/BlurText"
import { FloatingHearts } from "@/components/FloatingHearts"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/hero-grid-title.jpeg)",
          maskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
        }}
      />
      <FloatingHearts />
      <div className="mt-auto mx-auto w-full max-w-3xl text-center">
        <p className="font-heading text-xs uppercase tracking-[0.35em] text-[#ffc041]">Project : Us</p>
        <h1 className="font-heading mt-4 max-sm:text-xl text-3xl font-extrabold text-[#ffc041] sm:text-6xl">Happy Valentine's Day <span className="text-[#ffc041]">💖</span></h1>
        {/* <BlurText
          text="I love you more than words can say"
          className="mx-auto mt-8 max-w-2xl text-xl text-[#fdf9f7] sm:text-xl"
          animateBy="words"
          direction="top"
        /> */}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#fdf9f7]">
        <div className="animate-bounce text-xs tracking-[0.3em] uppercase">Scroll</div>
      </div>
    </section>
  )
}
