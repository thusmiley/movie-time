"use client";
import Image from "next/image";
import movieIcon from "../../public/images/icon-movie.svg";
import tvIcon from "../../public/images/icon-tv.svg";
import PlayButton from "./PlayButton";
import BookmarkButton from "./BookmarkButton";
import { useBookmarkContext } from "@/context/BookmarkContext";
import { shimmer, toBase64 } from "@/utils";

const CollectionCard = ({ item, mediaType }) => {
  const {
    favoritedMovies,
    handleMoviesBookmarkClick,
    favoritedTvs,
    handleTvsBookmarkClick,
  } = useBookmarkContext();

  return (
    <div>
      <div className="w-full relative group cursor-pointer overflow-hidden rounded-[8px] z-0">
        <div className="relative h-[110px] md:h-[150px] xl:h-[200px] 2xl:h-[250px]">
          <Image
            src={`${
              item.backdrop_path
                ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
                : item.poster_path
                ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                : "/images/image-error.png"
            } `}
            alt={`${item.title ? item.title : item.name ? item.name : ""}`}
            width={1653}
            height={929}
            className="w-full h-[110px] rounded-[8px] object-cover object-center hover:scale-105 transition-all duration-200 ease-in md:h-[150px]  xl:h-[200px] 2xl:h-[250px]"
            placeholder="blur"
            blurDataURL={`${toBase64(shimmer(240, 140))}`}
            unoptimized
            loading="lazy"
          />
        </div>

        <button
          className="bookmarkBtn bg-almostBlack/50 rounded-full w-8 h-8 grid place-content-center absolute top-2 right-2 hover:bg-white cursor-pointer  md:top-4 md:right-4"
          onClick={() => {
            mediaType === "movie"
              ? handleMoviesBookmarkClick(item)
              : handleTvsBookmarkClick(item);
          }}
        >
          {mediaType === "movie" ? (
            <BookmarkButton item={item} favorited={favoritedMovies} />
          ) : (
            <BookmarkButton item={item} favorited={favoritedTvs} />
          )}
        </button>

        <div className="opacity-0 group-hover:opacity-100 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-200 ease-in-out">
          <PlayButton videoId={item.id} mediaType={mediaType} />
        </div>
      </div>

      <div className="mt-2">
        <div className="text-[11px] font-light text-white/75 flex items-center space-x-[6px] md:text-[13px]">
          <p>
            {mediaType === "movie"
              ? item.release_date
                ? item.release_date?.slice(0, 4)
                : "NA"
              : item.first_air_date
              ? item.first_air_date?.slice(0, 4)
              : "NA"}
          </p>
          <span>•</span>
          <div className="flex items-center space-x-1">
            {mediaType === "movie" ? (
              <Image
                src={movieIcon}
                width={12}
                height={12}
                className="w-3 h-3"
                alt="movie icon"
              />
            ) : (
              <Image
                src={tvIcon}
                width={12}
                height={12}
                className="w-3 h-3"
                alt="tv icon"
              />
            )}
            <p>{mediaType === "movie" ? "Movie" : "TV Series"}</p>
          </div>
          <span>•</span>
          <p>{item.adult ? "R" : "PG"}</p>
        </div>
        <h3 className="text-[14px] font-medium mt-1 md:text-[18px] md:mt-[5px]">
          {mediaType === "movie" ? item.title : item.name}
        </h3>
      </div>
    </div>
  );
};

export default CollectionCard;
