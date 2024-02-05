import Search from "@/components/Search";
import { useBookmarkContext } from "@/context/BookmarkContext";
import CollectionPageTemplate from "@/components/CollectionPageTemplate";

const page = ({ params }) => {
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
          <CollectionPageTemplate
            mediaType="movie"
            title="Now Playing Movies"
            page={page}
            list={params.id}
          />
        </div>
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
};

export default page;
