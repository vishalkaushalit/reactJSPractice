import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchDataWithPagination } from "../API/api";
import { useState } from "react";

const DataWithPagination = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchDataWithPagination(pageNumber),
    placeholderData: keepPreviousData,
  });

  if (isPending) {
    return "Loading...";
  }

  if (isError) {
    return <p>Error:{error.message || "Something went wrong"}</p>;
  }

  return (
    <>
      <div className="grid grid-cols-4 p-4 gap-3 text-center">
        {data?.map((elem) => {
          const { id, download_url, author } = elem;
          return (
            <div key={id}>
              <img
                src={download_url}
                className="w-100 h-75 object-cover rounded-xl"
              />
              <h3 className="mt-3">{author}</h3>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-5">
        <button
          disabled={pageNumber === 1 ? true : false}
          onClick={() => setPageNumber((prev) => prev - 1)}
          className={`px-5 py-2 ${pageNumber === 1 ? "bg-gray-500" : "bg-black"} text-white text-md rounded cursor-pointer`}
        >
          Prev
        </button>
        <p className="text-2xl"> {pageNumber}</p>
        <button
          onClick={() => setPageNumber((prev) => prev + 1)}
          className="px-5 py-2 bg-black text-white text-md rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default DataWithPagination;
