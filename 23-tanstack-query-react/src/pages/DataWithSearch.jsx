import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useEffect } from "react";

const DataWithSearch = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const fetchData = async () => {
    const query = debouncedSearch || ""; // default movies
    const res = await axios.get(
      `http://www.omdbapi.com/?s=${query}&apikey=2722f28a`,
    );

    console.log(res.data);
    return res.data;
  };

  const { data, isPending, error } = useQuery({
    queryKey: ["movies", debouncedSearch],
    queryFn: fetchData,
    enabled: !!debouncedSearch, // only search when input exists
  });

  // debounce + search loading
  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const movies = data?.Search || [];

  return (
    <div className="p-4">
      {/* search input */}
      <label htmlFor="title" className="text-xl font-semibold">
        Search your movie
      </label>
      <input
        type="text"
        placeholder="Search by title..."
        id="title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 my-2 w-full"
      />

      {/* loading / error */}
      {isSearching && search && !isPending && <p>Searching...</p>}
      {error && <p>No data found.</p>}

      {/* grid */}
      {!isPending && !error && (
        <div className="grid grid-cols-4 gap-3 text-center mt-2">
          {movies.length === 0 ? (
            <p className="col-span-full text-center">No results found</p>
          ) : (
            movies.map((item) => (
              <div key={item.imdbID}>
                <img src={item.Poster} className="w-full h-100 object-cover" />
                <h3>{item.Title}</h3>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default DataWithSearch;
