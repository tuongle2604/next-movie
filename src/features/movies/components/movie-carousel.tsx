"use client";
import useEmblaCarousel from "embla-carousel-react";
import MovieCard from "./movie-card";
// import { Media } from "src/types";

interface MovieCarouselProps {
  className?: string;
  heading: string;
  movies: Media[];
}

export default function MovieCarousel({
  className,
  heading,
  movies,
}: MovieCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ dragFree: true });

  if (!movies.length) {
    return;
  }

  return (
    <div className={className}>
      <h2 className="mb-4 px-4 text-xl font-bold md:mb-5 md:text-2xl">
        {heading}
      </h2>

      <div ref={emblaRef} className="overflow-hidden p-1 px-4">
        <div className="flex gap-4 md:gap-5">
          {movies.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} className="basis-1/6" />
          ))}
        </div>
      </div>
    </div>
  );
}
