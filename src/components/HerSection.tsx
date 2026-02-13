import HeartIcon from "@/components/heart-icon"
import { HighlightCards } from "@/components/HighlightCards"
// import Lanyard from "@/components/Lanyard"
import { herHighlights } from "@/lib/data"
import { DrawLineText } from "../../components/gsap/draw-line-text"
import { StaggerOnScroll } from "../../components/gsap/stagger-on-scroll"

export function HerSection() {
  return (
    <section className="bg-[#062d2a]/35 px-4 py-18 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex justify-center">
          <DrawLineText text="The Woman" color="#062d2a" fontSize={54} strokeWidth={1.2} />
        </div>

        <div className="grid items-center gap-8 grid-cols-1 md:grid-cols-2">
          <div className="h-[500px] w-full">
            {/* <Lanyard className="h-[1020px] w-full" cardImageSrc={profileImages.her} /> */}
            <img src="/her-profile.jpeg" alt="her-profile" className="w-full h-full object-cover rounded-3xl" />
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3 text-[#fdf9f7]">
              <HeartIcon size={30} />
              <p className="font-heading text-2xl uppercase tracking-[0.3em]">Why She is special</p>
            </div>

            <StaggerOnScroll effect="slideInRight">
              <HighlightCards
                items={herHighlights}
                accentColorClass="text-[#fdf9f7]"
                cardClassName="bg-gradient-to-r from-[#04201e] via-[#062d2a] to-[#021211] border-[#fdf9f764] py-1"
              />
            </StaggerOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
