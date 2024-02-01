"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import TrendingCard from "./TrendingCard";
import data from "../utils/data";
import { useState, useEffect } from "react";

const Trending = ({
  endpoint,
  href,
  tag,
  mediaType,
  showMovies,
  setShowMovies,
}) => {
  const [data, setData] = useState();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_KEY}`,
    },
  };

  useEffect(() => {
    showMovies
      ? fetch(
          `https://api.themoviedb.org/3/trending/movie/week?&language=en-US&sort_by=popularity.desc&page=1`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setData(response);
          })
          .catch((err) => console.error(err))
      : fetch(
          `https://api.themoviedb.org/3/trending/tv/week?&language=en-US&sort_by=popularity.desc&page=1`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setData(response);
          })
          .catch((err) => console.error(err));
  }, []);

  console.log(data);

  return (
    <section className="pl-4 mt-2 overflow-hidden md:pl-[25px] xl:ml-[164px] xl:pl-0">
      <h2 className="cat-heading font-light flex items-center">
        Trending
        <span className="text-[11px] font-normal flex items-center ml-4 md:ml-6 md:text-[13px] divide-x-[1px] divide-black/50">
          <button
            className={`${
              showMovies ? "bg-red text-black" : ""
            } bg-white/25 py-1 rounded-l-[8px] cursor-pointer w-16 transition-all duration-200 ease-linear`}
            onClick={() => setShowMovies(true)}
          >
            Movies
          </button>
          <button
            className={`${
              !showMovies ? "bg-red text-black" : ""
            } bg-white/30 py-1 rounded-r-[8px] cursor-pointer w-16 transition-all duration-200 ease-linear`}
            onClick={() => setShowMovies(false)}
          >
            TV Series
          </button>
        </span>
      </h2>

      <Swiper
        slidesPerView={"1.4"}
        spaceBetween={16}
        breakpoints={{
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 2.6,
            spaceBetween: 40,
          },
        }}
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data?.results?.map((item) => (
          <SwiperSlide
            key={item.id}
            className="w-[240px] h-[140px] md:w-[470px] md:h-[230px]"
          >
            <TrendingCard item={item} showMovies={showMovies} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Trending;
