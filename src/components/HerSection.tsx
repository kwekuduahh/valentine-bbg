import HeartIcon from "@/components/heart-icon"
import { HighlightCards } from "@/components/HighlightCards"
import Lanyard from "@/components/Lanyard"
import { herHighlights, profileImages } from "@/lib/data"
import { DrawLineText } from "../../components/gsap/draw-line-text"
import { StaggerOnScroll } from "../../components/gsap/stagger-on-scroll"

export function HerSection() {
  return (
    <section className="bg-[#f7c5cc]/35 px-4 py-18 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex justify-center">
          <DrawLineText text="The Woman" color="#9b1b30" fontSize={54} strokeWidth={1.2} />
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <Lanyard className="h-[1020px] w-full" cardImageSrc={profileImages.her} />
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3 text-[#9b1b30]">
              <HeartIcon size={30} />
              <p className="font-heading text-sm uppercase tracking-[0.3em]">Why she is special</p>
            </div>

            <StaggerOnScroll effect="slideInRight">
              <HighlightCards
                items={herHighlights}
                accentColorClass="text-[#9b1b30]"
                cardClassName="bg-gradient-to-r from-[#fff8f0] via-[#fff4ec] to-[#ffe9e4] border-[#edc2bc]"
              />
            </StaggerOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
