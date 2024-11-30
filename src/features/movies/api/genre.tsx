import { fetchApi } from "@/lib/api";

function getGenreList(lang: string): Promise<GenreList> {
  return fetchApi(`/genre/movie/list`, { lang });
}

export { getGenreList };
