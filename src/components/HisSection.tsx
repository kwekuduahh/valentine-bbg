import { HighlightCards } from "@/components/HighlightCards"
// import Lanyard from "@/components/Lanyard"
import { hisHighlights } from "@/lib/data"
// import { BouncingText } from "../../components/gsap/bouncing-text" 
import { StaggerOnScroll } from "../../components/gsap/stagger-on-scroll"
import HeartIcon from "@/components/heart-icon"

export function HisSection() {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* <div className="mb-6 flex justify-center">
          <BouncingText repeat={0} className="font-heading text-5xl text-[#fdf9f7] sm:text-6xl">
            The Man
          </BouncingText>
        </div> */}

        <div className="mb-4 flex items-center gap-3 text-[#fdf9f7]">
          <HeartIcon size={30} />
          <p className="font-heading text-2xl uppercase tracking-[0.3em]">Why He is special</p>
        </div>
        <div className="grid items-center gap-8 grid-cols-1 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <StaggerOnScroll effect="scale">
              <HighlightCards
                items={hisHighlights}
                accentColorClass="text-[#fdf9f7]"
                cardClassName="bg-gradient-to-r from-[#04201e] via-[#062d2a] to-[#021211] border-[#fdf9f764]"
              />
            </StaggerOnScroll>
          </div>

          <div className="order-1 md:order-2">
            <div className="h-[500px] w-full">
              {/* <Lanyard className="h-[1020px] w-full" cardImageSrc={profileImages.him} /> */}
              <img src="/his-profile.jpeg" alt="his-profile" className="w-full h-full object-cover rounded-3xl" />
            </div>
          </div>
        </div>
      </div>

    </section >
  )
}
