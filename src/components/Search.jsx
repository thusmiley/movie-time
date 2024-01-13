"use client";
import Image from "next/image";
import searchIcon from "../../public/images/icon-search.svg";
import { useState, useEffect } from "react";

const Search = ({ category, setSearchInput }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(e.target.search.value.toLowerCase());
  };

  return (
    <form className="flex items-center my-4 px-4 mx-auto md:px-[25px] md:my-[25px] xl:ml-[164px] xl:pt-[50px] xl:mt-0 xl:pl-0 xl:pr-[36px]" onSubmit={handleSubmit}>
      <Image src={searchIcon} alt="search" className="w-6 h-auto object-contain object-center md:w-8" />
      <input
        type="search"
        name="search"
        placeholder={category}
        className="w-full py-2 ml-4 bg-almostBlack focus:border-b-grey border-b-[1px] border-transparent outline-none caret-red text-[16px] placeholder:text-white/50 font-light md:text-[24px] md:ml-6"
      />
    </form>
  );
};

export default Search;
