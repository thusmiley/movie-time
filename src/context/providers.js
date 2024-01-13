"use client";
import { createContext, useState } from "react";

const BookmarkContext = createContext();

const Bookmark = (props) => {
  const [favorited, setFavorited] = useState(() => {
    if (typeof window !== undefined) {
      return localStorage.getItem("bookmarked");
    } else {
      return [];
    }
  });

  const toggleBookmark = (bookmark) => {
    setFavorited((prevState) => ({ [bookmark]: !prevState[bookmark] }));
  };

  return <BookmarkContext.Provider value={{ favorited, toggleBookmark }}>{props.children}</BookmarkContext.Provider>;
};

export { BookmarkContext, Bookmark };
