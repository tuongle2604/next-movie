import MovieSummary from "@/features/movies/components/movie-summary";
import MovieCollections from "@/features/movies/components/movie-collections";
import NextImage from "@/components/ui/next-image";
import { getMovie } from "@/features/movies/api/movies";

export { generateDefaultStaticParams as generateStaticParams } from "@/lib/utils-server";

type MovieDetailProps = {
  params: Promise<{ id: string; lang: string }>;
};

export const dynamic = "force-static";

export async function generateMetadata({ params }: MovieDetailProps) {
  const { id, lang } = await params;
  const movie = await getMovie(id, {
    append_to_response: "credits,recommendations,videos",
    lang,
  });

  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      images: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/original/${movie.poster_path}`,
    },
  };
}

export default async function MovieDetail({ params }: MovieDetailProps) {
  const { id, lang } = await params;
  const movie = await getMovie(id, {
    append_to_response: "credits,recommendations,videos",
    lang,
  });

  return (
    <div className="">
      <div className="flex max-w-5xl flex-col md:flex-row md:gap-5 xl:gap-8">
        <NextImage
          src={movie.poster_path}
          alt="THE SHAWSHANK REDEMPTION"
          width={360}
          height={540}
          sizes="360px"
          className="mb-5 self-start md:mb-0 md:flex-[180px] xl:flex-[360px]"
          preload={true}
          unoptimized
        />

        {/* md:w-[calc(100%-180px)] xl:w-[calc(100%-360px-20px)] */}
        <div className="md:w-[calc(100%-180px)] md:overflow-hidden xl:w-[calc(100%-360px-20px)]">
          <MovieSummary movie={movie} />
        </div>
      </div>

      {movie.recommendations?.results && (
        <div className="mt-10">
          <MovieCollections movies={movie.recommendations.results} />
        </div>
      )}
    </div>
  );
}
