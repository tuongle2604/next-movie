import Image from "next/image";
import { Button } from "../ui/button";
// import Link from "next/link";
import NextLink from "@/components/ui/next-link";
import NextImage from "../ui/next-image";
import MovieTrailer from "@/features/movies/components/movie-trailer";

export default function HeroBanner({ media }: { media: Media }) {
  return (
    <div className="relative aspect-square md:aspect-video xl:aspect-[3/1] 3xl:aspect-[4/1]">
      <NextImage
        src={media.backdrop_path}
        alt={media.title}
        fill={true}
        style={{ objectFit: "cover" }}
        sizes="100vw"
        original={true}
        preload={true}
        fetchPriority={"high"}
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-center bg-black/50 p-5 md:pl-10">
        <div className="m-auto w-full max-w-screen-3xl text-secondary-foreground">
          <p className="mb-4 text-3xl font-bold md:text-5xl">{media.title}</p>
          <p className="mb-7 line-clamp-5 max-w-lg md:line-clamp-6 md:text-lg">
            {media.overview}
          </p>
          <div className="mb-4 flex gap-5">
            <Button className="capitalize" asChild>
              <NextLink href={`/movie/${media.id}`}>View detail</NextLink>
            </Button>
            <MovieTrailer trailer={media.trailer}>
              <Button className="capitalize">Trailer</Button>
            </MovieTrailer>
          </div>
        </div>
      </div>
    </div>
  );
}
