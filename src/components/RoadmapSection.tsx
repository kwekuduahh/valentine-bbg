import BounceCards from "@/components/BounceCards"
import { MoodBoard } from "@/components/MoodBoard"
import { Timeline } from "@/components/Timeline"
import { destinationCards, moodboardItems, roadmapMilestones } from "@/lib/data"

export function RoadmapSection() {
  return (
    <section className="bg-[#fff3e6] px-4 py-18 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-center text-3xl text-[#dc143c] sm:text-5xl">Our Roadmap Ahead</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-2xl text-[#5a4030] sm:text-3xl">
          Dreams, destinations, and the life we are building together.
        </p>

        <div className="mt-10">
          <Timeline milestones={roadmapMilestones} />
        </div>

        <h3 className="font-heading mt-16 text-2xl text-[#9b1b30] sm:text-4xl">Future Moodboard</h3>
        <div className="mt-5">
          <MoodBoard items={moodboardItems} />
        </div>

        <h3 className="font-heading mt-16 text-2xl text-[#9b1b30] sm:text-4xl">Places We Will Visit</h3>
        <div className="mt-8 flex justify-center overflow-hidden">
          <BounceCards
            images={destinationCards}
            containerWidth={360}
            containerHeight={340}
            animationDelay={0.1}
            animationStagger={0.12}
            enableHover
            transformStyles={[
              "rotate(9deg) translate(-140px)",
              "rotate(4deg) translate(-70px)",
              "rotate(-2deg)",
              "rotate(-8deg) translate(70px)",
              "rotate(3deg) translate(140px)",
            ]}
          />
        </div>
      </div>
    </section>
  )
}
