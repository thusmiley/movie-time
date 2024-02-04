"use client";
import Image from "next/image";
import closeIcon from "../../public/images/icon-close.svg";
import { useState, useEffect } from "react";
import playIcon from "../../public/images/icon-play.svg";
import "dotenv/config";
import ReactPlayer from "react-player/lazy";
import Modal from "react-modal";
import { options } from "@/utils";

const PlayButton = ({ videoId, isMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [videoKey, setVideoKey] = useState();

  useEffect(() => {
    isMovie
      ? fetch(
          `https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            response?.results?.length !== 0
              ? response?.results?.map((obj) => {
                  if (obj.type === "Trailer") {
                    setVideoKey(obj.key);
                    return;
                  } else if (obj.type) {
                    setVideoKey(obj.key);
                    return;
                  } else {
                    setVideoKey("");
                    return;
                  }
                })
              : setVideoKey("");
          })
          .catch((err) => console.error(err))
      : fetch(
          `https://api.themoviedb.org/3/tv/${videoId}/videos?language=en-US`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            response?.results?.length !== 0
              ? response?.results?.map((obj) => {
                  if (obj.type === "Trailer") {
                    setVideoKey(obj.key);
                    return;
                  } else if (obj.type) {
                    setVideoKey(obj.key);
                    return;
                  } else {
                    setVideoKey("");
                    return;
                  }
                })
              : setVideoKey("");
          })
          .catch((err) => console.error(err));
  }, [isMovie, videoId]);

  return (
    <div>
      {videoKey === "" ? (
        <p className="p-[9px] bg-black/35 rounded-full w-[150px] text-center cursor-default">
          No videos found
        </p>
      ) : (
        <div
          className="flex items-center p-[9px] bg-white/25 rounded-full w-[117px] cursor-pointer"
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
      )}

      <Modal
        isOpen={modalIsOpen}
        className={`${
          modalIsOpen ? "relative" : "hidden"
        } top-0 bottom-0 left-0 right-0 bg-black/70 w-full h-full grid place-content-center `}
        ariaHideApp={false}
      >
        <div>
          <Image
            src={closeIcon}
            alt="close"
            width={18}
            height={17}
            className="w-[18px] h-auto object-contain mb-5 float-right cursor-pointer hover:scale-105"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="w-[80%] h-auto">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoKey}`}
                      controls={true}
                      light={true}
                      width='80vw'
            className="overflow-hidden bg-black/80"
          />
        </div>
      </Modal>
    </div>
  );
};

export default PlayButton;
