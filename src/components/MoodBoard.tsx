type MoodBoardItem = {
  id: string
  img: string
  url: string
  height: number
}

type MoodBoardProps = {
  items: MoodBoardItem[]
}

const MOOD_CARDS = [
  {
    title: "Excited by challenge",
    description: "Eager to break new ground",
    icon: "⚡",
    position: "md:top-6 md:left-6 md:-rotate-[10deg]",
  },
  {
    title: "Self-aware",
    description: "Know what they want and why",
    icon: "❤️",
    position: "md:top-0 md:left-1/2 md:-translate-x-1/2 md:-rotate-[1deg]",
  },
  {
    title: "Setting high standards",
    description: "They take ownership of their work",
    icon: "🏁",
    position: "md:top-8 md:right-6 md:rotate-[8deg]",
  },
  {
    title: "Driven by impact",
    description: "Focused on making a meaningful difference",
    icon: "💡",
    position: "md:bottom-6 md:left-8 md:-rotate-[6deg]",
  },
  {
    title: "Proven leaders",
    description: "Next-gen builders and experienced operators",
    icon: "🛰️",
    position: "md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:-rotate-[1deg]",
  },
  {
    title: "Good people",
    description: "High-integrity, high-quality humans",
    icon: "🐝",
    position: "md:bottom-8 md:right-6 md:rotate-[7deg]",
  },
] as const

function MoodCard({
  title,
  description,
  icon,
  className,
}: {
  title: string
  description: string
  icon: string
  className?: string
}) {
  return (
    <article
      className={`rounded-[1.5rem] border border-[#ffffffad] bg-[#fbf7f2] p-4 text-center shadow-[0_14px_40px_rgba(24,17,11,0.08)] backdrop-blur-[1px] sm:p-5 md:w-[188px] ${className ?? ""}`}
    >
      <div className="text-5xl lg:text-4xl">{icon}</div>
      <h4 className="mt-2 text-md font-semibold text-[#141414]">{title}</h4>
      <p className="mt-1 text-sm leading-4 text-[#4f4a43]">{description}</p>
    </article>
  )
}

export function MoodBoard({ items }: MoodBoardProps) {
  const cards = MOOD_CARDS.slice(0, Math.max(1, Math.min(MOOD_CARDS.length, items.length || MOOD_CARDS.length)))

  return (
    <div className="rounded-[2rem] border border-none bg-none px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="relative md:min-h-[560px]">
          <div className="relative z-10 mx-auto max-w-3xl px-2 py-10 text-center md:absolute md:inset-0 md:flex md:items-center md:justify-center md:py-0">
            <p className="font-heading text-4xl leading-[0.95] tracking-tight text-[#fdf9f7] sm:text-5xl md:text-6xl">
              Every day with you feels like the beginning of something beautiful
            </p>
          </div>

          <div className="relative z-20 mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-0 md:block md:h-[560px]">
            {cards.map((card) => (
              <MoodCard
                key={card.title}
                title={card.title}
                description={card.description}
                icon={card.icon}
                className={`md:absolute ${card.position}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
