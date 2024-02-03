"use client";
import { useState, useEffect } from "react";
import Search from "@/components/Search";
import Card from "@/components/Card";
import { useBookmarkContext } from "@/context/BookmarkContext";
import SearchResults from "@/components/SearchResults";

const Bookmarked = () => {
  const { favoritedMovies, favoritedTvs } = useBookmarkContext();
  //   const [searchInput, setSearchInput] = useState("");

  //   let numMovies = 0;
  //   let numTvs = 0;
  //   const checkNumofShows = () => {
  //     for (let item of favorited) {
  //       if (
  //         item.genre_ids.includes("28") ||
  //         item.genre_ids.includes("12") ||
  //         item.genre_ids.includes("35") ||
  //         item.genre_ids.includes("16") ||
  //         item.genre_ids.includes("99") ||
  //         item.genre_ids.includes("80") ||
  //         item.genre_ids.includes("18") ||
  //         item.genre_ids.includes("10751") ||
  //         item.genre_ids.includes("14") ||
  //         item.genre_ids.includes("36") ||
  //         item.genre_ids.includes("27") ||
  //         item.genre_ids.includes("10402") ||
  //         item.genre_ids.includes("9648") ||
  //         item.genre_ids.includes("10749") ||
  //         item.genre_ids.includes("878") ||
  //         item.genre_ids.includes("10770") ||
  //         item.genre_ids.includes("53") ||
  //         item.genre_ids.includes("10752") ||
  //         item.genre_ids.includes("37")
  //       ) {
  //         numMovies++;
  //       } else if (
  //         item.genre_ids.includes("10759") ||
  //         item.genre_ids.includes("16") ||
  //         item.genre_ids.includes("35") ||
  //         item.genre_ids.includes("80") ||
  //         item.genre_ids.includes("99") ||
  //         item.genre_ids.includes("18") ||
  //         item.genre_ids.includes("10751") ||
  //         item.genre_ids.includes("10762") ||
  //         item.genre_ids.includes("9648") ||
  //         item.genre_ids.includes("10763") ||
  //         item.genre_ids.includes("10764") ||
  //         item.genre_ids.includes("10765") ||
  //         item.genre_ids.includes("10766") ||
  //         item.genre_ids.includes("10767") ||
  //         item.genre_ids.includes("10768") ||
  //         item.genre_ids.includes("37")
  //       ) {
  //         numTvs++;
  //       }
  //     }
  //   };
  //   checkNumofShows();

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
                  <Card key={index} item={obj} showMovies={true} />
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
                  <Card key={index} item={item} showMovies={false} />
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
