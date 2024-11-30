"use client";
import Rating from "@/components/ui/rating";
import { Button } from "@/components/ui/button";
import NextLink from "@/components/ui/next-link";
import IconCircleDot from "@/components/icons/circle-dot";
import useEmblaCarousel from "embla-carousel-react";
import NextImage from "@/components/ui/next-image";
import { cn, getTrailerFromVideos } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipPortal,
} from "@/components/ui/tooltip";
import MoiveTrailer from "./movie-trailer";

function SummarySection({
  children,
  classname = "",
}: {
  children: React.ReactNode;
  classname?: string;
}) {
  return <div className={cn("mb-6 md:mb-7", classname)}>{children}</div>;
}

interface MovieSummaryProps {
  movie: Media;
}

export default function MovieSummary({ movie }: MovieSummaryProps) {
  const [emblaRef] = useEmblaCarousel({ dragFree: true });
  const trailer = getTrailerFromVideos(movie.videos?.results);

  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : null;

  return (
    <div className="">
      <SummarySection>
        <p className="mb-2 text-2xl font-bold md:text-4xl">{movie.title}</p>
        <p className="">{movie.tagline}</p>
      </SummarySection>

      <SummarySection>
        <Rating rating={movie.vote_average} className="mb-2" />
        <p className="text-sm font-bold">
          {"English / " + movie.runtime + "min. " + `/ ${year}`}
        </p>
      </SummarySection>

      <SummarySection>
        <p className="mb-2 text-sm font-bold">GENRES</p>
        <div className="flex gap-5 text-xs font-bold">
          {movie.genres?.map((genre) => (
            <NextLink
              className="flex items-center underline-offset-2 hover:underline"
              key={genre.id}
              href={`/genre/${genre.id}`}
            >
              <IconCircleDot className="mr-2" width={20} height={20} />
              {genre.name}
            </NextLink>
          ))}
        </div>
      </SummarySection>

      <SummarySection>
        <p className="mb-2 text-sm font-bold">SYNOPSIS</p>
        <p>{movie.overview}</p>
      </SummarySection>

      <SummarySection classname="">
        <p className="mb-2 text-sm font-bold">CAST</p>
        <div className="" ref={emblaRef}>
          <div className="flex w-full gap-3 p-1">
            {movie?.credits?.cast.map((cast, index) => (
              <TooltipProvider key={cast.id} delayDuration={300}>
                <Tooltip>
                  <TooltipTrigger>
                    <NextLink
                      href={`/person/${cast.id}`}
                      className="inline-flex w-16 h-24 shrink-0 hover:scale-105 "
                    >
                      <NextImage
                        src={cast.profile_path}
                        width={64}
                        height={96}
                        alt={cast.name}
                        sizes="64px"
                        unoptimized
                      />
                    </NextLink>
                  </TooltipTrigger>
                  <TooltipPortal>
                    <TooltipContent className="bg-secondary text-secondary-foreground">
                      <p>{cast.name}</p>
                    </TooltipContent>
                  </TooltipPortal>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </SummarySection>

      <SummarySection classname="flex gap-3">
        <Button asChild variant={"secondary"}>
          <NextLink
            href={`https://www.imdb.com/title/${movie.imdb_id}/`}
            target="_blank"
          >
            IMDB
          </NextLink>
        </Button>
        <MoiveTrailer trailer={trailer}>
          <Button variant={"secondary"}>Trailer</Button>
        </MoiveTrailer>
      </SummarySection>
    </div>
  );
}
