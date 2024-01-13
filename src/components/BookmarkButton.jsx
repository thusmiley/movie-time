import Image from "next/image";
import bookmarkEmpty from "../../public/images/icon-bookmark-empty.svg";
import bookmarkFull from "../../public/images/icon-bookmark-full.svg";

const BookmarkButton = () => {
  return (
      <svg width="12" height="14" className="w-3 h-auto" alt="bookmark"  xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" strokeWidth="1.5" fill="none"/></svg>
  );
};

export default BookmarkButton;
