import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../API/api";

const Home = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  if (isPending) {
    return "Loading...";
  }

  if (isError) {
    return <p>Error:{ error.message || "Something went wrong" }</p>;
  }

  return (
    <div className="grid grid-cols-4 p-4 gap-3 text-center">
      {data?.map((elem) => {
        const { id, download_url, author } = elem;
        return (
          <div key={id}>
            <img src={download_url} className="w-100 h-75 object-cover rounded-xl" />
            <h3 className="mt-3">{author}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
