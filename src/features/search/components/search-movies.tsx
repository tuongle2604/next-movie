import MovieCard from "@/features/movies/components/movie-card";
import { searchMovies } from "@/features/search/api";
import { ListPagination } from "@/components/list-pagination";
import NoResults from "./no-results";

export default async function SearchMovies({
  query,
  lang,
  page,
}: {
  query: string;
  lang: string;
  page: number;
}) {
  const data = await searchMovies({ query, lang, page });

  if (data.total_results === 0) {
    return <NoResults query={query} />;
  }

  return (
    <div className="relative pt-3">
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-x-5 md:gap-y-8 xl:grid-cols-5">
        {data.results.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      <div className="mt-14">
        <ListPagination currentPage={page} totalPages={data.total_pages} />
      </div>
    </div>
  );
}
