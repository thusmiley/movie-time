import Image from "next/image";
import movieIcon from "../../public/images/icon-movie.svg";
import tvIcon from "../../public/images/icon-tv.svg";
import PlayButton from "./PlayButton";
import BookmarkButton from "./BookmarkButton";

const MovieCard = ({ movie }) => {
  return (
    <div className="">
      <div className="relative group cursor-pointer">
        <picture>
          <source media="(max-width: 768px)" srcSet={movie.thumbnail.regular?.small} />
          <source media="(max-width: 1024px)" srcSet={movie.thumbnail.regular?.medium} />
          <source media="(min-width: 1025px)" srcSet={movie.thumbnail.regular?.large} />
          <img src={movie.thumbnail.regular?.small} alt={`${movie.title} thumbnail`} className="w-full h-full rounded-[8px] object-cover"/>
        </picture>
        <span className="bookmarkBtn bg-almostBlack/50 rounded-full w-8 h-8 grid place-content-center absolute top-2 right-2 hover:bg-white cursor-pointer transition-all duration-200 ease-in-out md:top-4 md:right-4">
          <BookmarkButton />
        </span>

        <div className="opacity-0 group-hover:opacity-100 absolute cursor-pointer top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-opacity duration-200 ease-in-out">
          <PlayButton />
        </div>
      </div>

      <div className="mt-2">
        <div className="text-[11px] font-light text-white/75 flex items-center space-x-[6px] md:text-[13px]">
          <p>{movie.year}</p>
          <span>•</span>
          <div className="flex items-center space-x-1">
            {movie.category === "Movie" && <Image src={movieIcon} width={12} height={12} className="w-3 h-auto" alt="" />}
            {movie.category === "TV Series" && <Image src={tvIcon} width={12} height={12} className="w-3 h-auto" alt="" />}
            <p>{movie.category}</p>
          </div>
          <span>•</span>
          <p>{movie.rating}</p>
        </div>
        <h3 className="text-[14px] font-medium mt-1 md:text-[18px] md:mt-[5px]">{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
