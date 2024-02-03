"use client";
import { useState, useEffect } from "react";
import "dotenv/config";
import { options } from "@/utils";
import Card from "./Card";

const Recommended = ({ showMovies }) => {
  const [data, setData] = useState();

  useEffect(() => {
    showMovies
      ? fetch(
          `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            setData(response);
          })
          .catch((err) => console.error(err))
      : fetch(
          `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            setData(response);
          })
          .catch((err) => console.error(err));
  }, [showMovies]);

  return (
    <section className="px-4 mt-6 overflow-hidden md:px-[25px] xl:ml-[164px] xl:pl-0 xl:pr-[36px] xl:mt-10">
      <h2 className="cat-heading font-light">Recommended for you</h2>

      <div className="grid grid-cols-2 gap-4 row-span-1 md:grid-cols-3 md:gap-x-[29px] md:gap-y-6 xl:grid-cols-4 xl:gap-x-[40px] xl:gap-y-8">
        {data?.results?.map((item, index) => (
            <Card key={index} item={item} showMovies={showMovies} />
          ))}
      </div>
    </section>
  );
};

export default Recommended;
