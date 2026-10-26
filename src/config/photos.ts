/**
 * Фотографии студии — фактические снимки из открытой карточки 2ГИС «Автодримс»,
 * альбом «от владельца» (id 70000001094456201, выгрузка leads-2gis/ekb.json,
 * инфраструктура 2ГИС CDN). Список — единственный вход для hero и галереи.
 */
const B = import.meta.env.BASE_URL;

export type StudioPhoto = {
  src: string;
  /** нейтральная подпись по факту кадра, без интерпретаций */
  tag: string;
};

/** Полоса под hero: четыре кадра бокса встык, full-bleed. */
export const heroStrip: string[] = [
  `${B}photos/d1.jpg`,
  `${B}photos/d4.jpg`,
  `${B}photos/d2.jpg`,
  `${B}photos/d7.jpg`,
];

/** Кадры галереи (masonry-сетка). */
export const gallery: StudioPhoto[] = [
  { src: `${B}photos/d3.jpg`, tag: "В боксе" },
  { src: `${B}photos/d6.jpg`, tag: "Салон после работ" },
  { src: `${B}photos/d7.jpg`, tag: "В боксе" },
  { src: `${B}photos/d5.jpg`, tag: "Салон после работ" },
  { src: `${B}photos/d2.jpg`, tag: "В боксе" },
  { src: `${B}photos/d1.jpg`, tag: "В боксе" },
];
