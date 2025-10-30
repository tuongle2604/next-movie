import { redirect } from "next/navigation";
import MovieCollections from "@/features/movies/components/movie-collections";
// import { getMovies } from "@/api";
import { ListPagination } from "@/components/list-pagination";
import { getMovies } from "@/features/movies/api/movies";
interface DiscoverProps {
  searchParams: Promise<{ page: string }>;
  params: Promise<{ lang: string }>;
}

export default async function Discover({
  searchParams,
  params,
}: DiscoverProps) {
  const { page = 1 } = await searchParams;
  const { lang } = await params;

  const data = await getMovies({ type: "discover", lang });

  return (
    <div className="px-4">
      <MovieCollections movies={data.results} heading={"Discover Movie"} />

      <div className="mt-14">
        <ListPagination currentPage={+page} totalPages={data.total_pages} />
      </div>
    </div>
  );
}
