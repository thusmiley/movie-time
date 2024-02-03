"use client";
import Search from "@/components/Search";
import "dotenv/config";
import { options } from "@/utils";
import Card from "@/components/Card";
import { useState, useEffect, useContext } from "react";
import SearchResults from "@/components/SearchResults";
import Collection from "@/components/Collection";
import HeroSlider from "@/components/HeroSlider";

const TvSeries = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState();
  const [page, setPage] = useState(1);
  const [isMovie, setIsMovie] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/tv?query=${searchInput}&include_adult=false&language=en-US&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setFilteredData(response);
      })
      .catch((err) => console.error(err));
  }, [searchInput, page]);

  return (
    <main className="min-h-screen mb-[60px]">
      <Search
        category={"Search for TV series"}
        setSearchInput={setSearchInput}
      />
      {searchInput === "" ? (
        <div>
          <HeroSlider
            isMovie={false}
            setIsMovie={setIsMovie}
            title="Trending TV Series"
            isHome={false}
            list="trending"
            mediaType="tv"
          />
          <Collection
            isMovie={false}
            title="Airing Today"
            list="airing_today"
            mediaType="tv"
          />
          <Collection
            isMovie={false}
            title="Top Rated"
            list="top_rated"
            mediaType="tv"
          />
          <Collection
            isMovie={false}
            title="Popular"
            list="popular"
            mediaType="tv"
          />
          <Collection
            isMovie={false}
            title="On The Air"
            list="on_the_air"
            mediaType="tv"
          />
        </div>
      ) : (
        <SearchResults
          filteredData={filterTvseries}
          searchInput={searchInput}
        />
      )}
    </main>
  );
};

export default TvSeries;
