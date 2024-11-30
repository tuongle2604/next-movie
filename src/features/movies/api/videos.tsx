import { fetchApi } from "@/lib/api";
import { getTrailerFromVideos } from "@/lib/utils";

// const { results: videos } = await getVideos(popularMovies[0].id);

function getVideos(movieId: string): Promise<VideoResults> {
  return fetchApi(`/movie/${movieId}/videos`);
}

async function getMovieTrailer(movieId: string) {
  const { results: videos } = await getVideos(movieId);
  const trailer = getTrailerFromVideos(videos);

  return trailer;
}

export { getVideos, getMovieTrailer };
