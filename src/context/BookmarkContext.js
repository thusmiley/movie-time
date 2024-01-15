"use client";
import { createContext, useContext, useEffect, useState } from "react";

const BookmarkContext = createContext();

export function useBookmarkContext() {
  return useContext(BookmarkContext);
}

export function BookmarkProvider({ children }) {
  const [favorited, setFavorited] = useState(() => {
    if (typeof window !== "undefined" && localStorage.getItem("bookmarked") !== null) {
      return JSON.parse(localStorage.getItem("bookmarked"));
    } else {
      return [];
    }
  });

  const handleBookmarkClick = (movie) => {
    if (movie.isBookmarked === false && !favorited?.includes(movie)) {
      const updatedBookmark = [...favorited, movie];
      setFavorited(updatedBookmark);
      localStorage.setItem("bookmarked", JSON.stringify(updatedBookmark));
      movie.isBookmarked = true;
    } else if (movie.isBookmarked === true && favorited?.length > 0) {
      const updatedBookmark = favorited?.filter((item) => item.title !== movie.title);
      setFavorited(updatedBookmark);
      localStorage.setItem("bookmarked", JSON.stringify(updatedBookmark));
      movie.isBookmarked = false;
    }
  };

  const contextValue = { favorited, handleBookmarkClick };

  return <BookmarkContext.Provider value={contextValue}>{children}</BookmarkContext.Provider>;
}
