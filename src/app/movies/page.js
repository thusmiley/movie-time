"use client";
import Search from "@/components/Search";
import "dotenv/config";
import { options } from "@/utils";
import Card from "@/components/CollectionCard";
import { useState, useEffect, useContext } from "react";
import SearchResults from "@/components/SearchResults";
import Collection from "@/components/Collection";
import HeroSlider from "@/components/HeroSlider";

const Movies = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState();
  const [page, setPage] = useState(1);
  const [isMovie, setIsMovie] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=${page}`,
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
      <Search category={"Search for movies"} setSearchInput={setSearchInput} />
      {searchInput === "" ? (
        <div>
          <HeroSlider
            isMovie={true}
            setIsMovie={setIsMovie}
            title="Trending Movies"
            isHome={false}
            list="trending"
            mediaType="movie"
          />
          <Collection
            isMovie={true}
            limit={10}
            title="Now Playing"
            list="now_playing"
            mediaType="movie"
          />
          <Collection
            limit={10}
            isMovie={true}
            title="Popular"
            list="popular"
            mediaType="movie"
          />
          <Collection
            limit={10}
            isMovie={true}
            title="Top Rated"
            list="top_rated"
            mediaType="movie"
          />
        </div>
      ) : (
        <SearchResults
          filteredData={filteredData}
          searchInput={searchInput}
          isMovie={true}
          totalPages={filteredData.total_pages}
          page={page}
          setPage={setPage}
        />
      )}
    </main>
  );
};

export default Movies;
