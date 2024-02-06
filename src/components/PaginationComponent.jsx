import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PaginationComponent = ({ totalPages, setPage, page }) => {
  const handlePageChange = (event, value) => {
    setPage(value);
    scrollToTop();
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
    const maxpage = totalPages > 500 ? "500" : totalPages;

  return (
    <div className="flex justify-center mt-10">
      <Stack spacing={2}>
        <Pagination
          count={maxpage}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#ffffff",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.16)",
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "rgba(255, 255, 255, 0.20)",
              color: "#FC4747",
            },
          }}
          page={page}
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
};

export default PaginationComponent;
