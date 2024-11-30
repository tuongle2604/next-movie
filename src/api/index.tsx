import { fetchApi } from "@/lib/api";
import "server-only";

// function getMovies(): Promise<Media> {
//   return fetchApi(`/${type}/${id}`);
// }
type Id = number | string;
type Page = number | string;
type Language = string;
interface Params {
  append_to_response: string;
}

interface GetMovies {
  type?: string;
  page?: Page;
  lang?: string;
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

function getMovie(id: Id, params?: Params): Promise<Media> {
  return fetchApi(`/movie/${id}`, params);
}

function getVideos(movieId: Id): Promise<VideoResults> {
  return fetchApi(`/movie/${movieId}/videos`);
}

function gerPerson(id: Id, params?: Params): Promise<Person> {
  return fetchApi(`/person/${id}`, params);
}

function getGenreList(lang?: Language): Promise<GenreList> {
  return fetchApi(`/genre/movie/list`, { lang });
}

function getMoviesByGenre(id: Id, page: Page = 1): Promise<PageResult<Media>> {
  return fetchApi(`/discover/movie`, {
    page,
    with_genres: id,
  });
}

export {
  getMovies,
  getMovie,
  gerPerson,
  getMoviesByGenre,
  getGenreList,
  getVideos,
};
