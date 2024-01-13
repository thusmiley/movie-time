import Search from "@/components/Search";
import data from "../../utils/data";
import MovieCard from "@/components/MovieCard";

const TvSeries = () => {
  return (
    <main className="min-h-screen mb-[60px]">
      <Search category={"Search for TV series"} />

      <section className="px-4 overflow-hidden md:px-[25px] xl:ml-[164px] xl:pl-0 xl:pr-[36px]">
        <h2 className="cat-heading font-light">TV Series</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-x-[29px] md:gap-y-6 xl:grid-cols-4 xl:gap-x-[40px] xl:gap-y-8">
          {data.map((movie, index) => movie.category === "TV Series" && <MovieCard key={index} movie={movie} />)}
        </div>
      </section>
    </main>
  );
};

export default TvSeries;
