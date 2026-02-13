import { useMemo, useRef } from "react"
import { motion } from "framer-motion"
// import ClickSpark from "@/components/ClickSpark"
import SplitText from "@/components/SplitText"
// import StarBorder from "@/components/StarBorder"

// type ButtonPosition = {
//   x: number
//   y: number
//   scale: number
// }

// const NO_TEXTS = [
//   "No",
//   "Are you sure?",
//   "Really really?",
//   "Think again!",
//   "Pretty please?",
//   "I'll wait...",
//   "Last chance!",
// ]

// const CONFETTI_COLORS = [
//   "#04201e",
//   "#fdf9f764",
//   "#fdf9f9",
//   "#0ab01e99",
//   "#fdf9f7",
//   "#2d2a",
//   "#fdf9f7",
//   "#04201e",
// ]

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 9999.91) * 10000
  return x - Math.floor(x)
}

export function ValentineQuestion() {
  // const [accepted, setAccepted] = useState(false)
  // const [noState, setNoState] = useState<ButtonPosition>({ x: 0, y: 0, scale: 1 })
  // const [noClicks, setNoClicks] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  // const confettiPieces = useMemo(
  //   () =>
  //     Array.from({ length: 60 }, (_, i) => ({
  //       id: i,
  //       left: seededRandom(i + 1) * 100,
  //       delay: seededRandom(i + 101) * 1.6,
  //       duration: 2 + seededRandom(i + 201) * 2.5,
  //       size: 6 + seededRandom(i + 301) * 10,
  //       color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  //       rotation: seededRandom(i + 401) * 360,
  //       drift: (seededRandom(i + 501) - 0.5) * 80,
  //       shape: i % 3, // 0 = heart, 1 = circle, 2 = rectangle
  //     })),
  //   [],
  // )

  const floatingHearts = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: seededRandom(i + 601) * 100,
        delay: seededRandom(i + 701) * 4,
        duration: 5 + seededRandom(i + 801) * 5,
        size: 10 + seededRandom(i + 901) * 16,
        opacity: 0.08 + seededRandom(i + 1001) * 0.15,
      })),
    [],
  )

  // const moveNoButton = useCallback(() => {
  //   const container = sectionRef.current
  //   if (!container) return

  //   const rect = container.getBoundingClientRect()
  //   const maxX = rect.width / 2 - 60
  //   const maxY = rect.height / 2 - 40

  //   const offsetX = (Math.random() - 0.5) * maxX * 1.5
  //   const offsetY = (Math.random() - 0.5) * maxY * 0.8

  //   setNoClicks((current) => current + 1)
  //   setNoState({
  //     x: offsetX,
  //     y: offsetY,
  //     scale: Math.max(0.15, 1 - (noClicks + 1) * 0.12),
  //   })
  // }, [noClicks])

  // const noText = NO_TEXTS[Math.min(noClicks, NO_TEXTS.length - 1)]
  // const noVisible = noClicks < NO_TEXTS.length

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#062d2a] px-4 py-24 text-[#fdf9f7] sm:px-6 sm:py-32"
    >
      {/* Background floating hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingHearts.map((heart) => (
          <motion.span
            key={heart.id}
            className="absolute text-[#fdf9f764]"
            style={{
              left: `${heart.left}%`,
              bottom: "-10%",
              fontSize: `${heart.size}px`,
              opacity: heart.opacity,
            }}
            animate={{ y: ["0%", "-120vh"], x: [0, heart.id % 2 === 0 ? 20 : -20] }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            &#10084;
          </motion.span>
        ))}
      </div>

      <div className="z-10 mx-auto w-full max-w-4xl text-center relative">
        <SplitText
          tag="h2"
          text="Happy Valentine's Day, My Love"
          className="font-heading text-4xl font-bold sm:text-6xl lg:text-7xl text-[#ffc041]"
          splitType="chars"
          delay={28}
          duration={1}
          from={{ opacity: 0, y: 36 }}
          to={{ opacity: 1, y: 0 }}
        />

        <p className="mx-auto mt-6 max-w-2xl text-2xl leading-relaxed sm:text-3xl">
          This is just a small reminder of how much you mean to me.
          Then remove the moment of truth card.</p>

        <img src="/assets/love-heart.svg" alt="moment-of-truth" className="w-24 h-24 object-contain absolute top-4 left-0" />
        <img src="/assets/rose-flower.svg" alt="moment-of-truth" className="w-24 h-24 object-contain absolute -bottom-4 right-0" />

        <div className="flex flex-row gap-1 items-center justify-center">
          <img src="/end-1.jpeg" alt="moment-of-truth" className="w-48 h-48 object-contain border-8 border-white rounded-3xl shadow-xl -rotate-12" />
          <img src="/end-2.jpeg" alt="moment-of-truth" className="w-48 h-48 object-contain border-8 border-white rounded-3xl shadow-xl" />
          <img src="/end-3.jpeg" alt="moment-of-truth" className="w-48 h-48 object-contain border-8 border-white rounded-3xl shadow-xl rotate-12" />
        </div>

        {/* <div className="mt-10 flex justify-center">
          <StarBorder
            as="div"
            color="#fdf9f764"
            speed="4s"
            className="w-full max-w-xl"
            innerClassName="relative z-1 bg-gradient-to-b from-[#021211] to-[#04201e] border border-[#04201e] text-[#fdf9f7] text-center py-[20px] px-[26px] rounded-[20px]"
          >
            <div className="flex min-h-[190px] flex-col items-center justify-center gap-5">
              <p className="font-heading text-sm uppercase tracking-[0.3em] text-[#fdf9f764]/70">
                The moment of truth
              </p>

              <ClickSpark sparkColor="#fdf9f764" sparkRadius={28} sparkCount={12}>
                <button
                  onClick={() => setAccepted(true)}
                  className="font-heading rounded-full bg-[#fdf7f9] px-10 py-4 text-xl font-semibold text-[#062d2a] shadow-[0_8px_32px_rgba(6,45,42,0.5)] transition-all duration-300 hover:scale-110 hover:bg-[#fdf8f9] hover:shadow-[0_12px_44px_rgba(6,45,42,0.65)] active:scale-95 sm:px-12 sm:text-2xl"
                >
                  Yes, absolutely &#10084;
                </button>
              </ClickSpark>

              <AnimatePresence>
                {noVisible && (
                  <motion.button
                    key="no-button"
                    onMouseEnter={moveNoButton}
                    onClick={moveNoButton}
                    animate={{ x: noState.x, y: noState.y, scale: noState.scale }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="rounded-full border border-[#fdf9f764]/50 px-6 py-2 text-lg text-[#fdf9f764] transition-colors hover:border-[#fdf9f764]"
                  >
                    {noText}
                  </motion.button>
                )}
              </AnimatePresence>

              {!noVisible && !accepted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg text-[#fdf9f764]/80"
                >
                  That is what I thought... now press Yes!
                </motion.p>
              )}
            </div>
          </StarBorder>
        </div> */}
      </div>

      {/* Celebration overlay */}
      {/* <AnimatePresence> */}
      {/* {accepted && ( */}
      {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#062d2a]/97 px-4 text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            >
              <h3 className="font-heading text-5xl font-bold sm:text-7xl">He said yes!</h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-6 text-2xl leading-relaxed sm:text-3xl"
              >
                Here is to a forever made of love, laughter, and gentle adventures.
              </motion.p>
            </motion.div>

            {/* Confetti falling */}
      {/* <div className="pointer-events-none absolute inset-0 overflow-hidden"> */}
      {/* {confettiPieces.map((piece) => (
                <motion.span
                  key={`confetti-${piece.id}`}
                  className="absolute"
                  style={{
                    left: `${piece.left}%`,
                    top: "-5%",
                    width: piece.shape === 2 ? `${piece.size}px` : undefined,
                    height: piece.shape === 2 ? `${piece.size * 0.5}px` : undefined,
                    fontSize: piece.shape === 0 ? `${piece.size + 6}px` : `${piece.size}px`,
                    color: piece.color,
                    backgroundColor: piece.shape !== 0 ? piece.color : undefined,
                    borderRadius: piece.shape === 1 ? "50%" : piece.shape === 2 ? "2px" : undefined,
                  }}
                  initial={{ y: 0, rotate: piece.rotation, opacity: 0 }}
                  animate={{
                    y: ["0vh", "110vh"],
                    x: [0, piece.drift],
                    rotate: [piece.rotation, piece.rotation + 360],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: piece.duration,
                    delay: piece.delay,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeIn",
                  }}
                >
                  {piece.shape === 0 && "\u2764"}
                  {piece.shape === 1 && <span className="block h-2 w-2 rounded-full" style={{ backgroundColor: piece.color }} />}
                </motion.span>
              ))} */}
      {/* </div> */}

      {/* Large pulsing hearts at the center background */}
      {/* <motion.div
              className="pointer-events-none absolute text-[#fdf9f7]/20"
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              style={{ fontSize: "280px" }}
            >
              &#10084;
            </motion.div> */}
      {/* </motion.div> */}
      {/* )} */}
      {/* </AnimatePresence> */}
    </section>
  )
}
