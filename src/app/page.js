"use client";
import Recommended from "@/components/Recommended";
import Trending from "@/components/Trending";
import { useState, useEffect } from "react";

export default function Home() {
  const [trending, setTrending] = useState(false);
  return (
    <main className="min-h-screen mb-[60px]">
      <Trending />
      <Recommended />
    </main>
  );
}
