"use client";
import Search from "@/components/Search";
import SearchResults from "@/components/SearchResults";
import Collection from "@/components/Collection";
import HeroSlider from "@/components/HeroSlider";
import { useBookmarkContext } from "@/context/BookmarkContext";

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
      <Search mediaType="movie" />
      {searchInput === "" ? (
        <div>
          <HeroSlider
            mediaType="movie"
            setMediaType={setMediaType}
            title="Trending Movies"
            isHome={false}
            list="trending"
          />
          <Collection
            limit={10}
            title="Now Playing"
            list="now_playing"
            mediaType="movie"
            href="/movie/now_playing"
          />
          <Collection
            limit={10}
            title="Popular"
            list="popular"
            mediaType="movie"
            href="/movie/popular"
          />
          <Collection
            limit={10}
            title="Top Rated"
            list="top_rated"
            mediaType="movie"
            href="/movie/top_rated"
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

export default Movies;
