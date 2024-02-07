"use client";
import Search from "@/components/Search";
import SearchResults from "@/components/SearchResults";
import { useBookmarkContext } from "@/context/BookmarkContext";
import AllMoviesTvsTemplate from "@/components/AllMoviesTvsTemplate";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

const Movies = () => {
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
      <Search mediaType={mediaType} />
      {searchInput === "" ? (
        <AllMoviesTvsTemplate mediaType="movie" />
      ) : (
        <SearchResults
          filteredData={filteredData}
          mediaType={mediaType}
          totalPages={filteredData?.total_pages}
          page={page}
          setPage={setPage}
        />
      )}
    </main>
  );
};

export default Movies;
