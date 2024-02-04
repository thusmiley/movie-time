"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import logo from "../../public/images/logo.svg";
import avatar from "../../public/images/image-avatar.png";
import { useBookmarkContext } from "@/context/BookmarkContext";

const NavBar = () => {
  const pathname = usePathname();
  const { resetSearch } = useBookmarkContext();

  return (
    <header className="xl:h-screen xl:fixed xl:pb-[64px]">
      <div className="bg-navy md:mx-[25px] md:rounded-[10px] md:mt-6 xl:mt-8 xl:ml-8 xl:h-full">
        <nav className="p-4 flex justify-between items-center md:p-5 xl:flex-col xl:items-stretch xl:h-full xl:p-8">
          {/* logo */}
          <Link href="/" title="HOME" onClick={resetSearch}>
            <Image
              src={logo}
              alt="movie time logo"
              className="w-8 h-auto object-contain object-center"
            />
          </Link>

          <div className="flex items-center space-x-6 md:space-x-8 xl:flex-col xl:space-x-0 xl:mt-[100px] xl:space-y-10 xl:absolute xl:left-[70px]">
            {/* home  */}
            <Link
              href="/"
              className={pathname == "/" ? "menu-active" : ""}
              title="HOME"
              onClick={resetSearch}
            >
              <svg
                width="20"
                height="20"
                alt="home"
                className="object-contain w-5 h-auto object-center"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-colors duration-200 ease-in-out hover:fill-red"
                  d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
                  fill="#5A698F"
                />
              </svg>
            </Link>
            {/* movies  */}
            <Link
              href="/movies"
              className={pathname == "/movies" ? "menu-active" : ""}
              title="MOVIES"
              onClick={resetSearch}
            >
              <svg
                width="20"
                height="20"
                alt="movies"
                className="object-contain object-center w-5 h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-colors duration-200 ease-in-out hover:fill-red"
                  d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
                  fill="#5A698F"
                />
              </svg>
            </Link>
            {/* tv series  */}
            <Link
              href="/tvseries"
              className={pathname == "/tvseries" ? "menu-active" : ""}
              title="TV SERIES"
              onClick={resetSearch}
            >
              <svg
                width="20"
                height="20"
                alt="tv series"
                className="object-contain object-center w-5 h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-colors duration-200 ease-in-out hover:fill-red"
                  d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
                  fill="#5A698F"
                />
              </svg>
            </Link>
            {/* bookmarked */}
            <Link
              href="/bookmarked"
              className={pathname == "/bookmarked" ? "menu-active" : ""}
              title="BOOKMARKED"
              onClick={resetSearch}
            >
              <svg
                width="17"
                height="20"
                alt="bookmarked"
                className="object-cover object-center w-[17px] h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-colors duration-200 ease-in-out hover:fill-red"
                  d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
                  fill="#5A698F"
                />
              </svg>
            </Link>
          </div>

          {/* avatar */}
          <Image
            src={avatar}
            alt="movie time logo"
            className="w-8 h-auto object-contain object-center border-white border-[1px] rounded-full"
          />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
