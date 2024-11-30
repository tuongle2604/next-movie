import { Skeleton } from "@/components/ui/skeleton";
import MovieCollectionsLoading from "@/features/movies/components/movie-collections-loading";

export default function Loading() {
  return (
    <div className="px-4">
      <div className="pt-3">
        <Skeleton className="w-40 mb-5 h-7 md:mb-8 md:w-60 lg:h-9" />

        <MovieCollectionsLoading />
      </div>
    </div>
  );
}
