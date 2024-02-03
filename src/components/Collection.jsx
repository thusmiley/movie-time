"use client";
import { useState, useEffect } from "react";
import "dotenv/config";
import { options } from "@/utils";
import CollectionCard from "./CollectionCard";

const Collection = ({ isMovie, title, page, list, mediaType, limit }) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${mediaType}/${list}?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.error(err));
  }, [isMovie]);

  return (
    <section className="px-4 mt-6 overflow-hidden md:px-[25px] xl:ml-[164px] xl:pl-0 xl:pr-[36px] xl:mt-10">
      <h2 className="cat-heading font-light">{title}</h2>

      <div className="grid grid-cols-2 gap-4 row-span-1 md:grid-cols-3 md:gap-x-[29px] md:gap-y-6 xl:grid-cols-4 xl:gap-x-[40px] xl:gap-y-8">
        {data?.results?.slice(0, limit).map((item, index) => (
          <CollectionCard key={index} item={item} isMovie={isMovie} />
        ))}
      </div>
    </section>
  );
};

export default Collection;
