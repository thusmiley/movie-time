import tmdbLogo from "../../public/images/tmdb logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 md:px-[25px] md:mb-20 xl:px-[164px] xl:mb-[64px]">
      <div className="flex flex-col justify-center items-center">
        <p className="uppercase tracking-[7.5px] mr-[-7.5px] text-center mb-2">
          Powered by
        </p>
        <Link href="https://www.themoviedb.org">
          <Image
            src={tmdbLogo}
            width={40}
            height={190}
            alt="tmdb logo"
            className="w-[171px] h-auto object-contain object-center"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
