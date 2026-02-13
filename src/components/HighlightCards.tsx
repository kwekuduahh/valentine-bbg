import GlareHover from "@/components/GlareHover"

type HighlightCardsProps = {
  items: string[]
  accentColorClass: string
  cardClassName: string
}

export function HighlightCards({ items, cardClassName }: HighlightCardsProps) {
  return (
    <div>
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
          <article className="w-full px-4 py-1 sm:px-5">
            {/* <p className={`font-heading text-xs uppercase tracking-[0.28em] ${accentColorClass}`}>Highlight {index + 1}</p> */}
            <p className="mt-0 text-xl leading-relaxed text-[#fdf9f7] ">{item}</p>
          </article>
        </GlareHover>
      ))}
    </div>
  )
}

