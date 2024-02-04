"use client";
import Search from "@/components/Search";
import "dotenv/config";
import { options } from "@/utils";
import { useState, useEffect, useContext } from "react";
import SearchResults from "@/components/SearchResults";
import Collection from "@/components/Collection";
import HeroSlider from "@/components/HeroSlider";
import { useBookmarkContext } from "@/context/BookmarkContext";

const TvSeries = () => {
  const { searchInput } = useBookmarkContext();
  const [filteredData, setFilteredData] = useState();
  const [page, setPage] = useState(1);
  const [isMovie, setIsMovie] = useState(false);

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
      <Search isMovie={isMovie} />
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
            limit={10}
            title="Airing Today"
            list="airing_today"
            mediaType="tv"
          />
          <Collection
            isMovie={false}
            limit={10}
            title="Top Rated"
            list="top_rated"
            mediaType="tv"
          />
          <Collection
            isMovie={false}
            limit={10}
            title="Popular"
            list="popular"
            mediaType="tv"
          />
          <Collection
            isMovie={false}
            limit={10}
            title="On The Air"
            list="on_the_air"
            mediaType="tv"
          />
        </div>
      ) : (
        <SearchResults
          filteredData={filteredData}
          isMovie={false}
          totalPages={filteredData?.total_pages}
          page={page}
          setPage={setPage}
        />
      )}
    </main>
  );
};

export default TvSeries;
