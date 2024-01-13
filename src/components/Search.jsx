import Image from "next/image";
import searchIcon from "../../public/images/icon-search.svg";

const Search = () => {
  return (
    <div className="flex items-center py-2 px-4 mx-auto md:px-[25px] md:py-[17px] xl:ml-[164px] xl:pt-[64px] xl:pl-0 xl:pr-[36px]">
      <Image src={searchIcon} alt="search" className="w-6 h-auto object-contain object-center md:w-8" />
      <input
        type="search"
        placeholder="Search for movies or TV series"
        className="w-full py-4 ml-4 bg-almostBlack focus:border-b-grey border-b-[1px] border-transparent outline-none caret-red text-[16px] placeholder:text-white/50 font-light md:text-[24px] md:ml-6"
      />
    </div>
  );
};

export default Search;
