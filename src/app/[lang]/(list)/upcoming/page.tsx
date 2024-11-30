import MovieCollections from "@/features/movies/components/movie-collections";
import { ListPagination } from "@/components/list-pagination";
import { getMovies } from "@/features/movies/api/movies";
import { upcoming } from "@/data/metadata";
interface DiscoverProps {
  searchParams: Promise<{ page: string }>;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata() {
  return {
    title: upcoming.title,
    description: upcoming.description,
  };
}

export default async function Discover({
  searchParams,
  params,
}: DiscoverProps) {
  const { page = 1 } = await searchParams;
  const { lang } = await params;

  const data = await getMovies({ type: "upcoming", lang });

  return (
    <div className="px-4">
      <MovieCollections movies={data.results} heading={"Upcoming Movie"} />

      <div className="mt-14">
        <ListPagination currentPage={+page} totalPages={data.total_pages} />
      </div>
    </div>
  );
}
