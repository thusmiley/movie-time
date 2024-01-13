import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import TrendingCard from "./TrendingCard";
import data from "../utils/data";

const Trending = () => {
  return (
    <section className="pl-4 mt-2 overflow-hidden md:pl-[25px] xl:ml-[164px] xl:pl-0">
      <h2 className="cat-heading font-light">Trending</h2>

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
        {data.map(
          (movie, index) =>
            movie.isTrending === true && (
              <SwiperSlide key={index} className="w-[240px] h-[140px] md:w-[470px] md:h-[230px]">
                <TrendingCard movie={movie} />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </section>
  );
};

export default Trending;
