import {
  Timeline as DiceTimeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineHeader,
  TimelineItem,
  TimelineTime,
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

export function Timeline({ milestones }: TimelineProps) {
  return (
    <DiceTimeline className="[--timeline-connector-thickness:0.14rem] [--timeline-dot-size:0.95rem]">
      {milestones.map((item) => (
        <TimelineItem key={`${item.year}-${item.title}`}>
          <TimelineDot className="border-[#dc143c] bg-[#fff8f0]" />
          <TimelineConnector className="bg-[#eab8b2] data-completed:bg-[#dc143c]" />

          <TimelineContent className="rounded-2xl border border-[#eab8b2] bg-[#fff8f0] p-4 sm:p-6">
            <TimelineHeader>
              <TimelineTime className="font-heading text-sm uppercase tracking-[0.2em] text-[#9b1b30]">
                {item.year}
              </TimelineTime>
              <TimelineTitle className="font-heading text-2xl text-[#dc143c] sm:text-3xl">{item.title}</TimelineTitle>
            </TimelineHeader>
            <TimelineDescription className="mt-2 text-2xl text-[#5a4030] sm:text-3xl">{item.description}</TimelineDescription>
          </TimelineContent>
        </TimelineItem>
      ))}
    </DiceTimeline>
  )
}
