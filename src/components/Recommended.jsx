import data from "../utils/data";
import MovieCard from "./MovieCard";

const Recommended = () => {
  return (
    <section className="px-4 mt-6 overflow-hidden md:px-[25px] xl:ml-[164px] xl:pl-0 xl:pr-[36px] xl:mt-10">
      <h2 className="cat-heading font-light">Recommended for you</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-x-[29px] md:gap-y-6 xl:grid-cols-4 xl:gap-x-[40px] xl:gap-y-8">
        {data.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default Recommended;
