"use client";
import Collection from "@/components/Collection";
import Search from "@/components/Search";
import HeroSlider from "@/components/HeroSlider";
import SearchResults from "@/components/SearchResults";
import { useBookmarkContext } from "@/context/BookmarkContext";

export default function Home() {
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
        mediaType === "movie" ? (
          <div>
            <HeroSlider
              mediaType="movie"
              setMediaType={setMediaType}
              title="Trending"
              isHome={true}
              list="trending"
            />
            <Collection
              mediaType="movie"
              title="Recommended movies for you"
              page={page}
              limit={20}
              list="upcoming"
              href="/movie"
            />
          </div>
        ) : (
          <div>
            <HeroSlider
              mediaType="tv"
              setMediaType={setMediaType}
              title="Trending"
              isHome={true}
              list="trending"
            />
            <Collection
              mediaType="tv"
              setMediaType={setMediaType}
              title="Recommended TV series for you"
              page={page}
              limit={20}
              list="on_the_air"
              href="/tv"
            />
          </div>
        )
      ) : (
        <SearchResults
          filteredData={filteredData}
          mediaType={mediaType}
          totalPages={filteredData.total_pages}
          page={page}
          setPage={setPage}
        />
      )}
    </main>
  );
}
