"use client";
import Link from "next/link";
import movieIcon from "../../public/images/icon-movie.svg";
import tvIcon from "../../public/images/icon-tv.svg";
import PlayButton from "./PlayButton";
import BookmarkButton from "./BookmarkButton";
import { useBookmarkContext } from "@/context/BookmarkContext";
import Skeleton from "@mui/material/Skeleton";

const CollectionCard = ({ item, mediaType }) => {
  const {
    favoritedMovies,
    handleMoviesBookmarkClick,
    favoritedTvs,
    handleTvsBookmarkClick,
    setSearchInput,
  } = useBookmarkContext();

  return (
    <div className="">
      <div className="w-full relative group overflow-hidden rounded-[8px] z-0">
        <div className="relative h-[110px] md:h-[150px] xl:h-[200px] 2xl:h-[250px]">
          {!(item.backdrop_path && item.poster_path) ? (
            <Skeleton
              variant="rounded"
              width="100%"
              height="100%"
              animation="wave"
              sx={{ borderRadius: "8px", bgcolor: "grey.800" }}
            >
              <div className="w-full h-[110px] rounded-[8px] object-cover object-center hover:scale-105 transition-all duration-200 ease-in md:h-[150px] xl:h-[200px] 2xl:h-[250px]" />
            </Skeleton>
          ) : (
            <Link rel="canonical" href={`/${mediaType}/${item.id}`}>
              <img
                src={
                  `https://image.tmdb.org/t/p/original${item.backdrop_path}` ||
                  `https://image.tmdb.org/t/p/original${item.poster_path}`
                }
                alt={`${item?.title || item?.name || ""}`}
                className="w-full h-[110px] rounded-[8px] object-cover object-center cursor-pointer hover:scale-105 transition-all duration-200 ease-in md:h-[150px] xl:h-[200px] 2xl:h-[250px]"
                // placeholder="blur"
                // blurDataURL={`${toBase64(shimmer(240, 140))}`}
                unoptimized
                loading="lazy"
              />
            </Link>
          )}
        </div>

        {mediaType === "movie" ? (
          <BookmarkButton
            item={item}
            favorited={favoritedMovies}
            mediaType="movie"
          />
        ) : (
          <BookmarkButton item={item} favorited={favoritedTvs} mediaType="tv" />
        )}

        {/* <div className="opacity-0 group-hover:opacity-100 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-200 ease-in-out">
          <PlayButton videoId={item.id} mediaType={mediaType} />
        </div> */}
      </div>

      <div className="mt-2">
        <div className="text-[11px] font-light text-white/75 flex items-center space-x-[6px] md:text-[13px]">
          <p>
            {item?.release_date?.slice(0, 4) ||
              item?.first_air_date?.slice(0, 4) ||
              "NA"}
          </p>
          <span>•</span>
          <div className="flex items-center space-x-1">
            {mediaType === "movie" ? (
              <img
                src={movieIcon}
                className="w-3 h-3"
                alt="movie icon"
              />
            ) : (
              <img
                src={tvIcon}
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
          <h3
            className="text-[14px] font-medium mt-1 md:text-[18px] md:mt-[5px] cursor-pointer"
            onClick={() => {
              setSearchInput("");
            }}
          >
            {item.title || item.name || "NA"}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default CollectionCard;
