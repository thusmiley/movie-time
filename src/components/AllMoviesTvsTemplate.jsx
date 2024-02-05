"use client";
import "dotenv/config";
import { options } from "@/utils";
import { useState, useEffect, Fragment } from "react";
import Search from "@/components/Search";
import { useBookmarkContext } from "@/context/BookmarkContext";
import CollectionCard from "./CollectionCard";
import { Listbox, Transition } from "@headlessui/react";
import PaginationComponent from "./PaginationComponent";

const sortOptions = [
  { id: "popularity.desc", name: "Most popular" },
  { id: "popularity.asc", name: "Least popular" },
  { id: "title.asc", name: "A-Z" },
  { id: "title.desc", name: "Z-A" },
  { id: "vote_average.desc", name: "Highest rating" },
  { id: "vote_average.asc", name: "Lowest rating" },
  { id: "primary_release_date.desc", name: "Newest" },
  { id: "primary_release_date.asc", name: "Oldest" },
];

const AllMoviesTvsTemplate = ({ mediaType }) => {
  const [data, setData] = useState();
  const [selectedOption, setSelectedOption] = useState(sortOptions[0]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/${mediaType}?include_adult=false&include_video=true&language=en-US&page=${page}&sort_by=${selectedOption.id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.error(err));
  }, [mediaType, selectedOption, page]);

  return (
    <section className="px-4 mt-6 overflow-hidden md:px-[25px] xl:ml-[164px] xl:pl-0 xl:pr-[36px] xl:mt-10">
      <div className="relative">
        <h2 className="cat-heading font-light">
          {mediaType === "movie" ? "All Movies" : "All TV Series"} (
          {data?.total_results.toLocaleString()} results)
        </h2>
        <Listbox
          value={selectedOption}
          onChange={setSelectedOption}
          as={Fragment}
        >
          <div className="absolute top-0 right-0 z-10 font-light md:top-2">
            <Listbox.Button as={Fragment}>
              <button className="bg-red font-bold text-almostBlack cursor-pointer py-[2px] pl-4 pr-3 rounded-md flex justify-between items-center w-[170px]">
                {selectedOption.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#000"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
                </svg>
              </button>
            </Listbox.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Listbox.Options as={Fragment}>
                <ul className="mt-2 py-4 bg-black text-white rounded-md space-y-[6px] shadow-xl">
                  {sortOptions.map((option) => (
                    <Listbox.Option
                      key={option.id}
                      value={option}
                      as={Fragment}
                    >
                      {({ active, selected }) => (
                        <li
                          className={`${
                            active ? "text-red" : ""
                          } px-4 cursor-pointer font-light`}
                        >
                          {option.name}
                        </li>
                      )}
                    </Listbox.Option>
                  ))}
                </ul>
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 row-span-1 md:mb-[25px] md:grid-cols-3 md:gap-x-[29px] md:gap-y-6 xl:grid-cols-4 xl:gap-x-[40px] xl:gap-y-8">
        {data?.results?.map((item, index) => (
          <CollectionCard key={index} item={item} mediaType={mediaType} />
        ))}
      </div>

      <PaginationComponent
        totalPages={data?.total_pages}
        page={page}
        setPage={setPage}
      />
    </section>
  );
};

export default AllMoviesTvsTemplate;
