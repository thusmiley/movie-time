import { useRouter } from "next/navigation";
import "dotenv/config";
import { options } from "@/utils";
import { useState, useEffect, useContext } from "react";
import Search from "@/components/Search";
import { useBookmarkContext } from "@/context/BookmarkContext";

const CollectionPageTemplate = () => {
    const router = useRouter();
    const [page, setPage] = useState(1);
    const [isMovie, setIsMovie] = useState(true);
    const { searchInput } = useBookmarkContext();
    
  return <div>CollectionPageTemplate</div>;
};

export default CollectionPageTemplate;
