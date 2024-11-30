import { fetchApi } from "@/lib/api";

type Page = number | string;

interface GetMovies {
  type?: string;
  page?: Page;
  lang?: string;
}

interface Params {
  append_to_response: string;
}

function getMovie(id: string, params?: Params): Promise<Media> {
  return fetchApi(`/movie/${id}`, params);
}

function getMovies({
  type = "",
  page = 1,
  lang,
}: GetMovies): Promise<PageResult<Media>> {
  return fetchApi(`/movie/${type}`, {
    page,
    lang,
  });
}

function getPopularMovies(lang: string) {
  return getMovies({ type: "popular", lang });
}

function getTopRatedMovies(lang: string) {
  return getMovies({ type: "top_rated", lang });
}

function getUpcomingMovies(lang: string) {
  return getMovies({ type: "upcoming", lang });
}

async function getHomeMovies(lang: string) {
  const [
    { results: popularMovies = [] },
    { results: topRatedMovies = [] },
    { results: upCommingMovies = [] },
  ] = await Promise.all([
    getPopularMovies(lang),
    getTopRatedMovies(lang),
    getUpcomingMovies(lang),
  ]);

  return { popularMovies, topRatedMovies, upCommingMovies };
}

async function getMoviesByGenre({
  id,
  page = 1,
  lang,
}: {
  id: string;
  page?: Page;
  lang: string;
}): Promise<PageResult<Media>> {
  return fetchApi(`/discover/movie`, {
    page,
    with_genres: id,
    lang,
  });
}

export {
  getMovie,
  getMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getHomeMovies,
  getMoviesByGenre,
};
