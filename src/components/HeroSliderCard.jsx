"use client";
import Link from "next/link";
// import PlayButton from "./PlayButton";
import BookmarkButton from "./BookmarkButton";
import { useBookmarkContext } from "@/context/BookmarkContext";
import { shimmer, toBase64 } from "@/utils";

const HeroSliderCard = ({ item, mediaType }) => {
  const {
    favoritedMovies,
    handleMoviesBookmarkClick,
    favoritedTvs,
    handleTvsBookmarkClick,
  } = useBookmarkContext();

  return (
    <div className="relative group overflow-hidden rounded-[8px]">
      <Link rel="canonical" href={`/${mediaType}/${item.id}`}>
        <img
          src={`${
            item.backdrop_path
              ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
              : `https://image.tmdb.org/t/p/original${item.poster_path}`
          } `}
          alt={`${item.title || item.name || ""}`}
          className="w-full h-full cursor-pointer rounded-[8px] object-cover group-hover:scale-105 transition-all duration-200 ease-in"
          placeholder="blur"
          blurDataURL={`${toBase64(shimmer(240, 140))}`}
          unoptimized
          loading="lazy"
        />
      </Link>
      {mediaType === "movie" ? (
        <BookmarkButton
          item={item}
          favorited={favoritedMovies}
          mediaType="movie"
        />
      ) : (
        <BookmarkButton item={item} favorited={favoritedTvs} mediaType="tv" />
      )}

      <div className="linear-bg p-4 w-full rounded-b-[8px] absolute bottom-0 md:p-6">
        <div className="text-[12px] font-light text-white/75 flex items-center space-x-2 md:text-[15px]">
          <p>
            {item?.release_date?.slice(0, 4) ||
              item?.first_air_date?.slice(0, 4) ||
              "NA"}
          </p>
          <span>•</span>
          <div className="flex items-center space-x-[6px]">
            {mediaType === "movie" ? (
              <img
                src="/images/icon-movie.svg"
                className="w-3 h-3"
                alt="movie icon"
              />
            ) : (
              <img
                src="/images/icon-tv.svg"
                className="w-3 h-3"
                alt="tv icon"
              />
            )}
            <p>{mediaType === "movie" ? "Movie" : "TV Series"}</p>
          </div>
          <span>•</span>
          <p>{item.adult ? "R" : "PG"}</p>
        </div>

        <Link rel="canonical" href={`/${mediaType}/${item.id}`}>
          <h3 className="text-[15px] font-medium mt-1 cursor-pointer md:text-[24px]">
            {item.title || item.name || "NA"}
          </h3>
        </Link>
      </div>
      {/* <div className="opacity-0 group-hover:opacity-100 absolute cursor-pointer top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-200 ease-in-out z-50">
          <PlayButton videoId={item.id} mediaType={mediaType} />
        </div> */}
    </div>
  );
};

export default HeroSliderCard;
