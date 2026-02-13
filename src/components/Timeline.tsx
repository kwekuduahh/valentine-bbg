import {
  Timeline as DiceTimeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineHeader,
  TimelineItem,
  TimelineTitle,
} from "@/components/ui/timeline"

type Milestone = {
  year: string
  title: string
  description: string
}

type TimelineProps = {
  milestones: Milestone[]
}

const milestoneIcons = ["\u2665", "\u2708", "\u2726", "\u221e"] as const

export function Timeline({ milestones }: TimelineProps) {
  return (
    <DiceTimeline
      variant="alternate"
      className="[--timeline-connector-thickness:0.14rem] [--timeline-dot-size:2.1rem]"
    >
      {milestones.map((item, index) => (
        <TimelineItem
          key={`${item.year}-${item.title}`}
          className="max-sm:w-full max-sm:pb-8 max-sm:pl-0 max-sm:pr-0"
        >
          <TimelineDot className="border-[#fdf9f764] bg-[#021211] text-[#fdf9f7] max-sm:hidden">
            <span className="font-heading text-base leading-none">{milestoneIcons[index % milestoneIcons.length]}</span>
          </TimelineDot>
          <TimelineConnector className="bg-[#fdf9f764] data-completed:bg-[#04201e] max-sm:hidden" />

          <TimelineContent className="rounded-2xl border border-[#fdf9f764] bg-[#062d2a] p-4 sm:p-6 relative">
            {index === 0 && <img src="/star.svg" alt="glasses-bg" className="absolute -bottom-8 left-0 w-16 h-16 object-contain" />}
            {index === 0 && <img src="/assets/love-words.svg" alt="glasses-bg" className="absolute -top-5 right-0 w-30 h-30 object-contain -rotate-12" />}
            {index === 1 && <img src="/spec.svg" alt="glasses-bg" className="absolute top-0 -left-5 w-24 h-24 object-contain -rotate-12" />}
            {index === 2 && <img src="/gun-go-green.svg" alt="gun-bg" className="absolute -bottom-16 right-0 w-24 h-24 object-contain z-40 rotate-12" />}
            {index === 3 && <img src="/assets/love-heart.svg" alt="rose-flower-bg" className="absolute -bottom-7 right-0 w-30 h-30 object-contain -rotate-12" />}
            <TimelineHeader>
              <img src={`/timeline-${index + 1}.jpeg`} alt={item.title} className="w-full h-100 object-cover rounded-2xl" />
              {/* <TimelineTime className="font-heading text-sm uppercase tracking-[0.2em] text-[#fdf9f7]">
                {item.year}
              </TimelineTime> */}
              <TimelineTitle className="font-heading text-2xl text-[#fdf9f7] sm:text-3xl">{item.title}</TimelineTitle>
            </TimelineHeader>
            <TimelineDescription className="mt-2 text-2xl text-[#fdf9f7] sm:text-3xl">{item.description}</TimelineDescription>
          </TimelineContent>
        </TimelineItem>
      ))}
    </DiceTimeline>
  )
}
