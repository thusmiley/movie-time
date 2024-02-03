"use client";
import { useState, useEffect } from "react";
import Search from "@/components/Search";
import { useBookmarkContext } from "@/context/BookmarkContext";
import SearchResults from "@/components/SearchResults";
import CollectionCard from "@/components/CollectionCard";

const Bookmarked = () => {
  const { favoritedMovies, favoritedTvs } = useBookmarkContext();

  return (
    <main className="min-h-screen mb-[60px]">
      <div>
        {favoritedMovies.length === 0 || favoritedTvs.length === 0 ? (
          <section className="px-4 mt-6 overflow-hidden md:px-[25px] xl:ml-[164px] xl:pl-0 xl:pr-[36px] xl:mt-10">
            <h2 className="cat-heading font-light">
              Sorry, there are currently no bookmaked movies or TV series.
            </h2>
          </section>
        ) : (
          <div className="mt-6 xl:mt-10">
            <section
              className={`${
                favoritedMovies.length === 0 ? "hidden" : "block"
              } px-4 overflow-hidden md:px-[25px] xl:ml-[164px] xl:pl-0 xl:pr-[36px]`}
            >
              <h2 className="cat-heading font-light">Bookmarked Movies</h2>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-x-[29px] md:gap-y-6 xl:grid-cols-4 xl:gap-x-[40px] xl:gap-y-8">
                {favoritedMovies?.map((obj, index) => (
                  <CollectionCard key={index} item={obj} isMovie={true} />
                ))}
              </div>
            </section>

            <section
              className={`${
                favoritedTvs.length === 0 ? "hidden" : "block"
              } px-4 mt-6  overflow-hidden md:px-[25px] xl:ml-[164px] xl:pl-0 xl:pr-[36px] xl:mt-10`}
            >
              <h2 className="cat-heading font-light">Bookmarked TV Series</h2>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-x-[29px] md:gap-y-6 xl:grid-cols-4 xl:gap-x-[40px] xl:gap-y-8">
                {favoritedTvs?.map((item, index) => (
                  <CollectionCard key={index} item={item} isMovie={false} />
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
};

export default Bookmarked;
