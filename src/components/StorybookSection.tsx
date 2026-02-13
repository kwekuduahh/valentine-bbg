import { useState } from "react"
import FadeContent from "@/components/FadeContent"
import { FlipBook } from "@/components/FlipBook"
import { storyPages } from "@/lib/data"

export function StorybookSection() {
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <section className="px-4 py-18 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-center text-3xl text-[#fdf9f7] sm:text-5xl">How We Met</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-2xl text-[#fdf9f7] sm:text-3xl">
          A tiny storybook of the moments that changed everything.
        </p>

        <div className="mt-10 rounded-3xl border border-[#fdf9f764] bg-[#062d2a]/85 p-4 shadow-[0_18px_60px_rgba(6,45,42,0.08)] sm:p-8 relative">
          <img src="/star.svg" alt="glasses-bg" className="absolute -top-5 -left-6 w-12 h-12 object-contain" />
          <img src="/gun-go.svg" alt="gun-bg" className="absolute -bottom-24 right-0 w-48 h-48 object-contain z-40 -rotate-12" />

          <FlipBook pages={storyPages} currentPage={currentPage} onPageChange={setCurrentPage} />

          <FadeContent
            key={storyPages[currentPage].title}
            blur
            duration={900}
            initialOpacity={0}
            className="mt-8 rounded-2xl bg-[#062d2a] p-5"
          >
            <h3 className="font-heading text-2xl text-[#fdf9f7] sm:text-3xl">{storyPages[currentPage].title}</h3>
            <p className="mt-2 text-2xl leading-normal text-[#fdf9f7] sm:text-3xl">{storyPages[currentPage].description}</p>
          </FadeContent>
        </div>
      </div>
    </section>
  )
}
