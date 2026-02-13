import { HighlightCards } from "@/components/HighlightCards"
import Lanyard from "@/components/Lanyard"
import { hisHighlights, profileImages } from "@/lib/data"
import { BouncingText } from "../../components/gsap/bouncing-text"
import { StaggerOnScroll } from "../../components/gsap/stagger-on-scroll"

export function HisSection() {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex justify-center">
          <BouncingText repeat={0} className="font-heading text-5xl text-[#dc143c] sm:text-6xl">
            The Man
          </BouncingText>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <StaggerOnScroll effect="scale">
              <HighlightCards
                items={hisHighlights}
                accentColorClass="text-[#dc143c]"
                cardClassName="bg-gradient-to-r from-[#fff3e6] via-[#ffe9df] to-[#ffe0d8] border-[#edc2bc]"
              />
            </StaggerOnScroll>
          </div>

          <div className="order-1 md:order-2">
            <div>
              <Lanyard className="h-[1020px] w-full" cardImageSrc={profileImages.him} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
