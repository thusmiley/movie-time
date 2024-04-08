"use client";
import Image from "next/image";
import movieIcon from "../../public/images/icon-movie.svg";
import tvIcon from "../../public/images/icon-tv.svg";
// import PlayButton from "./PlayButton";
import BookmarkButton from "./BookmarkButton";
import { useBookmarkContext } from "@/context/BookmarkContext";
import { shimmer, toBase64 } from "@/utils";
import { useRouter } from "next/navigation";

const HeroSliderCard = ({ item, mediaType }) => {
  const router = useRouter();
  const {
    favoritedMovies,
    handleMoviesBookmarkClick,
    favoritedTvs,
    handleTvsBookmarkClick,
  } = useBookmarkContext();

  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-[8px]"
      onClick={() => router.push(`/${mediaType}/${item.id}`)}
    >
      <Image
        src={`${
          item.backdrop_path
            ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
            : `https://image.tmdb.org/t/p/original${item.poster_path}`
        } `}
        alt={`${item.title || item.name || ""}`}
        width={1653}
        height={929}
        className="w-full h-full rounded-[8px] object-cover group-hover:scale-105 transition-all duration-200 ease-in"
        placeholder="blur"
        blurDataURL={`${toBase64(shimmer(240, 140))}`}
        unoptimized
        loading="lazy"
      />
      <span
        className="bookmarkBtn bg-almostBlack/50 rounded-full w-8 h-8 grid place-content-center absolute top-2 right-2 hover:bg-white cursor-pointer transition-all duration-200 ease-in-out md:top-4 md:right-6"
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
      </span>

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
        <h3 className="text-[15px] font-medium mt-1 md:text-[24px]">
          {item.title || item.name || "NA"}
        </h3>
      </div>
      {/* <div className="opacity-0 group-hover:opacity-100 absolute cursor-pointer top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-200 ease-in-out z-50">
          <PlayButton videoId={item.id} mediaType={mediaType} />
        </div> */}
    </div>
  );
};

export default HeroSliderCard;
