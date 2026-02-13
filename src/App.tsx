import { useCallback, useState } from "react"
import { HeroSection } from "@/components/HeroSection"
import Noise from "@/components/Noise"
import { Preloader } from "@/components/Preloader"
import { StorybookSection } from "@/components/StorybookSection"
import { HerSection } from "@/components/HerSection"
import { HisSection } from "@/components/HisSection"
import { RoadmapSection } from "@/components/RoadmapSection"
import { SpotifySection } from "@/components/SpotifySection"
import { ValentineQuestion } from "@/components/ValentineQuestion"
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger"
import "./App.css"

function App() {
  const [loadingDone, setLoadingDone] = useState(false)
  useGsapScrollTrigger()

  const handlePreloaderFinish = useCallback(() => setLoadingDone(true), [])

  return (
    <main className="relative min-h-screen bg-[#062d2a]">
      {/* Preloader — highest z-index, covers everything */}
      {!loadingDone && <Preloader onFinished={handlePreloaderFinish} />}

      {/* Noise grain overlay — on top of content but non-interactive */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <Noise patternAlpha={12} patternRefreshInterval={3} />
      </div>

      {/* Content sections */}
      <div className="relative z-0">
        <div data-story-section>
          <HeroSection />
          {/* Hero includes HeroGridBackground (8×8 / 4×4 grid, ~2/3 cells with image from /hero-grid-title.jpg) */}
        </div>

        <div data-story-section>
          <StorybookSection />
        </div>

        <div data-story-section>
          <HerSection />
        </div>

        <div data-story-section>
          <HisSection />
        </div>

        <div data-story-section>
          <RoadmapSection />
        </div>

        <div data-story-section>
          <SpotifySection />
        </div>

        <div data-story-section>
          <ValentineQuestion />
        </div>

        {/* Footer */}
        <footer className="bg-[#062d2a] px-4 py-8 text-center sm:py-12">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-[#fdf9f7]">
            Made with love, for us
          </p>
          <p className="mt-2 text-lg text-[#fdf9f7] sm:text-xl">
            Every pixel here is a tiny piece of my heart.
          </p>
        </footer>
      </div>
    </main>
  )
}

export default App
