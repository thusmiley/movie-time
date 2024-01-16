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
    if (!favorited?.includes(movie)) {
      const updatedBookmark = [...favorited, movie];
      setFavorited(updatedBookmark);
      localStorage.setItem("bookmarked", JSON.stringify(updatedBookmark));
    } else {
      const updatedBookmark = favorited?.filter((item) => item.title !== movie.title);
      setFavorited(updatedBookmark);
      localStorage.setItem("bookmarked", JSON.stringify(updatedBookmark));
    }
  };

  const contextValue = { favorited, handleBookmarkClick };

  return <BookmarkContext.Provider value={contextValue}>{children}</BookmarkContext.Provider>;
}
