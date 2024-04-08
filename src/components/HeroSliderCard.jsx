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
    <div className="relative group overflow-hidden rounded-[8px]">
      <Image
        src={`${
          item.backdrop_path
            ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
            : `https://image.tmdb.org/t/p/original${item.poster_path}`
        } `}
        alt={`${item.title || item.name || ""}`}
        width={1653}
        height={929}
        className="w-full h-full cursor-pointer rounded-[8px] object-cover group-hover:scale-105 transition-all duration-200 ease-in"
        placeholder="blur"
        blurDataURL={`${toBase64(shimmer(240, 140))}`}
        unoptimized
        loading="lazy"
        onClick={() => router.push(`/${mediaType}/${item.id}`)}
      />
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
        onClick={() => router.push(`/${mediaType}/${item.id}`)}
        <h3 className="text-[15px] font-medium mt-1 cursor-pointer md:text-[24px]">
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
