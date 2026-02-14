import GradientText from "@/components/GradientText"
import MusicIcon from "@/components/music-icon"
import SpotlightCard from "@/components/SpotlightCard"
import { appleMusicPlaylistEmbed } from "@/lib/data"

export function SpotifySection() {
  return (
    <section className="px-4 py-18 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-5 flex items-center justify-center gap-3 text-[#fdf9f7]">
          <MusicIcon size={34} />
          <p className="font-heading text-2xl font-semibold text-[#fdf9f7]">Our soundtrack</p>
        </div>

        <SpotlightCard className="border-[#fdf9f764] bg-[#021211] p-4 sm:p-8" spotlightColor="rgba(6, 45, 42, 0.33)">
          <div className="flex justify-center">
            <GradientText
              className="font-heading text-3xl sm:text-4xl text-[#fdf9f7]"
              colors={["#fdf9f7", "#fdf9f764", "#fdf9f7"]}
              animationSpeed={8}
            >
              Our Playlist
            </GradientText>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-[#04201e]">
            <iframe
              title="Project Us Apple Music playlist"
              src={appleMusicPlaylistEmbed}
              width="100%"
              height="352"
              allow="autoplay:true ; encrypted-media *; fullscreen *; clipboard-write"
              loading="lazy"
            />
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}
