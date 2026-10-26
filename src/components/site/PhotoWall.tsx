import { cn } from "@/lib/utils";
import { gallery, heroStrip, type StudioPhoto } from "@/config/photos";
import { Camera } from "lucide-react";

/**
 * Фото студии — реальные снимки из открытой карточки 2ГИС «от владельца»
 * (см. src/config/photos.ts). Композиция: full-bleed полоса под hero
 * и masonry-сетка галереи вместо горизонтальной ленты.
 */

/** Полоса под hero: четыре кадра бокса встык, обрезка в 21:9. */
export function HeroStrip({ className }: { className?: string }) {
  return (
    <figure className={cn("relative", className)}>
      <div className="relative z-10 overflow-hidden border-y border-border">
        <div className="grid aspect-[21/9] w-full grid-cols-4">
          {heroStrip.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden={i > 0}
              loading={i === 0 ? "eager" : "lazy"}
              className="photo-grain h-full w-full object-cover"
            />
          ))}
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/60"
          aria-hidden
        />
        <span className="absolute right-4 top-4 border border-border bg-background/80 px-2 py-1 font-display text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/90 backdrop-blur-sm">
          боксы студии
        </span>
      </div>
      <figcaption className="relative z-10 mx-auto mt-2 flex max-w-6xl items-center gap-1.5 px-4 text-[11px] uppercase tracking-widest text-muted-foreground">
        <Camera className="size-3.5" aria-hidden />
        фото — открытая карточка студии в 2ГИС
      </figcaption>
    </figure>
  );
}

/** Секция «Работы»: masonry-колонки, разные высоты кадров. */
export function Gallery() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16 md:pb-20">
      <div className="columns-2 gap-2 sm:gap-3 md:columns-3">
        {gallery.map((p, i) => (
          <Tile key={p.src} photo={p} index={i + 1} />
        ))}
      </div>
      <p className="mt-3 flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-muted-foreground">
        <Camera className="size-3.5" aria-hidden />
        альбом «от владельца», карточка 2ГИС · свои работы заменяете сами
      </p>
    </div>
  );
}

function Tile({ photo, index }: { photo: StudioPhoto; index: number }) {
  return (
    <figure
      className={cn(
        "group relative mb-2 break-inside-avoid overflow-hidden border border-border sm:mb-3",
        index % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/5]",
      )}
    >
      <img
        src={photo.src}
        alt={photo.tag}
        loading={index <= 2 ? "eager" : "lazy"}
        className="photo-grain h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      <span className="absolute left-3 top-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-foreground/70">
        {String(index).padStart(2, "0")}
      </span>
      <span className="absolute bottom-3 left-3 font-display text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/90">
        {photo.tag}
      </span>
    </figure>
  );
}
