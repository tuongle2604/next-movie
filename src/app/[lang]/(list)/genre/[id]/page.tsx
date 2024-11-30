import MovieCollections from "@/features/movies/components/movie-collections";
import { getMoviesByGenre } from "@/features/movies/api/movies";
import { getGenreList } from "@/features/movies/api/genre";
import { ListPagination } from "@/components/list-pagination";

export default async function GenreDetail({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string; id: string }>;
  searchParams: Promise<{ page: string }>;
}) {
  const { id, lang } = await params;
  const { page = 1 } = await searchParams;
  const { genres } = await getGenreList(lang);
  const data = await getMoviesByGenre({ id, lang, page });
  const name = genres.find((g) => g.id === +id)?.name;

  return (
    <div className="px-4">
      <MovieCollections movies={data.results} heading={name + " movies"} />

      <div className="mt-14">
        <ListPagination currentPage={+page} totalPages={data.total_pages} />
      </div>
    </div>
  );
}
