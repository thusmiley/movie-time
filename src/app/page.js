"use client";
import Recommended from "@/components/Recommended";
import Search from "@/components/Search";
import Trending from "@/components/Trending";
import { useState, useEffect } from "react";
import data from "../utils/data";

export default function Home() {
  const [searchAllMovies, setSearchAllMovies] = useState(data);

  // useEffect(() => {
  //   console.log(filterAllMovies);
  // }, filterAllMovies);
  return (
    <main className="min-h-screen mb-[60px]">
      <Search category={"Search for movies or TV series"} dataToSearch={searchAllMovies} setDataToSearch={setSearchAllMovies} />
      <Trending  />
      <Recommended />
    </main>
  );
}
