import { fetchApi } from "@/lib/api";

async function searchMovies({
  query,
  lang,
  page,
}: {
  query: string;
  lang: string;
  page?: Page;
}): Promise<PageResult<Media>> {
  return fetchApi("/search/movie", { query, lang, page });
}

export { searchMovies };
