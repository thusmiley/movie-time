"use client";
import Search from "@/components/Search";
import "dotenv/config";
import { options } from "@/utils";
import Card from "@/components/Card";
import { useState, useEffect, useContext } from "react";
import SearchResults from "@/components/SearchResults";
import Recommended from "@/components/Recommended";

const TvSeries = () => {
  const [showMovies, setShowMovies] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState();
    const [page, setPage] = useState(1);
    
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
          <div className="px-4 overflow-hidden md:px-[25px] xl:ml-[164px] xl:pl-0 xl:pr-[36px]">
            <h2 className="cat-heading font-light">TV Series</h2>
          </div>
          <Recommended />
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
