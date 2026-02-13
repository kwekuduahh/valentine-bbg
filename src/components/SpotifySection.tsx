import GradientText from "@/components/GradientText"
import MusicIcon from "@/components/music-icon"
import SpotlightCard from "@/components/SpotlightCard"
import { spotifyPlaceholder } from "@/lib/data"

export function SpotifySection() {
  return (
    <section className="px-4 py-18 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-5 flex items-center justify-center gap-3 text-[#9b1b30]">
          <MusicIcon size={34} />
          <p className="font-heading text-xs uppercase tracking-[0.3em]">Our soundtrack</p>
        </div>

        <SpotlightCard className="border-[#eab8b2] bg-[#1f1111] p-4 sm:p-8" spotlightColor="rgba(220, 20, 60, 0.33)">
          <div className="flex justify-center">
            <GradientText
              className="font-heading text-3xl sm:text-4xl"
              colors={["#dc143c", "#f7c5cc", "#ff9ab0"]}
              animationSpeed={8}
            >
              Our Playlist
            </GradientText>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-[#5f3340]">
            <iframe
              title="Valentine placeholder playlist"
              src={spotifyPlaceholder}
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}
