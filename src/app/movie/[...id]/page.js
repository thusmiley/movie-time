"use client";
import { useState, useEffect } from "react";
import { options } from "@/utils";
import Search from "@/components/Search";
import SearchResults from "@/components/SearchResults";
import { useBookmarkContext } from "@/context/BookmarkContext";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "@mui/material/Skeleton";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import YouTube from "react-youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CollectionCard from "@/components/CollectionCard";

// export function generateMetadata({ params }, parent) {
//   return {
//     title: params.id[0],
//   };
// }

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
  const [movie, setMovie] = useState();
  const [credits, setCredits] = useState();
  const [videos, setVideos] = useState();
  const [photos, setPhotos] = useState();
  const [similar, setSimilar] = useState();

  const reRenderData = () => {
    if (!params.id) return;

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
      })
      .catch((err) => console.error(err));

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/credits?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setCredits(response);
      })
      .catch((err) => console.error(err));

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setVideos(response);
      })
      .catch((err) => console.error(err));

    fetch(`https://api.themoviedb.org/3/movie/${params.id}/images`, options)
      .then((response) => response.json())
      .then((response) => {
        setPhotos(response);
      })
      .catch((err) => console.error(err));

    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/similar?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setSimilar(response);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    reRenderData();
  }, []);

  const opts = {
    height: "auto",
    width: "100%",
    borderRadius: "8px",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <main className="min-h-screen mb-10 text-[16px] font-light max-w-[1440px] mx-auto xl:mb-20">
      <Search mediaType="movie" />
      {searchInput === "" ? (
        <section className="px-4 mt-6 overflow-hidden md:px-[25px] xl:ml-[164px] xl:pl-0 xl:pr-[36px] xl:mt-10">
          {/* poster and intro  */}
          <div className="md:flex md:justify-between md:items-start md:space-x-10">
            {/* poster  */}
            <div className="relative h-[500px] rounded-[8px] md:w-1/2">
              {!(movie?.backdrop_path && movie?.poster_path) ? (
                <Skeleton
                  variant="rounded"
                  width="100%"
                  height="100%"
                  animation="wave"
                  sx={{ borderRadius: "8px", bgcolor: "grey.800" }}
                >
                  <div className="w-full h-[500px] rounded-[8px] object-cover object-center" />
                </Skeleton>
              ) : (
                <Image
                  src={
                    `https://image.tmdb.org/t/p/original${movie?.backdrop_path}` ||
                    `https://image.tmdb.org/t/p/original${movie?.poster_path}`
                  }
                  alt={`${
                    movie?.title ? movie?.title : movie?.name ? movie?.name : ""
                  }`}
                  width={1653}
                  height={929}
                  className="w-full h-[500px] rounded-[8px] object-cover object-center"
                  unoptimized
                  loading="lazy"
                  priority={false}
                />
              )}
            </div>
            {/* intro  */}
            <div className="mt-6 md:w-1/2 md:mt-0">
              <div className="flex items-center">
                <h1 className="text-[32px] font-bold mr-1 md:text-[48px]">
                  {movie?.title}
                </h1>
                <Link href={`${movie?.homepage}`}>
                  <OpenInNewIcon sx={{ color: "white" }} />
                </Link>
              </div>
              <p className="text-[14px] font-light text-white/75 flex items-center space-x-[6px]">
                Movie<span className="px-2">•</span>
                {movie?.release_date?.toString().slice(0, 4)}
                <span className="px-2">•</span>
                {movie?.adult ? "R" : "PG"}
                <span className="px-2">•</span>
                {movie?.runtime}min
              </p>
              {/* ratings */}
              <div className="flex items-center mt-2">
                <StarRateRoundedIcon sx={{ color: "yellow" }} />
                <p className="tracking-[1px] ml-1">
                  {movie?.vote_average?.toFixed(2)}
                  <span className="space-x-1 text-white/75">
                    /10&nbsp;({movie?.vote_count} ratings)
                  </span>
                </p>
              </div>
              {/* genres */}
              <div className="mt-4 flex flex-wrap text-white/75 justify-start gap-2">
                {movie?.genres ? (
                  movie?.genres.map((item, index) => (
                    <span
                      key={index}
                      className="rounded-full border-[1px] border-white/75 py-1 px-3"
                    >
                      {item?.name}
                    </span>
                  ))
                ) : (
                  <span>NA</span>
                )}
              </div>
              <p className="mt-8">
                {movie?.tagline}
                <br />
                <br />
                {movie?.overview}
              </p>
            </div>
          </div>

          {/* cast  */}
          <div
            className={`${
              credits?.cast?.length > 0 ? "mt-6 md:mt-10" : "hidden"
            }`}
          >
            <h2 className="font-bold text-[24px] mb-2 flex items-center md:text-[32px] md:mb-4">
              Top Cast&nbsp;
              {/* <span className="text-white/75 mx-1 text-[14px]">
                {credits?.cast?.length + 1}
              </span>{" "} */}
              <ArrowForwardIosIcon sx={{ color: "white" }} />
            </h2>
            <Swiper
              slidesPerView={"2.7"}
              spaceBetween={16}
              breakpoints={{
                768: {
                  slidesPerView: 5.2,
                },
                1024: {
                  slidesPerView: 8.5,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper"
            >
              {credits?.cast?.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="w-[240px] h-[120px] md:w-[470px] md:h-[120px]"
                >
                  <div className="flex justify-center flex-col items-center">
                    <div className="rounded-full w-[100px] h-[100px]">
                      {item.profile_path ? (
                        <Image
                          src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                          width={100}
                          height={100}
                          alt={item.name}
                          className="rounded-full w-[100px] h-[100px] object-cover"
                          priority={false}
                        />
                      ) : (
                        <Skeleton
                          variant="circular"
                          width="100%"
                          height="100%"
                          animation="wave"
                          sx={{ bgcolor: "grey.800" }}
                        />
                      )}
                    </div>
                    <h3 className="font-bold mt-1 text-center">{item.name}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* videos  */}
          <div
            className={`${
              videos?.results?.length > 0 ? "mt-6 md:mt-10" : "hidden"
            }`}
          >
            <h2 className="font-bold text-[24px] mb-2 flex items-center md:text-[32px] md:mb-4">
              Videos&nbsp;
              {/* <span className="text-white/75 mx-1 text-[14px]">
                {videos?.results?.length + 1}
              </span>{" "} */}
              <ArrowForwardIosIcon sx={{ color: "white" }} />
            </h2>
            <Swiper
              slidesPerView={"1.7"}
              spaceBetween={16}
              breakpoints={{
                768: {
                  slidesPerView: 3.2,
                },
                1024: {
                  slidesPerView: 4.2,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper"
            >
              {videos?.results?.map((item, index) => (
                <SwiperSlide key={index} className="w-[240px] h-[200px]">
                  <div className="flex flex-col w-[240px] h-[200px]">
                    <YouTube videoId={item?.key} opts={opts} />
                    <h3 className="font-bold mt-1 cursor-default">
                      {item?.name}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* photos  */}
          <div
            className={`${
              photos?.backdrops?.length > 0 ? "mt-6 md:mt-10" : "hidden"
            }`}
          >
            <h2 className="font-bold text-[24px] mb-2 flex items-center md:text-[32px] md:mb-4">
              Photos&nbsp;
              {/* <span className="text-white/75 mx-1 text-[14px]">
                {photos?.backdrops?.length + 1}
              </span>{" "} */}
              <ArrowForwardIosIcon sx={{ color: "white" }} />
            </h2>
            <Swiper
              slidesPerView={"1.7"}
              spaceBetween={16}
              breakpoints={{
                768: {
                  slidesPerView: 2.2,
                },
                1024: {
                  slidesPerView: 3.2,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper"
            >
              {photos?.backdrops?.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="w-[240px] h-[200px] md:w-[400px] md:h-[400px]"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/original${item.file_path}`}
                    width={400}
                    height={400}
                    alt=""
                    className="w-[240px] h-[200px] md:w-[400px] md:h-[400px] object-cover object-center rounded-[8px]"
                    priority={false}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* more like this  */}
          <div
            className={`${
              similar?.results?.length > 0 ? "mt-6 md:mt-10" : "hidden"
            }`}
          >
            <h2 className="font-bold text-[24px] mb-2 flex items-center md:text-[32px] md:mb-4">
              More Like This&nbsp;
              <ArrowForwardIosIcon sx={{ color: "white" }} />
            </h2>
            <div className="grid grid-cols-2 gap-4 row-span-1 md:grid-cols-3 md:gap-x-[29px] md:gap-y-6 xl:grid-cols-4 xl:gap-x-[40px] xl:gap-y-8">
              {similar?.results?.slice(0, 4).map((item, index) => (
                <CollectionCard key={index} item={item} mediaType="movie" />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <SearchResults
          filteredData={filteredData}
          mediaType="movie"
          totalPages={filteredData?.total_pages}
          page={page}
          setPage={setPage}
        />
      )}
    </main>
  );
};

export default page;
