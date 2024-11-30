import MovieCard from "./movie-card";

export default function MovieCollections({
  movies,
  heading = "Recommended movies",
}: {
  movies: Media[];
  heading?: string;
}) {
  return (
    <div className="pt-3">
      <p className="mb-5 text-xl font-bold md:mb-8 md:text-2xl lg:text-3xl">
        {heading}
      </p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-x-5 md:gap-y-8 xl:grid-cols-5">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}
