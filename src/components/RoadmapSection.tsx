// import { MoodBoard } from "@/components/MoodBoard"
import { Timeline } from "@/components/Timeline"
import { destinationCards, roadmapMilestones } from "@/lib/data"

const placesToVisit = [
  {
    number: "01",
    title: "World Explorers",
    description: "From the dramatic natural landscape of Norway to the clean streets of Japan, we’ll travel the world together, collecting memories and experiences in our hearts",
  },
  {
    number: "02",
    title: "Our Cabin",
    description: "A little cabin near the stream, where we can grow old together. Because I want to grow old with you, reading books by the fire and reminiscing of a great life together",
  },
  {
    number: "03",
    title: "Together Forever",
    description: "No matter what obstacles come our way, we'll scale them all together. Because we're stuck with each other forever, and that's exactly how we want it.",
  }
] as const

function PlaceCard({
  number,
  title,
  description,
  image,
  tilt,
}: {
  number: string
  title: string
  description: string
  image: string
  tilt?: string
}) {
  return (
    <article
      className={`min-h-[270px] rounded-[2rem] border border-[#11111118] bg-[#f7f2ea] px-5 pt-5 pb-6 text-center text-[#0f0f0f] shadow-[0_16px_40px_rgba(0,0,0,0.15)] ${tilt ?? ""}`}
    >
      <p className="text-xs font-semibold tracking-[0.2em] text-[#3d372f]">{number}</p>
      <h4 className="font-heading mt-3 text-3xl leading-[0.9] sm:text-[2.1rem]">{title}</h4>
      <p className="mt-3 text-sm leading-5 text-[#47413a]">{description}</p>
      <img src={image} alt="" className="mt-2 h-32 w-full object-cover rounded-2xl" loading="lazy" />
    </article>
  )
}

export function RoadmapSection() {
  return (
    <section className="bg-[#062d2a] px-4 py-18 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-16">
        <h2 className="font-heading text-center text-3xl text-[#062d2a] sm:text-5xl">Our Roadmap Ahead</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-2xl text-[#062d2a] sm:text-3xl">
          Dreams, destinations, and the life we are building together.
        </p>

        <div className="mt-10">
          <Timeline milestones={roadmapMilestones} />
        </div>

        {/* <h3 className="font-heading mt-16 text-2xl text-[#fdf9f7] sm:text-4xl mx-auto text-center">Future Moodboard</h3> */}
        {/* <div className="mt-5">
          <MoodBoard items={moodboardItems} />
        </div> */}

        {/* <h3 className="font-heading mt-16 text-2xl text-[#fdf9f7] sm:text-4xl">Places We Will Visit</h3> */}
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-none bg-none px-4 pt-10 pb-5 sm:px-7 sm:pt-12 ">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs tracking-[0.25em] text-[#ece7dfb3]">Destinations</p>
            <p className="font-heading mt-2 text-4xl leading-[0.92] text-[#f4efe6] sm:text-6xl">
              OUR NEXT
              <br />
              LOVE ADVENTURES
            </p>
          </div>

          <div className="lg:mt-16 mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {placesToVisit.map((place, index) => (
              <PlaceCard
                key={place.number}
                number={place.number}
                title={place.title}
                description={place.description}
                image={destinationCards[index % destinationCards.length]}
                tilt={index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
