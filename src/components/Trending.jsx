"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import TrendingCard from "./TrendingCard";
import { useState, useEffect } from "react";
import "dotenv/config";
import { options } from "@/utils";

const Trending = ({ showMovies, setShowMovies }) => {
  const [data, setData] = useState();

  useEffect(() => {
    showMovies
      ? fetch(
          `https://api.themoviedb.org/3/trending/movie/week?&language=en-US&sort_by=popularity.desc&page=1`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            setData(response);
          })
          .catch((err) => console.error(err))
      : fetch(
          `https://api.themoviedb.org/3/trending/tv/week?&language=en-US&sort_by=popularity.desc&page=1`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            setData(response);
          })
          .catch((err) => console.error(err));
  }, [showMovies]);

  return (
    <section className="pl-4 mt-2 relative z-0 overflow-hidden md:pl-[25px] xl:ml-[164px] xl:pl-0">
      <h2 className="cat-heading font-light flex items-center">
        Trending
        <span className="text-[10px] font-normal flex text-white/75 items-center ml-4  divide-x-[2px] divide-white/50 shadow-lg border-[2px] border-white/50 rounded-md overflow-hidden md:ml-6">
          <button
            className={`${
              showMovies ? "bg-[#e0e0e014] text-green-600" : "bg-transparent"
            } py-[1px] px-2 cursor-pointer transition-all duration-150 ease-in-out uppercase hover:bg-[#e0e0e014]`}
            onClick={() => setShowMovies(true)}
          >
            Movie
          </button>
          <button
            className={`${
              !showMovies ? "bg-[#e0e0e014] text-green-600" : "bg-transparent"
            } py-[1px] px-2 cursor-pointer transition-all duration-150 ease-in-out uppercase hover:bg-[#e0e0e014]`}
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
        // autoplay={{
        //   delay: 2500,
        // }}
        // modules={[Autoplay]}
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
