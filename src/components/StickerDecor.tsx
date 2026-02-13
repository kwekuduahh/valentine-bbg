const stickers = [
  {
    src: "/stickers/goodlove/heart-hand.png",
    className: "top-12 left-3 w-14 -rotate-12 sm:top-16 sm:left-8 sm:w-20",
  },
  {
    src: "/stickers/goodlove/watergun-go.png",
    className: "top-[22%] right-2 w-10 rotate-8 sm:right-8 sm:w-14",
  },
  {
    src: "/stickers/goodlove/glasses.png",
    className: "top-[54%] left-2 w-10 -rotate-6 sm:left-10 sm:w-14",
  },
  {
    src: "/stickers/goodlove/plant.png",
    className: "top-[74%] right-3 w-12 rotate-12 sm:right-12 sm:w-18",
  },
  {
    src: "/stickers/goodlove/spark.png",
    className: "bottom-6 left-1/2 w-16 -translate-x-1/2 rotate-3 opacity-90 sm:w-22",
  },
]

export function StickerDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
      {stickers.map((sticker, index) => (
        <img
          key={`${sticker.src}-${index}`}
          src={sticker.src}
          alt=""
          className={`absolute select-none drop-shadow-[0_8px_12px_rgba(0,0,0,0.08)] ${sticker.className}`}
          loading="lazy"
        />
      ))}
    </div>
  )
}
