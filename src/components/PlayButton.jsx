"use client";
import Image from "next/image";
import closeIcon from "../../public/images/icon-close.svg";
import { useState, useEffect } from "react";
import playIcon from "../../public/images/icon-play.svg";
import "dotenv/config";
import ReactPlayer from "react-player/lazy";
import Modal from "react-modal";
import { options } from "@/utils/api";

const PlayButton = ({ videoId, showMovies }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [videoKey, setVideoKey] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setVideoKey(
          response.results.filter((obj) => obj.type === "Trailer")[0]?.key
        );
      })
      .catch((err) => console.error(err));
  }, [showMovies, videoKey]);

  return (
    <div>
      <div
        className="flex items-center p-[9px] bg-white/25 rounded-full w-[117px]"
        onClick={() => setIsOpen(!modalIsOpen)}
      >
        <Image
          src={playIcon}
          alt="play"
          width={30}
          height={30}
          className="w-[30px] h-auto object-contain"
        />
        <p className="ml-[19px] text-[18px] font-medium">Play</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        className={`${
          modalIsOpen ? "relative" : "hidden"
        } top-0 bottom-0 left-0 right-0 bg-black/60 w-full h-full grid place-content-center `}
        ariaHideApp={false}
      >
        <div>
          <Image
            src={closeIcon}
            alt="close"
            width={18}
            height={17}
            className="w-[18px] h-auto object-contain mb-5 float-right cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoKey}`}
          // light={true}
          height="50vh"
          width="80vw"
          controls={true}
          className="overflow-hidden bg-black/80"
        />
      </Modal>
    </div>
  );
};

export default PlayButton;
