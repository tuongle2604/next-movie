import MovieCard from "./movie-card";
import { Skeleton } from "@/components/ui/skeleton";
import { ITEMS_PER_PAGE } from "@/lib/constant";
import { cn } from "@/lib/utils";

export default function MovieCollectionsLoading() {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-x-5 md:gap-y-8 xl:grid-cols-5">
        {[...Array(ITEMS_PER_PAGE).keys()].map((index) => (
          <div className={"min-w-36 shrink-0"} key={index}>
            <div
              className={cn(
                "relative mb-2 aspect-[2/3] overflow-hidden md:mb-3",
                "border-2 border-transparent shadow-primary transition group-hover:border-border group-hover:shadow-lg",
              )}
            >
              <Skeleton className="w-full h-full rounded-xl" />
            </div>
            <div className="flex flex-col grow">
              <Skeleton className="w-full h-5 mb-1 md:h-6" />
              <Skeleton className="h-5 w-28 md:h-6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
