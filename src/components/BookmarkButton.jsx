"use client";
import { useState, useEffect } from "react";
import { useBookmarkContext } from "@/context/BookmarkContext";

const BookmarkButton = ({ item, favorited, mediaType }) => {
  const [isBookmarked, setIsBookmarked] = useState(favorited?.includes(item));
  const { handleMoviesBookmarkClick, handleTvsBookmarkClick } =
    useBookmarkContext();

  useEffect(() => {
    setIsBookmarked(
      favorited?.filter((obj) => obj.id === item.id).length !== 0
    );
  }, [item, favorited]);

  return (
    <button
      className="bookmarkBtn bg-almostBlack/50 rounded-full w-8 h-8 grid place-content-center absolute top-2 right-2 hover:bg-white cursor-pointer transition-all duration-200 ease-in-out md:top-4 md:right-4"
      onClick={() => {
        mediaType === "movie"
          ? handleMoviesBookmarkClick(item)
          : handleTvsBookmarkClick(item);
      }}
    >
      {isBookmarked ? (
        <svg
          width="12"
          height="14"
          alt=""
          className="w-3 h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
            fill="#FFF"
          />
        </svg>
      ) : (
        <svg
          width="12"
          height="14"
          className="w-3 h-auto"
          alt="bookmark"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke="#FFF"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      )}
    </button>
  );
};

export default BookmarkButton;
