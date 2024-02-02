"use client";
import Recommended from "@/components/Recommended";
import Search from "@/components/Search";
import Trending from "@/components/Trending";
import { useState, useEffect, useContext } from "react";
import "dotenv/config";
import { options } from "@/utils/api";
import SearchResults from "@/components/SearchResults";

export default function Home() {
  const [showMovies, setShowMovies] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    showMovies
      ? fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchInput}include_adult=false&language=en-US&page=1`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            setFilteredData(response);
          })
          .catch((err) => console.error(err))
      : fetch(
          `https://api.themoviedb.org/3/search/tv?query=${searchInput}include_adult=false&language=en-US&page=1`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            setFilteredData(response);
          })
          .catch((err) => console.error(err));
  }, [searchInput]);

  return (
    <main className="min-h-screen mb-[60px]">
      <Search
        category={`Search ${showMovies ? "movies" : "TV series"}`}
        setSearchInput={setSearchInput}
      />
      {searchInput === "" ? (
        showMovies ? (
          <div>
            <Trending
              //   tag="Movie"
              //   mediaType="movie"
              showMovies={showMovies}
              setShowMovies={setShowMovies}
            />
            <Recommended showMovies={showMovies} />
          </div>
        ) : (
          <div>
            <Trending
              //   tag="TV Series"
              //   mediaType="tv"
              showMovies={showMovies}
              setShowMovies={setShowMovies}
            />
            <Recommended showMovies={showMovies} />
          </div>
        )
      ) : (
        <SearchResults filteredData={filteredData} searchInput={searchInput} />
      )}
    </main>
  );
}
