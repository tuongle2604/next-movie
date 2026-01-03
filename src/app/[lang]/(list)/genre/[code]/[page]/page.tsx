import MovieCollections from "@/features/movies/components/movie-collections";
import { getMoviesByGenre } from "@/features/movies/api/movies";
// import { getGenreList } from "@/features/movies/api/genre";
import { ListPagination } from "@/components/list-pagination";
export { generateDefaultStaticParams as generateStaticParams } from "@/lib/utils-server";
import { GENRES } from "@/lib/constant";
import { notFound } from "next/navigation";

export const revalidate = 86400;

export default async function GenreDetail({
  params,
}: {
  params: Promise<{ lang: string; code: string; page: string }>;
}) {
  const { code, lang, page } = await params;
  // const { page = 1 } = await searchParams;
  // const { genres } = await getGenreList(lang);
  const genre = GENRES.find((g) => g.code === code);

  if (!genre) {
    notFound();
  }

  const data = await getMoviesByGenre({ id: String(genre.id), lang, page });
  const name = genre.name;

  return (
    <div className="px-4">
      <MovieCollections movies={data.results} heading={name + " movies"} />

      <div className="mt-14">
        <ListPagination currentPage={+page} totalPages={data.total_pages} />
      </div>
    </div>
  );
}
