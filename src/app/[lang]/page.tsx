import MovieCarousel from "@/features/movies/components/movie-carousel";
import Main from "@/components/main";
import { getHomeMovies } from "@/features/movies/api/movies";
import { getMovieTrailer } from "@/features/movies/api/videos";
export { generateDefaultStaticParams as generateStaticParams } from "@/lib/utils-server";

export const revalidate = 600;

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { popularMovies, topRatedMovies, upCommingMovies } =
    await getHomeMovies(lang);
  const trailer = await getMovieTrailer(popularMovies[0].id);
  const heroMedia = popularMovies[0];
  heroMedia.trailer = trailer;
  console.log("******************");
  console.log("home page");
  console.log(trailer);

  return (
    <Main media={heroMedia} lang={lang}>
      <MovieCarousel
        className="mb-6 md:mb-10"
        movies={popularMovies}
        heading="Popular"
      />
      <MovieCarousel
        className="mb-6 md:mb-10"
        movies={topRatedMovies}
        heading="Top Rated"
      />

      <MovieCarousel
        className="mb-6 md:mb-10"
        movies={upCommingMovies}
        heading="Upcomming"
      />
    </Main>
  );
}
