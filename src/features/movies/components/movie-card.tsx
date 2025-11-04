import { cn } from "@/lib/utils";
import Rating from "@/components/ui/rating";
import NextImage from "@/components/ui/next-image";
import NextLink from "@/components/ui/next-link";

interface MovieCardProps {
  movie: Media;
  className?: string;
}

export default function MovieCard({ movie, className = "" }: MovieCardProps) {
  return (
    <div className={cn("group flex min-w-36 shrink-0", className)}>
      <NextLink
        href={`/movie/${movie?.id}`}
        className="flex w-full flex-col"
        prefetch={false}
      >
        <div
          className={cn(
            "relative mb-2 aspect-[2/3] overflow-hidden md:mb-3",
            "border-2 border-transparent shadow-primary transition group-hover:border-border group-hover:shadow-lg",
          )}
        >
          <NextImage
            className="object-cover transition group-hover:scale-105"
            src={movie.poster_path}
            alt={movie.title}
            fill={true}
            unoptimized
          />
        </div>

        <div className="flex grow flex-col">
          <p className="mb-1 text-sm md:text-base">{movie.title}</p>
          <Rating rating={movie.vote_average} className="mt-auto" />
        </div>
      </NextLink>
    </div>
  );
}
