"use client";
import Image from "next/image";
import movieIcon from "../../public/images/icon-movie.svg";
import tvIcon from "../../public/images/icon-tv.svg";
import PlayButton from "./PlayButton";
import BookmarkButton from "./BookmarkButton";
import { useBookmarkContext } from "@/context/BookmarkContext";

const MovieCard = ({ item, showMovies }) => {
  const { favorited, handleBookmarkClick } = useBookmarkContext();

  return (
    <div>
      <div className="relative group cursor-pointer overflow-hidden rounded-[8px]">
        <img
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          alt={`${showMovies ? item.title : item.name} thumbnail`}
          className="w-full h-full rounded-[8px] object-cover hover:scale-105 transition-all duration-200 ease-in"
        />
        <span
          className="bookmarkBtn bg-almostBlack/50 rounded-full w-8 h-8 grid place-content-center absolute top-2 right-2 hover:bg-white cursor-pointer  md:top-4 md:right-4"
          onClick={() => {
            handleBookmarkClick(item);
          }}
        >
          <BookmarkButton item={item} favorited={favorited} />
        </span>

        <div className="opacity-0 group-hover:opacity-100 absolute cursor-pointer top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-200 ease-in-out">
          <PlayButton videoId={item.id} />
        </div>
      </div>

      <div className="mt-2">
        <div className="text-[11px] font-light text-white/75 flex items-center space-x-[6px] md:text-[13px]">
          <p>
            {showMovies
              ? item.release_date?.slice(0, 4)
              : item.first_air_date?.slice(0, 4)}
          </p>
          <span>•</span>
          <div className="flex items-center space-x-1">
            {showMovies ? (
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
            <p>{showMovies ? "Movie" : "TV Series"}</p>
          </div>
          <span>•</span>
          <p>{item.adult ? "R" : "PG"}</p>
        </div>
        <h3 className="text-[14px] font-medium mt-1 md:text-[18px] md:mt-[5px]">
          {showMovies ? item.title : item.name}
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
