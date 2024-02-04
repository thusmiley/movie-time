"use client";
import Collection from "@/components/Collection";
import Search from "@/components/Search";
import HeroSlider from "@/components/HeroSlider";
import { useState, useEffect, useContext } from "react";
import "dotenv/config";
import { options } from "@/utils";
import SearchResults from "@/components/SearchResults";
import { useBookmarkContext } from "@/context/BookmarkContext";

export default function Home() {
  const [filteredData, setFilteredData] = useState();
  const [page, setPage] = useState(1);
  const [isMovie, setIsMovie] = useState(true);
  const { searchInput } = useBookmarkContext();

  useEffect(() => {
    isMovie
      ? fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=${page}`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            setFilteredData(response);
          })
          .catch((err) => console.error(err))
      : fetch(
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
        isMovie ? (
          <div>
            <HeroSlider
              isMovie={isMovie}
              setIsMovie={setIsMovie}
              title="Trending"
              isHome={true}
              list="trending"
              mediaType="movie"
            />
            <Collection
              isMovie={true}
              title="Recommended movies for you"
              page={page}
              limit={20}
              list="upcoming"
              mediaType="movie"
              href="/movies"
            />
          </div>
        ) : (
          <div>
            <HeroSlider
              isMovie={false}
              setIsMovie={setIsMovie}
              title="Trending"
              isHome={true}
              list="trending"
              mediaType="tv"
            />
            <Collection
              isMovie={false}
              title="Recommended TV series for you"
              page={page}
              limit={20}
              list="on_the_air"
              mediaType="tv"
              href="/tvs"
            />
          </div>
        )
      ) : (
        <SearchResults
          filteredData={filteredData}
          isMovie={isMovie}
          totalPages={filteredData.total_pages}
          page={page}
          setPage={setPage}
        />
      )}
    </main>
  );
}
