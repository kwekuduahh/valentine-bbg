import { useState } from "react"
import FadeContent from "@/components/FadeContent"
import { FlipBook } from "@/components/FlipBook"
import { storyPages } from "@/lib/data"

export function StorybookSection() {
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <section className="px-4 py-18 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-center text-3xl text-[#dc143c] sm:text-5xl">How We Met</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-2xl text-[#5a4030] sm:text-3xl">
          A tiny storybook of the moments that changed everything.
        </p>

        <div className="mt-10 rounded-3xl border border-[#eab8b2] bg-[#fff3e6]/85 p-4 shadow-[0_18px_60px_rgba(220,20,60,0.08)] sm:p-8">
          <FlipBook pages={storyPages} currentPage={currentPage} onPageChange={setCurrentPage} />

          <FadeContent
            key={storyPages[currentPage].title}
            blur
            duration={900}
            initialOpacity={0}
            className="mt-8 rounded-2xl border border-[#eab8b2] bg-[#fff8f0] p-5"
          >
            <h3 className="font-heading text-2xl text-[#9b1b30] sm:text-3xl">{storyPages[currentPage].title}</h3>
            <p className="mt-2 text-2xl leading-normal text-[#5a4030] sm:text-3xl">{storyPages[currentPage].description}</p>
          </FadeContent>
        </div>
      </div>
    </section>
  )
}
