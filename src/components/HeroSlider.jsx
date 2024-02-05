"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState, useEffect } from "react";
import "dotenv/config";
import { options } from "@/utils";
import HeroSliderCard from "./HeroSliderCard";

const HeroSlider = ({ mediaType, setMediaType, title, isHome, list }) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${list}/${mediaType}/week?&language=en-US&sort_by=popularity.desc&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  }, [mediaType]);

  return (
    <section className="pl-4 mt-2 relative z-0 overflow-hidden md:pl-[25px] xl:ml-[164px] xl:pl-0">
      <h2 className="cat-heading font-light flex items-center mb-6 md:mb-[25px]">
        {title}
        {isHome && (
          <span className="text-[10px] font-normal flex text-white/75 items-center ml-4  divide-x-[2px] divide-white/50 shadow-lg border-[2px] border-white/50 rounded-md overflow-hidden md:ml-6">
            <button
              className={`${
                mediaType === "movie"
                  ? "bg-[#e0e0e014] text-green-600"
                  : "bg-transparent"
              } py-[1px] px-2 cursor-pointer transition-all duration-150 ease-in-out uppercase hover:bg-[#e0e0e014]`}
              onClick={() => setMediaType("movie")}
            >
              Movie
            </button>
            <button
              className={`${
                mediaType === "tv"
                  ? "bg-[#e0e0e014] text-green-600"
                  : "bg-transparent"
              } py-[1px] px-2 cursor-pointer transition-all duration-150 ease-in-out uppercase hover:bg-[#e0e0e014]`}
              onClick={() => setMediaType("tv")}
            >
              TV Series
            </button>
          </span>
        )}
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
        {data?.results?.slice(0, 10).map((item) => (
          <SwiperSlide
            key={item.id}
            className="w-[240px] h-[140px] md:w-[470px] md:h-[230px]"
          >
            <HeroSliderCard item={item} mediaType={mediaType} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
