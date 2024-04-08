"use client";
import Collection from "@/components/Collection";
import Search from "@/components/Search";
import HeroSlider from "@/components/HeroSlider";
import SearchResults from "@/components/SearchResults";
import { useBookmarkContext } from "@/context/BookmarkContext";

// export const metadata = {
//   title: "Login | My Invoice App",
// };

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
              title="Now Playing"
              limit={9}
              list="now_playing"
            />
            <Collection
              mediaType="movie"
              title="Top 10 of All Time"
              limit={10}
              list="top_rated"
            />

            <Collection
              mediaType="movie"
              title="Fan Favorites"
              limit={9}
              list="popular"
            />
            <Collection
              mediaType="movie"
              title="Coming Soon To Theaters"
              limit={9}
              list="upcoming"
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
              title="Streaming"
              limit={9}
              list="on_the_air"
            />
            <Collection
              mediaType="tv"
              title="Fan Favorites"
              limit={9}
              list="top_rated"
            />
            <Collection
              mediaType="tv"
              title="Featured Today"
              limit={9}
              list="airing_today"
            />
            <Collection
              mediaType="tv"
              title="Popular"
              limit={9}
              list="popular"
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
