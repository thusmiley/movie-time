"use client";
import Search from "@/components/Search";
import SearchResults from "@/components/SearchResults";
import Collection from "@/components/Collection";
import HeroSlider from "@/components/HeroSlider";
import { useBookmarkContext } from "@/context/BookmarkContext";

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
      <Search mediaType="tv" />
      {searchInput === "" ? (
        <div>
          <HeroSlider
            setMediaType={setMediaType}
            title="Trending TV Series"
            isHome={false}
            list="trending"
            mediaType="tv"
          />
          <Collection
            limit={10}
            title="Airing Today"
            list="airing_today"
            mediaType="tv"
            href="/tv/airing_today"
          />
          <Collection
            limit={10}
            title="Top Rated"
            list="top_rated"
            mediaType="tv"
            href="/tv/top_rated"
          />
          <Collection
            limit={10}
            title="Popular"
            list="popular"
            mediaType="tv"
            href="/tv/popular"
          />
          <Collection
            limit={10}
            title="On The Air"
            list="on_the_air"
            mediaType="tv"
            href="/tv/on_the_air"
          />
        </div>
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

export default TvSeries;
