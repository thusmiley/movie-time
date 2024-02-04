"use client";
import { createContext, useContext, useEffect, useState } from "react";

const BookmarkContext = createContext();

export function useBookmarkContext() {
  return useContext(BookmarkContext);
}

export function BookmarkProvider({ children }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.search.value);
    e.target.search.value = "";
  };

  const resetSearch = () => {
    setSearchInput("");
  };

  const [favoritedMovies, setFavoritedMovies] = useState(() => {
    localStorage.clear();
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("bookmarkedMovies") !== null
    ) {
      return JSON.parse(localStorage.getItem("bookmarkedMovies"));
    } else {
      return [];
    }
  });

  const [favoritedTvs, setFavoritedTvs] = useState(() => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("bookmarkedTvs") !== null
    ) {
      return JSON.parse(localStorage.getItem("bookmarkedTvs"));
    } else {
      return [];
    }
  });

  const handleMoviesBookmarkClick = (item) => {
    if (!favoritedMovies?.includes(item)) {
      const updatedBookmark = [...favoritedMovies, item];
      setFavoritedMovies(updatedBookmark);
      localStorage.setItem("bookmarkedMovies", JSON.stringify(updatedBookmark));
    } else {
      const updatedBookmark = favoritedMovies?.filter(
        (obj) => obj.title !== item.title || obj.name !== item.name
      );
      setFavoritedMovies(updatedBookmark);
      localStorage.setItem("bookmarkedMovies", JSON.stringify(updatedBookmark));
    }
  };

  const handleTvsBookmarkClick = (item) => {
    if (!favoritedTvs?.includes(item)) {
      const updatedBookmark = [...favoritedTvs, item];
      setFavoritedTvs(updatedBookmark);
      localStorage.setItem("bookmarkedTvs", JSON.stringify(updatedBookmark));
    } else {
      const updatedBookmark = favoritedTvs?.filter(
        (obj) => obj.title !== item.title || obj.name !== item.name
      );
      setFavoritedTvs(updatedBookmark);
      localStorage.setItem("bookmarkedTvs", JSON.stringify(updatedBookmark));
    }
  };

  const contextValue = {
    favoritedMovies,
    handleMoviesBookmarkClick,
    favoritedTvs,
    handleTvsBookmarkClick,
    searchInput,
    setSearchInput,
    handleSearch,
    resetSearch,
  };

  return (
    <BookmarkContext.Provider value={contextValue}>
      {children}
    </BookmarkContext.Provider>
  );
}
