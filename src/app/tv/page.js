"use client";
import Search from "@/components/Search";
import SearchResults from "@/components/SearchResults";
import Collection from "@/components/Collection";
import HeroSlider from "@/components/HeroSlider";
import { useBookmarkContext } from "@/context/BookmarkContext";
import AllMoviesTvsTemplate from "@/components/AllMoviesTvsTemplate";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

const TvSeries = () => {
  const {
    searchInput,
    mediaType,
    setMediaType,
    filteredData,
    setFilteredData,
    page,
    setPage,
  } = useBookmarkContext();

  return (
    <main className="min-h-screen mb-[60px]">
      <Search mediaType='tv' />
      {searchInput === "" ? (
          <AllMoviesTvsTemplate
            mediaType="tv"
          />
      ) : (
        <SearchResults
          filteredData={filteredData}
          mediaType='tv'
          totalPages={filteredData?.total_pages}
          page={page}
          setPage={setPage}
        />
      )}
    </main>
  );
};

export default TvSeries;
