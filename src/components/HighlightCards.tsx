import GlareHover from "@/components/GlareHover"

type HighlightCardsProps = {
  items: string[]
  accentColorClass: string
  cardClassName: string
}

export function HighlightCards({ items, cardClassName }: HighlightCardsProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <GlareHover
          key={item}
          width="100%"
          height="auto"
          background="transparent"
          borderRadius="1rem"
          borderColor="transparent"
          glareOpacity={0.32}
          glareSize={190}
          className={`flex! w-full! cursor-default! items-start! justify-start! border! ${cardClassName}`}
          style={{ minHeight: "unset" }}
        >
          <article className="w-full px-4 py-5 sm:px-5">
            {/* <p className={`font-heading text-xs uppercase tracking-[0.28em] ${accentColorClass}`}>Highlight {index + 1}</p> */}
            <p className="mt-2 text-3xl leading-relaxed text-[#fdf9f7] sm:text-4xl">{item}</p>
          </article>
        </GlareHover>
      ))}
    </div>
  )
}

