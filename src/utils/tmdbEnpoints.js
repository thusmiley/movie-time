import "dotenv/config";

export const TMDB_BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
export const MONGO_URI = process.env.MONGO_DB_URI;
export const API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;
export const TMDB_TOKEN = process.env.NEXT_PUBLIC_TMDB_KEY;
export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/original";

export function getGenreMovie() {
  return "https://api.themoviedb.org/3/genre/movie/list?language=en";
}

export function getMovieDetail(movieId) {
  return `https://api.themoviedb.org/3/movie/${movieId}&append_to_response=videos`;
}

export function getMovieVideo(movieId) {
  return `https://api.themoviedb.org/3/movie/${movieId}/videos`;
}

export function getMovieCredits(movieId) {
  return `https://api.themoviedb.org/3/movie/${movieId}/credits`;
}

export function getTrendingMovies(pages) {
  return `https://api.themoviedb.org/3/trending/movie/week?&language=en-US&sort_by=popularity.desc&page=${pages}`;
}

export function getPopularMovies(pages) {
  return `https://api.themoviedb.org/3/movie/popular?&language=en-US&sort_by=popularity.desc&page=${pages}`;
}

export function getNowPlayingMovies(pages) {
  return `https://api.themoviedb.org/3/movie/now_playing?&language=en-US&sort_by=popularity.desc&page=${pages}`;
}

export function getUpcomingMovies(pages) {
  return `https://api.themoviedb.org/3/movie/upcoming?&language=en-US&sort_by=popularity.desc&page=${pages}`;
}

export function getTopRatedMovies(pages) {
  return `https://api.themoviedb.org/3/movie/top_rated?&language=en-US&sort_by=popularity.desc&page=${pages}`;
}

export function getTrendingTV(pages) {
  return `https://api.themoviedb.org/3/trending/tv/week?&language=en-US&sort_by=popularity.desc&page=${pages}`;
}

export function getGenreTV() {
  return "https://api.themoviedb.org/3/genre/tv/list?language=en";
}

export function getAiringTodayTV(pages) {
  return `https://api.themoviedb.org/3/tv/airing_today?&language=en-US&sort_by=popularity.descpage=${pages}`;
}

export function getPopularTV(pages) {
  return `https://api.themoviedb.org/3/tv/popular?&language=en-US&sort_by=popularity.desc&page=${pages}`;
}

export function getOnAirTV(pages) {
  return `https://api.themoviedb.org/3/tv/on_the_air?&language=en-US&sort_by=popularity.desc&page=${pages}`;
}

export function getTopRatedTV(pages) {
  return `https://api.themoviedb.org/3/tv/top_rated?&language=en-US&sort_by=popularity.desc&page=${pages}`;
}

export function getTVDetail(TvId) {
  return `https://api.themoviedb.org/3/tv/${TvId}`;
}

export function getTvCredits(TvId) {
  return `https://api.themoviedb.org/3/tv/${TvId}/credits`;
}

export function getTVVideos(TvId) {
  return `https://api.themoviedb.org/3/tv/${TvId}/videos`;
}

export function getGenreCollectionsMovie(genreId, genreName, pages) {
  return `https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=${genreId}&name=${genreName}&language=en-US&sort_by=popularity.desc&page=${pages}`;
}

export function getGenreCollectionsTV(genreId, genreName, pages) {
  return `https://api.themoviedb.org/3/discover/tv?include_adult=false&with_genres=${genreId}&name=${genreName}&language=en-US&sort_by=popularity.desc&page=${pages}`;
}

export function getSearchMulti(query, pages) {
  return `https://api.themoviedb.org/3/search/multi?&query=${encodeURIComponent(
    query
  )}&page=${pages}`;
}

export function getSearchTV(query, pages) {
  return `https://api.themoviedb.org/3/search/tv?&query=${encodeURIComponent(
    query
  )}&page=${pages}`;
}

export function getSearchMovie(query, pages) {
  return `https://api.themoviedb.org/3/search/movie?&query=${encodeURIComponent(
    query
  )}&page=${pages}`;
}
