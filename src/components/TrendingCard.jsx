"use client";
import Image from "next/image";
import movieIcon from "../../public/images/icon-movie.svg";
import tvIcon from "../../public/images/icon-tv.svg";
import PlayButton from "./PlayButton";
import BookmarkButton from "./BookmarkButton";
import { useBookmarkContext } from "@/context/BookmarkContext";

const TrendingCard = ({ item, showMovies }) => {
  const { favorited, handleBookmarkClick } = useBookmarkContext();

  return (
    <div>
      <div className="relative group cursor-pointer overflow-hidden rounded-[8px]">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={`https://image.tmdb.org/t/p/w328/${item.backdrop_path}`}
          />
          <source
            media="(max-width: 1024px)"
            srcSet={`https://image.tmdb.org/t/p/w440/${item.backdrop_path}`}
          />
          <source
            media="(min-width: 1025px)"
            srcSet={`https://image.tmdb.org/t/p/w560/${item.backdrop_path}`}
          />
          <img
            src={`https://image.tmdb.org/t/p/w328/${item.backdrop_path}`}
            alt={`${item.title} thumbnail`}
            className="w-full h-full rounded-[8px] object-cover group-hover:scale-105 transition-all duration-200 ease-in"
          />
        </picture>
        <span
          className="bookmarkBtn bg-almostBlack/50 rounded-full w-8 h-8 grid place-content-center absolute top-2 right-2 hover:bg-white cursor-pointer transition-all duration-200 ease-in-out md:top-4 md:right-6"
          onClick={() => {
            handleBookmarkClick(item);
          }}
        >
          <BookmarkButton item={item} favorited={favorited} />
        </span>

        <div className="linear-bg p-4 w-full rounded-b-[8px] absolute bottom-0 md:p-6">
          <div className="text-[12px] font-light text-white/75 flex items-center space-x-2 md:text-[15px]">
            <p>{item.release_date}</p>
            <span>•</span>
            <div className="flex items-center space-x-[6px]">
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
              {showMovies ? <p>Movie</p> : <p>TV Series</p>}
            </div>
            <span>•</span>
            {item.adult ? <p>R</p> : <p>PG</p>}
          </div>
          <h3 className="text-[15px] font-medium mt-1 md:text-[24px]">
            {item.title}
          </h3>
        </div>
        <div className="opacity-0 group-hover:opacity-100 absolute cursor-pointer top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-200 ease-in-out">
          <PlayButton />
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
