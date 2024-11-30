import SearchFilter from "@/features/search/components/search-filter";
import SearchMovies from "@/features/search/components/search-movies";
import { Suspense } from "react";
import MovieCollectionsLoading from "@/features/movies/components/movie-collections-loading";

type SearchProps = {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ query: string; page: string }>;
};

export async function generateMetadata({ searchParams }: SearchProps) {
  const { query = "" } = await searchParams;

  return {
    title: `Search results for: ${query}`,
  };
}

export default async function Search({ params, searchParams }: SearchProps) {
  const { lang } = await params;
  const { query = "", page = 1 } = await searchParams;

  return (
    <div className="px-4">
      <SearchFilter query={query} />
      <Suspense
        key={`${lang}-${query}-${page}`}
        fallback={<MovieCollectionsLoading />}
      >
        <SearchMovies lang={lang} query={query} page={+page}></SearchMovies>
      </Suspense>
    </div>
  );
}
