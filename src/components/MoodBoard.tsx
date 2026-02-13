import HowItWorks from "@/components/how-it-works"

type MoodBoardItem = {
  id: string
  img: string
  url: string
  height: number
}

type MoodBoardProps = {
  items: MoodBoardItem[]
}

export function MoodBoard({ items }: MoodBoardProps) {
  const features = items.slice(0, 5).map((item, index) => ({
    title: `Dream ${index + 1}`,
    description: `A little glimpse of the life we are planning together (${item.img.replace("/", "")}).`,
    colors: {
      bg: "bg-[#fff8f0]",
      text: "text-[#dc143c]",
      border: "border-[#f3c9bf]",
    },
  }))

  return (
    <HowItWorks
      features={features}
      className="min-h-0 rounded-3xl border border-[#eab8b2] bg-[#fff3e6] px-4 py-8 sm:px-6"
    />
  )
}
