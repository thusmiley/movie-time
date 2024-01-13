import Image from "next/image";
import playIcon from "../../public/images/icon-play.svg";

const PlayButton = () => {
  return (
    <div className="flex items-center p-[9px] bg-white/25 rounded-full w-[117px]">
      <Image src={playIcon} alt="play" width={30} height={30} className="w-[30px] h-auto object-contain" />
      <p className="ml-[19px] text-[18px] font-medium">Play</p>
    </div>
  );
};

export default PlayButton;
