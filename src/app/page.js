"use client";
import Recommended from "@/components/Recommended";
import Search from "@/components/Search";
import Trending from "@/components/Trending";
import { useState, useEffect, useContext } from "react";
import data from "../utils/data";
import SearchResults from "@/components/SearchResults";

export default function Home() {
  const [showMovies, setShowMovies] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [allMovies, setAllMovies] = useState();

  const filterAllMovies = data.filter((movie) => {
    if (searchInput === "") {
      return movie;
    } else {
      return movie.title.toLowerCase().includes(searchInput);
    }
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_KEY}`,
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setAllMovies(response);
        console.log(allMovies);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="min-h-screen mb-[60px]">
      <Search
        category={`Search ${showMovies ? "movies" : "TV series"}`}
        setSearchInput={setSearchInput}
        showMovies={showMovies}
      />
      {searchInput === "" ? (
        showMovies ? (
          <div>
            <Trending
              endpoint="https://api.themoviedb.org/3/api/movie/trending/1"
              href="/movie/trending/1"
              tag="Movie"
              mediaType="movie"
              showMovies={showMovies}
              setShowMovies={setShowMovies}
            />
            <Recommended />
          </div>
        ) : (
          <div>
            <Trending
              endpoint="/api/tv/trending/1"
              href="/tv/trending/1"
              tag="TV Series"
              mediaType="tv"
              showMovies={showMovies}
              setShowMovies={setShowMovies}
            />
            <Recommended />
          </div>
        )
      ) : (
        <SearchResults
          filteredData={filterAllMovies}
          searchInput={searchInput}
        />
      )}
    </main>
  );
}
