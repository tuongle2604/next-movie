import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { regions, defaultLocale } from "@/lib/regions";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTrailerFromVideos(videos: Video[] | undefined): string {
  if (!videos) return "";

  const trailer = videos.find(
    (video) => video.type === "Trailer" && video.site === "YouTube",
  );

  return trailer ? `www.youtube.com/embed/${trailer.key}` : "";
}

export function isLinkHasLocale(pathname: string) {
  const locales = regions.map((region) => region.code);

  return locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
