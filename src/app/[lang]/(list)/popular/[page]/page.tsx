import MovieCollections from "@/features/movies/components/movie-collections";
import { ListPagination } from "@/components/list-pagination";
import { getMovies } from "@/features/movies/api/movies";
import { popular } from "@/data/metadata";
export { generateDefaultStaticParams as generateStaticParams } from "@/lib/utils-server";
interface DiscoverProps {
  params: Promise<{ lang: string; page: string }>;
}

export const revalidate = 86400;

export async function generateMetadata() {
  return {
    title: popular.title,
    description: popular.description,
  };
}

export default async function Pupular({ params }: DiscoverProps) {
  const { lang, page = 1 } = await params;

  const data = await getMovies({ type: "popular", lang, page });

  return (
    <div className="px-4">
      <MovieCollections movies={data.results} heading={"Popular Movie"} />

      <div className="mt-14">
        <ListPagination currentPage={+page} totalPages={data.total_pages} />
      </div>
    </div>
  );
}
