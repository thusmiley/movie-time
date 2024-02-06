"use client";
import Search from "@/components/Search";
import SearchResults from "@/components/SearchResults";
import { useBookmarkContext } from "@/context/BookmarkContext";
import AllMoviesTvsTemplate from "@/components/AllMoviesTvsTemplate";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

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
        filteredData ? (
          <AllMoviesTvsTemplate mediaType="movie" />
        ) : (
          <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>
        )
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
