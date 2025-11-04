import MovieCollections from "@/features/movies/components/movie-collections";
import { ListPagination } from "@/components/list-pagination";
import { getMovies } from "@/features/movies/api/movies";
import { upcoming } from "@/data/metadata";
export { generateDefaultStaticParams as generateStaticParams } from "@/lib/utils-server";

interface DiscoverProps {
  params: Promise<{ lang: string; page: string }>;
}

export async function generateMetadata() {
  return {
    title: upcoming.title,
    description: upcoming.description,
  };
}

export default async function Discover({ params }: DiscoverProps) {
  const { lang, page = 1 } = await params;

  const data = await getMovies({ type: "upcoming", lang, page });

  return (
    <div className="px-4">
      <MovieCollections movies={data.results} heading={"Upcoming Movie"} />

      <div className="mt-14">
        <ListPagination currentPage={+page} totalPages={data.total_pages} />
      </div>
    </div>
  );
}
