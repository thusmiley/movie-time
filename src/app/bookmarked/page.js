"use client";
import { useState, useEffect } from "react";
import Search from "@/components/Search";
import data from "../../utils/data";
import MovieCard from "@/components/MovieCard";
import { useBookmarkContext } from "@/context/BookmarkContext";
import SearchResults from "@/components/SearchResults";

const Bookmarked = () => {
  const { favorited } = useBookmarkContext();
  const [searchInput, setSearchInput] = useState("");

  const filterBookmarks = favorited.filter((movie) => {
    if (searchInput === "") {
      return movie;
    } else {
      return movie.title.toLowerCase().includes(searchInput);
    }
  });

  let numMovies = 0;
  let numTvs = 0;
  const checkNumofShows = () => {
    for (let item of favorited) {
      if (item.category === "Movie") {
        numMovies++;
      }
      if (item.category === "TV Series") {
        numTvs++;
      }
    }
  };
  checkNumofShows();

  return (
    <main className="min-h-screen mb-[60px]">
      <Search category={"Search for bookmarked shows"} setSearchInput={setSearchInput} />

      {searchInput === "" ? (
        <div>
          {favorited.length === 0 ? (
            <section className="px-4 mt-6 overflow-hidden md:px-[25px] xl:ml-[164px] xl:pl-0 xl:pr-[36px] xl:mt-10">
              <h2 className="cat-heading font-light">Sorry, there are currently no bookmaked movies or TV series.</h2>
            </section>
          ) : (
            <div>
              <section className={`${numMovies === 0 ? "hidden" : "block"} px-4 overflow-hidden md:px-[25px] xl:ml-[164px] xl:pl-0 xl:pr-[36px]`}>
                <h2 className="cat-heading font-light">Bookmarked Movies</h2>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-x-[29px] md:gap-y-6 xl:grid-cols-4 xl:gap-x-[40px] xl:gap-y-8">
                  {favorited?.map((movie, index) => movie.category === "Movie" && <MovieCard key={index} movie={movie} />)}
                </div>
              </section>

              <section className={`${numTvs === 0 ? "hidden" : "block"} px-4 mt-6  overflow-hidden md:px-[25px] xl:ml-[164px] xl:pl-0 xl:pr-[36px] xl:mt-10`}>
                <h2 className="cat-heading font-light">Bookmarked TV Series</h2>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-x-[29px] md:gap-y-6 xl:grid-cols-4 xl:gap-x-[40px] xl:gap-y-8">
                  {favorited?.map((movie, index) => movie.category === "TV Series" && <MovieCard key={index} movie={movie} />)}
                </div>
              </section>
            </div>
          )}
        </div>
      ) : (
        <SearchResults filteredData={filterBookmarks} searchInput={searchInput} />
      )}
    </main>
  );
};

export default Bookmarked;
