"use client";
import Recommended from "@/components/Recommended";
import Search from "@/components/Search";
import Trending from "@/components/Trending";
import { useState, useEffect, useContext } from "react";
import data from "../utils/data";
import SearchResults from "@/components/SearchResults";
import { BookmarkContext } from "@/context/providers";

export default function Home({ props }) {
  const [searchInput, setSearchInput] = useState("");
  const { favorited } = props;
  const context = useContext(BookmarkContext)

  const filterAllMovies = data.filter((movie) => {
    if (searchInput === "") {
      return movie;
    } else {
      return movie.title.toLowerCase().includes(searchInput);
    }
  });

  return (
    <main className="min-h-screen mb-[60px]">
      <Search category={"Search for movies or TV series"} setSearchInput={setSearchInput} />
      {searchInput === "" ? (
        <div>
          <Trending  />
          <Recommended />
        </div>
      ) : (
        <SearchResults filteredData={filterAllMovies} searchInput={searchInput} />
      )}
    </main>
  );
}
